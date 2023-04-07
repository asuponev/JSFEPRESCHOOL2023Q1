export const createPetCard = (pet) => {

  const sliderItem = document.createElement('div');
  sliderItem.classList.add('slider__item');
  sliderItem.dataset.id = pet.id;

  const sliderItemImg = document.createElement('img');
  sliderItemImg.src = pet.img;
  sliderItemImg.alt = `${pet.type}-${pet.name}`;
  sliderItem.appendChild(sliderItemImg);

  const sliderItemTitle = document.createElement('p');
  sliderItemTitle.classList.add('slider__item-title');
  sliderItemTitle.innerHTML = pet.name;
  sliderItem.appendChild(sliderItemTitle);

  const sliderItemButton = document.createElement('button');
  sliderItemButton.classList.add('slider__item-button');
  sliderItemButton.innerHTML = 'Learn more';
  sliderItem.appendChild(sliderItemButton);

  return sliderItem;
};

export const createSliderItems = (position, pets) => {
  const fragment = document.createDocumentFragment();
  const sliderItems = document.createElement('div');
  sliderItems.classList.add('slider__items');

  for (let i = 0; i < 3; i++) {
    sliderItems.appendChild(createPetCard(pets.splice((Math.random() * pets.length), 1)[0]));
  };

  if (position === 'slider__items_active') {
    sliderItems.classList.add(position);
    fragment.appendChild(sliderItems);
  } else {
    const rightItems = sliderItems.cloneNode(true);
    const leftItems = sliderItems.cloneNode(true);
    rightItems.classList.add('slider__items_right');
    leftItems.classList.add('slider__items_left');
    fragment.appendChild(rightItems);
    fragment.appendChild(leftItems);
  };
  return fragment;
};