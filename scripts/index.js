let profileEditButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.popup__opened');
let popupButtonClose = document.querySelector('.popup__button_close');

function openPopup() {
  popup.classList.add('popup__opened');
}
profileEditButton.addEventListener('click', openPopup);

function closePopup() {
  popup.classList.remove('popup__opened');
}
popupButtonClose.addEventListener('click', closePopup);

// Находим форму в DOM
let formElement = document.querySelector('.popup__container');// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__name')// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__description')// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let nameInput = document.querySelector('.popup__name').value;
    let jobInput = document.querySelector('.popup__description').value;
    // Выберите элементы, куда должны быть вставлены значения полей
    let profileName = document.querySelector('.profile__name');
    let profileJob = document.querySelector('.profile__description');
    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput;
    profileJob.textContent = jobInput;

    closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
console.log(formElement)
