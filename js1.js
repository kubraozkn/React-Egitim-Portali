document.getElementById('signUpLink').addEventListener('click', function () {
    document.querySelector('.sign-in-container').classList.remove('active');
    document.querySelector('.sign-up-container').classList.add('active');
});

document.getElementById('signInLink').addEventListener('click', function () {
    document.querySelector('.sign-up-container').classList.remove('active');
    document.querySelector('.sign-in-container').classList.add('active');
});
