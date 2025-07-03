export function dropDownMenu() {


    // dropdown header

    const headerLinkBtn = document.querySelector('#headerDropDown');
    const subMenu = document.querySelector('#headerSubMenu');
    const click = document.querySelector('header__list-mobile--close')
    headerLinkBtn.addEventListener('click', () => {
        subMenu.classList.toggle('header__sub-list-active');
        document.querySelector('.header__link-icon').classList.toggle('header__link-icon--active')
    })

    document.addEventListener('click', function (e) {
        if (!subMenu.contains(e.target) && e.target !== headerLinkBtn) {
            subMenu.classList.remove('header__sub-list-active');
            document.querySelector('.header__link-icon').classList.remove('header__link-icon--active')

        }
    });
}