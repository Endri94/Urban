export function validationForm() {


    // justvalidate
    const form = document.getElementById('subscribeForm');
    const successModal = document.getElementById('successModal');
    const errorModal = document.getElementById('errorModal');
    const closeSuccessModal = document.getElementById('closeSuccessModal');
    const closeErrorModal = document.getElementById('closeErrorModal');

    const validator = new JustValidate('#subscribeForm');

    validator

        .addField('#subscribeEmail', [
            {
                rule: 'required',
                errorMessage: 'Введите Ваш Email',
            },
            {
                rule: 'email',
                errorMessage: 'Введите корректный Email',
            },
        ])
        .onSuccess((event) => {
            event.preventDefault();

            const formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData,
            })
                .then(response => {
                    if (response.ok) {
                        successModal.classList.remove('hidden');
                        form.reset();
                    } else {
                        errorModal.classList.remove('hidden');
                    }
                })
                .catch(error => {
                    console.error('Ошибка:', error);
                    errorModal.classList.remove('hidden');
                });
        });

    closeSuccessModal.addEventListener('click', () => {
        successModal.classList.add('hidden');
    });

    closeErrorModal.addEventListener('click', () => {
        errorModal.classList.add('hidden');
    });


}