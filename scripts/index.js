const profileEditButton = document.querySelector('.profile__edit');
const popupEditProfile = document.querySelector('.popup_edit_profile');

const placeAddButton = document.querySelector('.profile__add-button');
const popupAddPlace  = document.querySelector('.popup_add_place');
const formElementEdit = document.querySelector('div.popup_edit_profile .popup__form');
const formElementAddPlace = document.querySelector('div.popup_add_place .popup__form');
const popupZoomPhoto = document.querySelector('.popup_zoom_image');
const submitButton = document.querySelector('div.popup_add_place .popup__button_input_save')

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_data_name');

const jobInput = document.querySelector('.popup__input_data_description');
const placeInput = document.querySelector('.popup__input_data_place');
const linkInput = document.querySelector('.popup__input_data_link');

const cardList = document.querySelector('.element');
const cardTemplate = document.querySelector('.element__template').content;

const popupPhoto = document.querySelector('.popup__photo');
const popupImageText = document.querySelector('.popup__description');
const closeButtons = document.querySelectorAll('.popup__button_input_close');
const popupOverlays = document.querySelectorAll('.popup__overlay');


function createCard(card) {
  const newCard = cardTemplate.cloneNode(true);
  newCard.querySelector('.element__title').textContent = card.place;
  newCard.querySelector('.element__photo').alt = card.place;
  newCard.querySelector('.element__photo').src = card.link;
  const likeButton = newCard.querySelector('.element__like');
  const deleteButton = newCard.querySelector('.element__delete');
  const photoPlace = newCard.querySelector('.element__photo');
  likeButton.addEventListener('click', function() {
    likeButton.classList.toggle('element__like_active');
  });

  deleteButton.addEventListener('click', function() {
    deleteButton.closest('.element__item').remove();
  });

photoPlace.addEventListener('click', function() {
    popupPhoto.src = photoPlace.closest('.element__photo').src;
    popupImageText.textContent = photoPlace.closest('.element__photo').alt;
    popupPhoto.alt = photoPlace.closest('.element__photo').alt;
    openPopup(popupZoomPhoto);
  });

  return newCard;
}

function renderInitialCards() {
  initialCards.forEach(newCard => {
    const card = createCard(newCard);
    cardList.append(card);
  });
}
renderInitialCards();

function handleEsc (evt) {
  if (evt.key  === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEsc);
}

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEditProfile);
}

function handleSubmitAddPlace (evt) {
  evt.preventDefault();
  const newCard = {
    place: placeInput.value,
    link: linkInput.value
  }
  const card = createCard(newCard);
  cardList.prepend(card);

  closePopup(popupAddPlace);
  submitButton.setAttribute('disabled', true);
  submitButton.classList.add('popup_button_input_save_disabled');
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
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

popupOverlays.forEach((overlay) => {
  const popup = overlay.closest('.popup');
  overlay.addEventListener('click', () => closePopup(popup));
});

popupEditProfile.addEventListener('click', function() {
   closePopup(popupAddPlace);
});

formElementEdit.addEventListener('submit', handleProfileFormSubmit);
formElementAddPlace.addEventListener('submit', handleSubmitAddPlace);
