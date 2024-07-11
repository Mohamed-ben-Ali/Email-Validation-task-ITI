document.addEventListener('DOMContentLoaded', function () {

    function validateEmail() {
        var emailInput = document.getElementById('emailInput').value;
        var resultElement = document.getElementById('emailValidationResult');

        if (emailInput.includes('@') && emailInput.indexOf('@') !== 0 && emailInput.indexOf('@') !== emailInput.length - 1) {
            resultElement.innerHTML = 'Email is valid';
            resultElement.style.color = 'green';
        }
        else {
            resultElement.innerHTML = 'Invalid Email';
            resultElement.style.color = 'red';
        }

    }

    var validationEmailBtn=document.getElementById('validateEmailBtn');
    validationEmailBtn.addEventListener('click', validateEmail);

});