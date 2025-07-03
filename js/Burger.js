export function burgerMenu() {

    // burger
    const burgerBtn = document.querySelector('.burger');
    const header = document.querySelector('.header');

    burgerBtn.addEventListener('click', () => {
        header.classList.toggle('header--open');

    })
}