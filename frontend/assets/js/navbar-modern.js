// Navbar Inteligente SYB - Alternância de tema e menu responsivo

document.addEventListener('DOMContentLoaded', function() {
    // Theme Switch
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    const logoDark = document.getElementById('logo-dark');
    const logoLight = document.getElementById('logo-light');

    // Inicializa tema conforme preferência do usuário/sistema
    function setTheme(dark) {
        const head = document.head;
        let darkCss = document.getElementById('theme-dark-css');
        if (dark) {
            body.classList.add('dark-theme');
            // Carrega theme-dark.css se não estiver carregado
            if (!darkCss) {
                darkCss = document.createElement('link');
                darkCss.rel = 'stylesheet';
                darkCss.href = 'assets/css/theme-dark.css';
                darkCss.id = 'theme-dark-css';
                head.appendChild(darkCss);
            }
            if (logoDark && logoLight) {
                logoDark.style.display = 'block'; // syb-principal
                logoLight.style.display = 'none'; // syb-light
            }
        } else {
            body.classList.remove('dark-theme');
            // Remove theme-dark.css se estiver carregado
            if (darkCss) {
                darkCss.parentNode.removeChild(darkCss);
            }
            if (logoDark && logoLight) {
                logoDark.style.display = 'none'; // syb-principal
                logoLight.style.display = 'block'; // syb-light
            }
        }
    }

    // Detecta preferência inicial
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let userTheme = localStorage.getItem('syb-theme');
    if (userTheme === 'dark' || (userTheme === null && prefersDark)) {
        setTheme(true);
        if(themeSwitch) themeSwitch.checked = true;
    } else {
        setTheme(false);
        if(themeSwitch) themeSwitch.checked = false;
    }

    // Alternância manual
    if (themeSwitch) {
        themeSwitch.addEventListener('change', function(event) {
            setTheme(this.checked);
            localStorage.setItem('syb-theme', this.checked ? 'dark' : 'light');
        });
        // Bloquear propagation de click no label/spans
        const themeLabel = themeSwitch.closest('label.theme');
        if (themeLabel) {
            themeLabel.addEventListener('click', function(e) {
                // Só deixar passar se o alvo for o input
                if (e.target !== themeSwitch) {
                    e.preventDefault();
                }
            });
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
