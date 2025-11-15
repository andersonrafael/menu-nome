
/*const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
btnMobile.addEventListener('click', (toggleMenu));
*/
const btnMobile = document.getElementById('btn-mobile');
const menu = document.getElementById('menu');

// Adiciona um evento de clique ao botão "Menu"
btnMobile.addEventListener('click', function () {
    // Alterna a classe "active" no menu
    menu.classList.toggle('active');
});