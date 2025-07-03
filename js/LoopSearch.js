export function headerLoopSearch() {


    // header-form-search
    const loopBtn = document.querySelector('#loopBtn');
    const headerFormSearch = document.querySelector('#headerFormSearch');
    const modalSearch = document.querySelector('.modal-search')
    loopBtn.addEventListener('click', () => {
        headerFormSearch.classList.toggle('header__form-mobile-active');
        modalSearch.classList.toggle('modal-search--active')
    })

}