const validationConfig = {
  formSelector: '.popup__form', // выбор формы
  inputSelector: '.popup__input', //выбор инпута
  submitButtonSelector: '.popup__button_input_save',
  inactiveButtonClass: 'popup_button_input_save_disabled',
  inputErrorClass: 'popup__input-error', //ошибка для инпута
  errorClass: 'popup__input-span-error-active', //ошибка спан
};

//проверка валидности в инпутах
function checkInput(input, form, validationConfig) {
  if (input.checkValidity()) {
    hideInputError(input, form, validationConfig);
  } else {
    showInputError(input, form, validationConfig);
  };
}

//Переключает состояние кнопки
function toggleButton(form, validationConfig) {
  const submitButton = form.querySelector(validationConfig.submitButtonSelector);
  if(form.checkValidity()) {
    submitButton.removeAttribute('disabled');
    submitButton.classList.remove(validationConfig.inactiveButtonClass);
    submitButton.classList.add(validationConfig.submitButtonSelector);
  } else {
    submitButton.setAttribute('disabled', true);
    submitButton.classList.remove(validationConfig.submitButtonSelector);
    submitButton.classList.add(validationConfig.inactiveButtonClass);
  }
}

// показывает ошибку
function showInputError (input, form, validationConfig) {
 const errorElement = form.querySelector(`#${input.id}-error`)
  input.classList.add(validationConfig.inputErrorClass);
  // Показываем сообщение об ошибке
  errorElement.textContent = input.validationMessage;
};

//скрывает ошибку
function hideInputError (input, form, validationConfig) {
  const errorElement = form.querySelector(`#${input.id}-error`)
  input.classList.remove(validationConfig.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(validationConfig.inputErrorClass);
};

const setEventListeners = (form, validationConfig) => {
  const inputList = Array.from(form.querySelectorAll(validationConfig.inputSelector));
  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      checkInput(input, form, validationConfig);
      toggleButton(form, validationConfig);
    });
  });
};

const enableValidation = (validationConfig) => {
  const formList = Array.from(document.querySelectorAll(validationConfig.formSelector));
  formList.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(form, validationConfig);
    toggleButton(form, validationConfig);
  });
};

// Вызовем функцию
enableValidation(validationConfig);

