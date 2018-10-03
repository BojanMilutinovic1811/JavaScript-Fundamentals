// variables 
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      form = document.getElementById('email-form'),
      spinner = document.getElementById('spinner');




// eventlisteners

document.addEventListener('DOMContentLoaded', appInit);
email.addEventListener('blur', validateField);
subject.addEventListener('blur', validateField);
message.addEventListener('blur', validateField);

resetBtn.addEventListener('click', resetForm);
form.addEventListener('submit', sendEmail);

// functions

function appInit() {
    sendBtn.disabled = true;
}

function sendEmail(e) {
    e.preventDefault();
    spinner.style.display = 'block';

    setTimeout(() => spinner.style.display = 'none', 3000);

}

function validateField() {
    
    validateLength(this);
    if(this.type === 'email') {
        validateEmail(this)
    }

    if(email.value !== '' && message.value !== '' && subject.value !== '') {
        let errors = document.querySelectorAll('.error')    
        if(errors.length === 0){
            sendBtn.disabled = false;
        }
    }
}

function validateLength(field) {
    if(field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

function validateEmail(field) {
    const emailText = field.value;
    if(emailText.indexOf('@') === -1) {
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    } else {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }
}

function resetForm() {
    form.reset();
}