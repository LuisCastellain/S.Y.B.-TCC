// Navbar Inteligente SYB - Alternância de tema e menu responsivo

document.addEventListener('DOMContentLoaded', function() {
    // Garante que o tema escuro esteja aplicado e o logo correto seja exibido
    const body = document.body;
    if (!body.classList.contains('dark-theme')) {
        body.classList.add('dark-theme'); // Garante a classe, caso não esteja no HTML
    }

    const logoDark = document.getElementById('logo-dark');
    const logoLight = document.getElementById('logo-light');
    if (logoDark && logoLight) {
        logoDark.style.display = 'block'; // syb-principal (dark logo)
        logoLight.style.display = 'none'; // syb-light (light logo)
    }

    // Opcional: Remover o switch de tema do DOM se ele ainda existir
    const themeSwitchElement = document.getElementById('theme-switch');
    if (themeSwitchElement) {
        const themeSwitchParent = themeSwitchElement.closest('label.theme') || themeSwitchElement.parentElement;
        if (themeSwitchParent) {
            themeSwitchParent.style.display = 'none'; // Esconde o switch
        }
    }

    // Navbar Mobile
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');

    function openMobileMenu() {
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    if(menuOpen && mobileMenu && overlay) {
        menuOpen.addEventListener('click', openMobileMenu);
        overlay.addEventListener('click', closeMobileMenu);
    }
    if(menuClose) {
        menuClose.addEventListener('click', closeMobileMenu);
    }

    // Fecha menu mobile ao clicar em link
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
});
