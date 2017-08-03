---
---
(function() {

    const error = document.getElementById('message');
    const form = document.getElementById('sign-up');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!name.value || !email.value)
            displayMessage("It appears that you forgot a field! Please try again.");
    })

    const displayMessage = (message) => {
        error.textContent = message;
        error.classList.add('visible');
        setTimeout(() => {
            error.classList.remove('visible');
        }, 3000);
    }

})()
