import { getData } from '../services/getData.js';

const popup = async () => {
  const pets = await getData();

  const popup = document.querySelector('.popup'),
    shadow = document.querySelector('.shadow.for-popup'),
    popupWindow = document.querySelector('.popup__window'),
    closeBtn = document.querySelector('.popup__close_btn'),
    sliderField = document.querySelector('.slider__wrapper') || document.querySelector('.slider__items'),
    body = document.querySelector('body');

  const createPopup = (pet) => {
    return `
      <img class="popup__img" src="${pet.img}" alt="pet-${pet.name}"></img>
      <div class="popup__content">
        <div class="popup__content_info">
          <h3 class="popup__content_name">${pet.name}</h3>
          <h4 class="popup__content_type">${pet.type} - ${pet.breed}</h4>
        </div>
        <p class="popup__content_description">${pet.description}</p>
        <ul class="popup__content_list">
          <li><b>Age:</b> ${pet.age}</li>
          <li><b>Inoculations:</b> ${pet.inoculations.join(', ')}</li>
          <li><b>Diseases:</b> ${pet.diseases.join(', ')}</li>
          <li><b>Parasites:</b> ${pet.parasites.join(', ')}</li>
        </ul>
      </div>
    `
  };

  const openPopup = (event) => {
    if (event.target.closest('.slider__item')) {
      shadow.style.top = window.pageYOffset + 'px';
      const petID = event.target.closest('.slider__item').dataset.id;
      const pet = pets[petID];
      popupWindow.innerHTML = createPopup(pet);
      popup.classList.add('open');
      shadow.classList.add('enabled');
      body.classList.add('hidden');
    };
  };

  const closePopup = () => {
    popup.classList.remove('open');
    shadow.classList.remove('enabled');
    body.removeAttribute('class');
  };

  sliderField.addEventListener('click', openPopup);
  shadow.addEventListener('click', closePopup);
  closeBtn.addEventListener('click', closePopup);
};

export default popup;