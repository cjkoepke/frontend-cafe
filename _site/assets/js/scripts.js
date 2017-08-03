'use strict';

(function () {

    var error = document.getElementById('message');
    var form = document.getElementById('sign-up');
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!name.value || !email.value) displayMessage("It appears that you forgot a field! Please try again.");
    });

    var displayMessage = function displayMessage(message) {
        error.textContent = message;
        error.classList.add('visible');
        setTimeout(function () {
            error.classList.remove('visible');
        }, 3000);
    };
})();