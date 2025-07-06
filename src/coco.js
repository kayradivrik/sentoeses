
        // Utility function to safely get element
        function getElement(id) {
            const element = document.getElementById(id);
            if (!element) {
                console.warn(`Element with id "${id}" not found`);
                return null;
            }
            return element;
        }

        // Mobile menu functionality
        document.addEventListener('DOMContentLoaded', function () {
            const mobileMenu = getElement('mobile-menu');
            const menuButton = getElement('mobile-menu-button');
            const closeButton = getElement('close-menu-button');
            const menuIcon = menuButton?.querySelector('.menu-icon');

            if (!mobileMenu || !menuButton || !closeButton) return;

            // Submenu functionality
            const navItems = document.querySelectorAll('.nav-item > a');

            navItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    const submenuId = item.getAttribute('data-submenu') + '-submenu';
                    const submenu = getElement(submenuId);
                    const arrow = item.querySelector('svg');

                    if (!submenu || !arrow) return;

                    // Close other submenus
                    document.querySelectorAll('.submenu').forEach(menu => {
                        if (menu.id !== submenuId && menu.classList.contains('active')) {
                            menu.classList.remove('active');
                            const prevArrow = menu.previousElementSibling?.querySelector('svg');
                            if (prevArrow) prevArrow.classList.remove('rotate-180');
                        }
                    });

                    // Toggle current submenu
                    submenu.classList.toggle('active');
                    arrow.classList.toggle('rotate-180');

                    // Animate submenu items
                    if (submenu.classList.contains('active')) {
                        const items = submenu.querySelectorAll('a');
                        items.forEach((item, index) => {
                            item.style.transitionDelay = `${index * 0.1}s`;
                        });
                    }
                });
            });

            function openMenu() {
                mobileMenu.classList.remove('hidden');
                requestAnimationFrame(() => {
                    mobileMenu.classList.add('active');
                });
                document.body.style.overflow = 'hidden';
            }

            function closeMenu() {
                mobileMenu.classList.remove('active');
                // Close all submenus
                document.querySelectorAll('.submenu').forEach(submenu => {
                    submenu.classList.remove('active');
                });
                document.querySelectorAll('.nav-item > a svg').forEach(arrow => {
                    arrow.classList.remove('rotate-180');
                });
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 500);
                document.body.style.overflow = '';
            }

            menuButton.addEventListener('click', openMenu);
            closeButton.addEventListener('click', closeMenu);
        });

        // Navbar hover functionality
        document.addEventListener('DOMContentLoaded', function () {
            const navbar = getElement('navbar');
            const overlay = getElement('nav-overlay');
            let timeoutId = null;

            if (!navbar || !overlay) return;

            function showOverlay() {
                clearTimeout(timeoutId);
                overlay.classList.add('active');
            }

            function hideOverlay() {
                timeoutId = setTimeout(() => {
                    overlay.classList.remove('active');
                }, 100);
            }

            navbar.addEventListener('mouseenter', showOverlay);
            navbar.addEventListener('mouseleave', hideOverlay);
            overlay.addEventListener('mouseenter', () => {
                clearTimeout(timeoutId);
            });
            overlay.addEventListener('mouseleave', hideOverlay);

            // Click outside to close
            document.addEventListener('click', (e) => {
                if (!navbar.contains(e.target) && !overlay.contains(e.target)) {
                    hideOverlay();
                }
            });
        });

        // Language Dropdown functionality
        function setupLanguageDropdown(triggerId, menuId) {
            const trigger = getElement(triggerId);
            const menu = getElement(menuId);
            
            if (!trigger || !menu) return;

            trigger.addEventListener('click', (e) => {
                e.stopPropagation();
                const triggerHeight = trigger.offsetHeight;
                menu.style.bottom = `${triggerHeight}px`;
                menu.classList.toggle('hidden');
            });

            document.addEventListener('click', (e) => {
                if (!menu.contains(e.target) && !trigger.contains(e.target)) {
                    menu.classList.add('hidden');
                }
            });
        }

        // Initialize language dropdowns
        document.addEventListener('DOMContentLoaded', function() {
            setupLanguageDropdown('desktop-lang-trigger', 'desktop-lang-menu');
            setupLanguageDropdown('mobile-lang-trigger', 'mobile-lang-menu');
        });

  // "İyiki Sento Var!" sliderı
  var testimonialSwiper = new Swiper('.testimonial-swiper', {
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    slidesPerView: 1,
    effect: 'slide',
    speed: 700,
  });
  // Sentoiyiki bölümündeki slider (mySwiper)
  var mySwiper = new Swiper('.mySwiper', {
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    // pagination: { el: '.swiper-pagination', clickable: true },
    slidesPerView: 1,
    effect: 'slide',
    speed: 700,
  });
  // Marka sliderı (brandSwiper)
  var brandSwiper = new Swiper('.brandSwiper', {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 4 }
    }
  });
