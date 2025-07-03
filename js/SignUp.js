export function signUp() {

    // sign-up block 
    const signUpBlock = document.querySelector('.sign-up');
    const signUpBtn = document.querySelector('#signUpClose');

    signUpBtn.addEventListener('click', () => {
        // signUpBlock.classList.add('sign-up--close');
        signUpBlock.remove()
    })
}