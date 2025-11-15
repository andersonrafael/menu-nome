/* Espera o HTML ser totalmente carregado */
document.addEventListener('DOMContentLoaded', function () {

    // Elementos do Menu
    const btnMobile = document.getElementById('btn-mobile');
    const nav = document.getElementById('nav');

    // Elementos de Scroll
    const header = document.getElementById('header');
    const backToTopBtn = document.getElementById('back-to-top');
    const scrollThreshold = 50;
    const topBtnThreshold = 300;

    // Elementos de Tema
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    /* --- 1. LÓGICA DO TEMA (DIA/NOITE) --- */

    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.remove('light-mode'); // Garante que o modo claro seja removido
            themeToggle.setAttribute('aria-label', 'Mudar para modo claro');
        } else {
            body.classList.add('light-mode'); // Adiciona o modo claro
            themeToggle.setAttribute('aria-label', 'Mudar para modo escuro');
        }
    }

    // Verifica a preferência salva. PADRÃO AGORA É 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    // Adiciona o evento de clique no botão de tema
    themeToggle.addEventListener('click', () => {
        let newTheme;
        // Verifica se o modo claro está ativo
        if (body.classList.contains('light-mode')) {
            newTheme = 'dark';
        } else {
            newTheme = 'light';
        }

        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });


    /* --- 2. LÓGICA DO MENU MOBILE --- */
    function toggleMenu(event) {
        if (event.type === 'touchstart') event.preventDefault();
        nav.classList.toggle('active');
        const isActive = nav.classList.contains('active');
        btnMobile.setAttribute('aria-expanded', isActive);

        if (isActive) {
            btnMobile.setAttribute('aria-label', 'Fechar Menu');
        } else {
            btnMobile.setAttribute('aria-label', 'Abrir Menu');
        }
    }

    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);


    /* --- 3. LÓGICA DE SCROLL (ROLAGEM) --- */
    function handleScroll() {
        const scrollY = window.scrollY;

        // Efeito do Cabeçalho e ajuste do Body
        if (scrollY > scrollThreshold) {
            header.classList.add('scrolled');
            body.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            body.classList.remove('scrolled');
        }

        // Botão "Voltar ao Topo"
        if (scrollY > topBtnThreshold) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }

    window.addEventListener('scroll', handleScroll);

    /* --- 4. LÓGICA PARA FECHAR O MENU AO CLICAR NO LINK (MOBILE) --- */
    const menuLinks = document.querySelectorAll('#menu a');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                btnMobile.setAttribute('aria-expanded', 'false');
                btnMobile.setAttribute('aria-label', 'Abrir Menu');
            }
        });
    });

});