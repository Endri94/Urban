export function swiper() {

    // swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        // Navigation arrows
        navigation: {
            nextEl: '.clients-arrows__btn-next',
            prevEl: '.clients-arrows__btn-prev',
        },
        breakpoints: {
            310: {
                slidesPerView: 1
            },
            1000: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },

        }
    });
}