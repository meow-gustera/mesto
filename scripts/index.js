const profileEditButton = document.querySelector('.profile__edit');
const popupEditProfile = document.querySelector('.popup_edit_profile');

const placeAddButton = document.querySelector('.profile__add-button');
const popupAddPlace  = document.querySelector('.popup_add_place');
const formElementEdit = document.querySelector('div.popup_edit_profile .popup__input');
const formElementAddPlace = document.querySelector('div.popup_add_place .popup__input');
const popupZoomPhoto = document.querySelector('.popup_zoom_image');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_data_name');

const jobInput = document.querySelector('.popup__input_data_description');
const placeInput = document.querySelector('.popup__input_data_place');
const linkInput = document.querySelector('.popup__input_data_link');

const elementList = document.querySelector('.element');
const elementTemplate = document.querySelector('.element_template').content;

const popupPhoto = document.querySelector('.popup__photo');
const popupImageText = document.querySelector('.popup__description');
const closeButtons = document.querySelectorAll('.popup__button_input_close');
const popupOverlay = document.querySelectorAll('.popup__overlay');

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

function createElement(element) {
  const newElement = elementTemplate.cloneNode(true);
  newElement.querySelector('.element__title').textContent = element.place;
  newElement.querySelector('.element__photo').alt = element.place;
  newElement.querySelector('.element__photo').src = element.link;
  const likeButton = newElement.querySelector('.element__like');
  const deleteButton = newElement.querySelector('.element__delete');
  const photoPlace = newElement.querySelector('.element__photo');
  likeButton.addEventListener('click', function() {
    likeButton.classList.toggle('element__like_active');
  });

  deleteButton.addEventListener('click', function() {
    const item = deleteButton.closest('.element__item');
    item.remove();
  });

    photoPlace.addEventListener('click', function() {
    popupPhoto.src = photoPlace.closest('.element__photo').src;
    popupImageText.textContent = photoPlace.closest('.element__photo').alt;
    popupPhoto.alt = photoPlace.closest('.element__photo').alt;
    openPopup(popupZoomPhoto);
  });

  return newElement;
}

function render() {
  initialCards.forEach(newElement => {
    const card = createElement(newElement);
    elementList.append(card);
  });
}
render();

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEditProfile)
}

function handleSubmitAddPlace (evt) {
  evt.preventDefault();
  const NewCard = {
    place: placeInput.value,
    link: linkInput.value
  }
  const card = createElement(NewCard);
  elementList.prepend(card);

  closePopup(popupAddPlace);
}

profileEditButton.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEditProfile);
});

placeAddButton.addEventListener('click', function() {
  placeInput.value = '';
  linkInput.value = '';
  openPopup(popupAddPlace);
});

closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});

popupOverlay.forEach((overlay) => {
  const popup = overlay.closest('.popup');
  overlay.addEventListener('click', () => closePopup(popup));
});

popupEditProfile.addEventListener('click', function() {
   closePopup(popupAddPlace);
});

formElementEdit.addEventListener('submit', handleProfileFormSubmit);
formElementAddPlace.addEventListener('submit', handleSubmitAddPlace);
document.addEventListener('keydown', function(evt) {
  if (evt.key  === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
});
