window.onload = () => {
    const body = document.querySelector('body'),
        burgerBtn = document.getElementById('burger'),
        navLink = document.querySelectorAll('.header__nav-link'),
        fadeInElements = document.querySelectorAll('.animate__fade-in');

    function mobileClick() {
        if (body.clientWidth < 768) {
            burgerBtn.click();
        }
    }

    window.addEventListener('scroll', () => {

        fadeInElements.forEach( (el, i) => {
            const bottom_of_window = window.innerHeight,
                bottom_of_object = el.getBoundingClientRect().top,
                num = i%5 + 4;
            el.style.transitionDelay = '.'+ num + 's';

            if (parseInt(bottom_of_window) > bottom_of_object) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
            else {
                el.style.opacity = '0';
                el.style.transform = 'translateY(10px)';
            }
        });
    });

    navLink.forEach((el) => {
        el.addEventListener("click", e => {
            e.preventDefault();
            const href = e.target.hash + '';
            mobileClick();

            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    burgerBtn.addEventListener("click", e => {
        e.preventDefault();
        body.classList.toggle('header_open');
    });
}