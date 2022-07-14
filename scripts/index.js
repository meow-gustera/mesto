const profileEditButton = document.querySelector('.profile__edit');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupEditButtonClose = document.querySelector('div.popup_edit-profile .popup__button_input_close');

const placeAddButton = document.querySelector('.profile__add-button');
const popupAddPlace  = document.querySelector('.popup_add-place');
const popupAddButtonClose = document.querySelector('div.popup_add-place .popup__button_input_close');

// Находим форму в DOM
const formElement = document.querySelector('.popup__input');
// Находим поля формы в DOM
const nameInput = document.querySelector('.popup__input_data_name');
const jobInput = document.querySelector('.popup__input_data_description');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');

//Задается лист для элементов и область для тепмлейтов
const elementList = document.querySelector('.element');
const elementTemplate = document.querySelector('.element_template').content;

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


initialCards.forEach (function(element) {
  const newElement = elementTemplate.cloneNode(true);

  newElement.querySelector('.element__title').textContent = element.name;
  newElement.querySelector('.element__photo').alt = element.name;
  newElement.querySelector('.element__photo').src = element.link;
  elementList.append(newElement);
});


function openPopupEditProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupEditProfile.classList.add('popup_opened');
}

function closePopupEditProfile() {
  popupEditProfile.classList.remove('popup_opened');
}

function openPopupPlaceAdd() {
  popupAddPlace.classList.add('popup_opened');
}

function closePopupPlaceAdd() {
  popupAddPlace.classList.remove('popup_opened');
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

    closePopupEditProfile();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»


profileEditButton.addEventListener('click', openPopupEditProfile);
popupEditButtonClose.addEventListener('click', closePopupEditProfile);

placeAddButton.addEventListener('click', openPopupPlaceAdd);
popupAddButtonClose.addEventListener('click', closePopupPlaceAdd);

formElement.addEventListener('submit', formSubmitHandler);

