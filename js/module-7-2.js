// refs
const refs = {
  btn: document.querySelector('.js-btn'),
  input: document.querySelector('.js-input'),
  output: document.querySelector('.js-output'),
  sendForm: document.querySelector('form'),
  sendInput: document.querySelectorAll('.form-input'),
  submitBtn: document.querySelector('form button'),
};

// Lisner
// refs.btn.addEventListener('click', onBtnClick);
// refs.input.addEventListener('blur', onBlur);
// refs.input.addEventListener('input', onInput);
// refs.input.addEventListener('focus', onFocus);
refs.sendForm.addEventListener('submit', onSendForm);
// document.addEventListener('keydown', (e) => {
//   console.log(e.code);
// });

// refs.sendInput.forEach((input) => {
//   if (input.type !== 'number') {
//     input.addEventListener('blur', onBlur);
//   }
// });

// document.addEventListener('DOMContentLoaded', onRenderPage);

// Callback
// function onBtnClick(event) {
//   refs.input.style.borderColor = 'red';

//   if (!refs.input.value.trim()) {
//     refs.output.textContent = 'Empty Input';
//     return;
//   }

//   refs.output.textContent = refs.input.value.trim();
// }

// function onInput(event) {
//   const input = event.currentTarget;

//   if (input.value.trim().length < 4) {
//     input.classList.add('error');
//     input.classList.remove('success');
//     refs.btn.disabled = true;
//   } else {
//     input.classList.add('success');
//     input.classList.remove('error');
//     refs.btn.disabled = false;
//   }
// }

const { userName, userAge, userEmail } = refs.sendForm;

userName.addEventListener('blur', (e) => {
  const inputLength = e.currentTarget.value.trim().length;

  if (inputLength < 3) {
    errorInput(e);
  } else {
    successInput(e);
  }

  validateForm();
});

userAge.addEventListener('blur', (e) => {
  const inputValue = e.currentTarget.value;

  if (inputValue < 10) {
    errorInput(e);
  } else {
    successInput(e);
  }

  validateForm();
});

userEmail.addEventListener('blur', (e) => {
  const inputLength = sliceEmail().length;

  if (inputLength < 2) {
    errorInput(e);
  } else {
    successInput(e);
  }

  validateForm();
});

function validateForm() {
  const isValidate =
    userName.value.trim().length >= 3 &&
    userAge.value > 10 &&
    sliceEmail().length > 2;

  refs.submitBtn.disabled = !isValidate;

  // if (
  //   userName.value.trim().length >= 3 &&
  //   userAge.value > 10 &&
  //   sliceEmail().length > 2
  // ) {
  //   refs.submitBtn.disabled = false;
  // } else {
  //   refs.submitBtn.disabled = true;
  // }
}

function sliceEmail() {
  const idx = userEmail.value.indexOf('@');
  return userEmail.value.trim().slice(0, idx);
}

function successInput(e) {
  e.currentTarget.classList.add('success');
  e.currentTarget.classList.remove('error');
}

function errorInput(e) {
  e.currentTarget.classList.add('error');
  e.currentTarget.classList.remove('success');
}

function resetSendForm(e) {
  refs.submitBtn.disabled = true;
  e.currentTarget.reset();

  userName.classList.remove('success');
  userAge.classList.remove('success');
  userEmail.classList.remove('success');
}

function onSendForm(e) {
  e.preventDefault();

  const userData = {
    userName: userName.value.trim(),
    userAge: userAge.value,
    userEmail: userEmail.value.trim(),
  };

  alert('Дякуємо за підписку');

  resetSendForm(e);
}

// function onBlur(e) {
//   const input = e.currentTarget;

//   if (input.value.trim().length < 4) {
//     input.classList.add('error');
//     input.classList.remove('success');
//   } else {
//     input.classList.add('success');
//     input.classList.remove('error');
//   }
// }

// function onFocus(e) {
//   const input = e.currentTarget;
//   if (input.value.trim().length < 4) {
//     input.classList.add('error');
//     input.classList.remove('success');
//     refs.btn.disabled = true;
//   } else {
//     input.classList.add('success');
//     input.classList.remove('error');
//     refs.btn.disabled = false;
//   }
// }
