document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');

  if (name.value.trim() === '') {
      setError(name, 'Name is required');
  } else {
      setSuccess(name);
  }

  if (email.value.trim() === '') {
      setError(email, 'Email is required');
  } else if (!isValidEmail(email.value)) {
      setError(email, 'Email is not valid');
  } else {
      setSuccess(email);
  }

  if (phone.value.trim() === '') {
      setError(phone, 'Phone is required');
  } else if (!isValidPhone(phone.value)) {
      setError(phone, 'Phone is not valid. Format: xxx-xxx-xxxx');
  } else {
      setSuccess(phone);
  }
}

function setError(element, message) {
  const formGroup = element.parentElement;
  const small = formGroup.querySelector('small');
  small.innerText = message;
  small.style.visibility = 'visible';
  element.style.borderColor = 'red';
}

function setSuccess(element) {
  const formGroup = element.parentElement;
  const small = formGroup.querySelector('small');
  small.style.visibility = 'hidden';
  element.style.borderColor = 'green';
}

function isValidEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

function isValidPhone(phone) {
  const re = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  return re.test(String(phone));
}