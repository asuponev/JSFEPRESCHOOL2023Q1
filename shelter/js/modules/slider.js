import { getData } from '../services/getData.js';

const slider = async () => {
  const pets = await getData();

  const btnArrowLeft = document.querySelector('.slider__arrow_prev'),
    btnArrowRight = document.querySelector('.slider__arrow_next'),
    sliderWrapper = document.querySelector('.slider__wrapper');

  let width = document.body.clientWidth;
  let lastIndexes = [];

  window.addEventListener('resize', () => {
    width = document.body.clientWidth;
  });

  sliderWrapper.append(createPetCardSet(pets, 'left'));
  sliderWrapper.append(createPetCardSet(pets, 'active'));
  sliderWrapper.append(createPetCardSet(pets, 'right'));

  btnArrowRight.addEventListener('click', moveRight);
  btnArrowLeft.addEventListener('click', moveLeft);

  function moveRight() {
    sliderWrapper.children[1].classList.add('slider__items_left');
    sliderWrapper.children[1].classList.remove('slider__items_active');
    sliderWrapper.children[2].classList.add('slider__items_active');
    sliderWrapper.children[2].classList.remove('slider__items_right');
    sliderWrapper.children[0].remove();
    sliderWrapper.append(createPetCardSet(pets, 'right'));
  };

  function moveLeft() {
    sliderWrapper.children[1].classList.add('slider__items_right');
    sliderWrapper.children[1].classList.remove('slider__items_active');
    sliderWrapper.children[0].classList.add('slider__items_active');
    sliderWrapper.children[0].classList.remove('slider__items_left');
    sliderWrapper.children[2].remove();
    sliderWrapper.prepend(createPetCardSet(pets, 'left'));
  };

  function getAmountOfCards(width) {
    if (width >= 768 && width < 1280) {
      return 2
    } else if (width >= 320 && width < 768) {
      return 1
    } else {
      return 3;
    }
  };

  function createPetCardSet(pets, direction) {
    let items = [];
    const n = getAmountOfCards(width);
    lastIndexes = lastIndexes.slice(-n);
    while (items.length < getAmountOfCards(width)) {
      let randomIndex = Math.floor(Math.random() * pets.length);
      if (!lastIndexes.includes(randomIndex)) {
        items.push(createPetCard(pets[randomIndex]));
        lastIndexes.push(randomIndex);
      }
    };
    lastIndexes = lastIndexes.slice(-n);

    const sliderItems = document.createElement('div');
    sliderItems.classList.add('slider__items');
    if (direction === 'active') {
      sliderItems.classList.add('slider__items_active');
    } else if (direction === 'right') {
      sliderItems.classList.add('slider__items_right');
    } else if (direction === 'left') {
      sliderItems.classList.add('slider__items_left');
    }
    sliderItems.innerHTML = items.join('');

    return sliderItems;
  };
};

export function createPetCard(pet) {
  return `
    <div class="slider__item" data-id=${pet.id}>
      <img src=${pet.img} alt=${pet.type}-${pet.name}>
      <p class="slider__item-title">${pet.name}</p>
      <button class="slider__item-button">Learn more</button>
    </div>
  `
};

export default slider;