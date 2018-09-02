const body = document.querySelector('body'),
      burgerBtn = document.getElementById('burger'),
      navLink = document.querySelectorAll('.header__nav-link');

for(let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", e => {
        e.preventDefault();
        var href = e.target.hash + '';
        mobileClick();

        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });
    });
}

burgerBtn.addEventListener("click", e => {
    e.preventDefault();
    body.classList.toggle('header_open');
});

function mobileClick() {
    if (body.clientWidth < 768) {
        burgerBtn.click();
    }
}