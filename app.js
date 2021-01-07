const warnColor = "rgb(255, 82, 99)";
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errorMsg = document.querySelector('.output');

    if(regex.test(form.email.value)) {
        errorMsg.textContent = 'You\'ve been subscribed.';
        errorMsg.style.visibility = 'visible';
        errorMsg.style.color = 'limegreen';
        form.email.style.borderColor = 'limegreen';
    } else {
        errorMsg.textContent = 'Please provide a valid email address.';
        errorMsg.style.visibility = 'visible';
        errorMsg.style.color = warnColor;
        form.email.style.borderColor = warnColor;
    }

    setTimeout(() => {
        if(errorMsg.style.visibility = 'visible') {
            errorMsg.style.visibility = 'hidden';
        }
        form.email.style.removeProperty('border-color');
        form.reset();
    }, 3000);
});