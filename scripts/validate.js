const config = {
  formSelector: '.popup__form', // выбор формы
  inputSelector: '.popup__input', //выбор инпута
  submitButtonSelector: '.popup__button_input_save',
  inactiveButtonClass: 'popup_button_input_save_disabled',
  inputErrorClass: 'popup__input-error', //ошибка для инпута
  errorClass: 'popup__input-span-error-active', //ошибка спан
};

// const formProfile = document.querySelector('.popup__form_profile');
// const formPlace = document.querySelector('.popup__form_place');

// formProfile.addEventListener('input', hadlerInputForm);
// formPlace.addEventListener('input', hadlerInputForm);

// поиск действия в инпутах
function hadlerInputForm(evt) {
  const form = evt.currentTarget;
  const input = evt.target;
  toggleButton(form, config);
  checkInput(input, form, config);
}

//проверка валидности в инпутах
function checkInput(input, form, config) {
  if (input.checkValidity()) {
    hideInputError(input, form, config);
  } else {
    showInputError(input, form, config);
  };
  toggleButton(form, config);
}

//Переключает состояние кнопки
function toggleButton(form, config) {
  const submitButton = form.querySelector(config.submitButtonSelector);
  if(form.checkValidity()) {
    submitButton.removeAttribute('disabled');
    submitButton.classList.remove(config.inactiveButtonClass);
    submitButton.classList.add(config.submitButtonSelector);
  } else {
    submitButton.setAttribute('disabled', true);
    submitButton.classList.remove(config.submitButtonSelector);
    submitButton.classList.add(config.inactiveButtonClass);
  }
}

// показывает ошибку
function showInputError (input, form, config) {
 const errorElement = form.querySelector(`#${input.id}-error`)
  input.classList.add(config.inputErrorClass);
  // Показываем сообщение об ошибке
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add(config.errorClass);
};

//скрывает ошибку
function hideInputError (input, form) {
  const errorElement = form.querySelector(`#${input.id}-error`)
  input.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(config.inputErrorClass);
};

const setEventListeners = (form, config) => {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      checkInput(input, form, config);
    });
  });
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(form, config);
    toggleButton(form, config);
  });
};

// Вызовем функцию
enableValidation(config);

