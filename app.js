function validateEmail(email) {
  var reg =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (reg.test(email)) {
    document.getElementById('email').style.background = '#ccffcc';
    document.getElementById('email-error').style.display = 'none';
    return true;
  } else {
    document.getElementById('email').style.background = '#e35152';
    document.getElementById('email-error').style.display = 'block';

    return false;
  }
}

const email = document.getElementById('email');
email.addEventListener('blur', () => {
  validateEmail(email.value);
});

function validateCountry(country) {
  var reg = /^[a-zA-Z]{2,}/;

  if (reg.test(country)) {
    document.getElementById('country').style.background = '#ccffcc';
    document.getElementById('country-error').style.display = 'none';
    return true;
  } else {
    document.getElementById('country').style.background = '#e35152';
    document.getElementById('country-error').style.display = 'block';
    return false;
  }
}

const country = document.getElementById('country');
country.addEventListener('blur', () => {
  validateCountry(country.value);
});

function validateZip(zip) {
  var reg = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
  if (reg.test(zip)) {
    document.getElementById('zipcode').style.background = '#ccffcc';
    document.getElementById('zipcode-error').style.display = 'none';
    return true;
  } else {
    document.getElementById('zipcode').style.background = '#e35152';
    document.getElementById('zipcode-error').style.display = 'block';
    return false;
  }
}

const zipcode = document.getElementById('zipcode');
zipcode.addEventListener('blur', () => {
  validateZip(zipcode.value);
});

const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

function validatePassword(pw) {
  var pw = document.getElementById('password').value;
  var passwordError = document.getElementById('password-error');
  if (pw == '') {
    passwordError.style.display = 'block';
    password.style.background = '#e35152';
    passwordError.innerHTML = 'enter a password';
    return false;
  }

  if (pw.length < 8) {
    passwordError.style.display = 'block';
    password.style.background = '#e35152';
    passwordError.innerHTML = 'must be at least 8 characters';
    return false;
  }

  if (pw.length > 15) {
    passwordError.style.display = 'block';
    password.style.background = '#e35152';
    passwordError.innerHTML = 'must be fewer than 15 characters';
    return false;
  } else {
    password.style.background = '#ccffcc';
    passwordError.style.display = 'none';
    return true;
  }
}

function checkPasswordMatch() {
  var confirmPasswordError = document.getElementById('confirm-password-error');
  if (password.value != confirmPassword.value) {
    confirmPassword.style.background = '#e35152';
    confirmPasswordError.style.display = 'block';
    return false;
  } else {
    confirmPassword.style.background = '#ccffcc';
    confirmPasswordError.style.display = 'none';
    return true;
  }
}

password.addEventListener('input', () => {
  validatePassword(password.value);
});

confirmPassword.addEventListener('input', () => {
  checkPasswordMatch(confirmPassword.value);
});

function validateForm() {
  if (
    validateEmail(email.value) &&
    validateCountry(country.value) &&
    validateZip(zipcode.value) &&
    validatePassword(password.value) &&
    checkPasswordMatch(confirmPassword.value)
  ) {
    alert('high five! you signed up!');
    return true;
  } else {
    console.log('not validated');
    return false;
  }
}

const submitBtn = document.getElementById('form-submit');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  validateForm();
  document.getElementById('signup-form').reset();
});

function resetInputs() {}
