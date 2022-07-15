const profileEditButton = document.querySelector('.profile__edit');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupEditButtonClose = document.querySelector('div.popup_edit-profile .popup__button_input_close');

const placeAddButton = document.querySelector('.profile__add-button');
const popupAddPlace  = document.querySelector('.popup_add-place');
const popupAddButtonClose = document.querySelector('div.popup_add-place .popup__button_input_close');

// Находим форму в DOM
const formElementEdit = document.querySelector('div.popup_edit-profile .popup__input');
const formElementAddPlace = document.querySelector('div.popup_add-place .popup__input');

// Находим поля формы в DOM
const nameInput = document.querySelector('.popup__input_data_name');
const jobInput = document.querySelector('.popup__input_data_description');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');

const placeInput = document.querySelector('.popup__input_data_place');
const liknInput = document.querySelector('.popup__input_data_link');

//Задается лист для элементов и область для тепмлейтов
const elementList = document.querySelector('.element');
const elementTemplate = document.querySelector('.element_template').content;

const initialCards = [
  {
    place: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    place: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    place: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    place: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    place: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    place: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


initialCards.forEach (function(element) {
  const newElement = elementTemplate.cloneNode(true);
  newElement.querySelector('.element__title').textContent = element.place;
  newElement.querySelector('.element__photo').alt = element.place;
  newElement.querySelector('.element__photo').src = element.link;
  elementList.append(newElement);
});

const renderItems = function(placeInput,liknInput ) {
  elementList.insertAdjacentElement('afterbegin', (element.place, element.link));
}

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

function formSubmitHandlerEdit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopupEditProfile()
}

function formSubmitHandlerAddPlace (evt) {
  evt.preventDefault();
  const newElement = elementTemplate.cloneNode(true);
  newElement.querySelector('.element__title').textContent = placeInput.value;
  newElement.querySelector('.element__photo').alt = placeInput.value;
  newElement.querySelector('.element__photo').src = liknInput.value;
  elementList.prepend(newElement);

  closePopupPlaceAdd();
}

profileEditButton.addEventListener('click', openPopupEditProfile);
popupEditButtonClose.addEventListener('click', closePopupEditProfile);

placeAddButton.addEventListener('click', openPopupPlaceAdd);
popupAddButtonClose.addEventListener('click', closePopupPlaceAdd);

formElementEdit.addEventListener('submit', formSubmitHandlerEdit);
formElementAddPlace.addEventListener('submit', formSubmitHandlerAddPlace);


