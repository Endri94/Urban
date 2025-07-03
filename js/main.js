import { cookies } from './Cookie.js';
import { signUp } from './SignUp.js';
import { burgerMenu } from './Burger.js';
import { dropDownMenu } from './DropDownMenu.js';
import { headerLoopSearch } from './LoopSearch.js';
import { swiper } from './Swiper.js';
import { heroFiguresAnimation } from './FiguresHero.js';
import { validationForm } from './ValidationForm.js';



window.addEventListener('DOMContentLoaded', function () {
    cookies();
    signUp();
    burgerMenu();
    dropDownMenu();
    headerLoopSearch();
    heroFiguresAnimation();
    swiper();
    validationForm();
})