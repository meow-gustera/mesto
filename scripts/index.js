let profileEditButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let popupButtonClose = document.querySelector('.popup__button_input_close');
// Находим форму в DOM
let formElement = document.querySelector('.popup__input');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_data_name')// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__input_data_description')// Воспользуйтесь инструментом .querySelector()
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__description');


function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»


profileEditButton.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

