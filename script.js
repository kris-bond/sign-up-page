const submit = document.getElementById('submit-btn');

submit.addEventListener("click", e => {
    
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('confirm-password');
    const errorMsg = document.querySelector('.error-wrapper');

    if (password.value !== passwordConfirm.value) {
        e.preventDefault();
        password.classList.add('error');
        passwordConfirm.classList.add('error');
        errorMsg.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';
    }

});