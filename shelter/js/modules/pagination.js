import { getData } from '../services/getData.js';
import { createPetCard } from './slider.js';

const pagination = async () => {
  const pets = await getData();

  const paginationWrapper = document.querySelector('.slider__items'),
    buttonsWrapper = document.querySelector('.slider__buttons'),
    currentPage = document.querySelector('.slider__arrow.slider__arrow_active'),
    rightButtons = document.querySelectorAll('.slider__arrow_right'),
    leftButtons = document.querySelectorAll('.slider__arrow_left');

  let width = document.body.clientWidth,
    numberPage = 0;

  window.addEventListener('resize', () => {
    width = document.body.clientWidth;
  });

  let pages = createShufflePages(getNumberOfCards());
  createPage();

  buttonsWrapper.addEventListener('click', (event) => onClickButtons(event));

  function getNumberOfCards() {
    if (width >= 1280) {
      return 8;
    } else if (width < 1280 && width >= 768) {
      return 6;
    } else {
      return 3;
    }
  };

  function getNumberOfPages() {
    if (width >= 1280) {
      return 6;
    } else if (width < 1280 && width >= 768) {
      return 8;
    } else {
      return 16;
    }
  };

  function createShufflePages(numberCards) {
    const pages = [];
    let allPagesNumbers = [];

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 8; j++) {
        allPagesNumbers.push([0, 1, 2, 3, 4, 5, 6, 7][j]);
      };
    };

    for (let i = 0; i < allPagesNumbers.length; i += numberCards) {
      pages.push(allPagesNumbers.slice(i, i + numberCards));
    }
    for (let i = 0; i < pages.length; i++) {
      pages[i] = pages[i].sort(() => Math.random() - 0.5);
    }
    return pages;
  };

  function createPage() {
    for (let i = 0; i < getNumberOfCards(); i++) {
      paginationWrapper.innerHTML += createPetCard(pets[pages[numberPage][i]]);
    }
  };

  function changeButtonStatus(selectorBtns, status) {
    selectorBtns.forEach(item => {
      status ?
        item.classList.add('slider__arrow_inactive')
        : item.classList.remove('slider__arrow_inactive');
      item.disabled = status;
    });
  };

  function onClickNext() {
    currentPage.innerHTML = numberPage + 1;
    paginationWrapper.innerHTML = '';
    createPage();
    if (currentPage.textContent > '1' && !(currentPage.textContent === String(getNumberOfPages()))) {
      changeButtonStatus(leftButtons, false);
    } else if (currentPage.textContent === String(getNumberOfPages())) {
      changeButtonStatus(rightButtons, true);
    }
  };

  function onClickPrev() {
    currentPage.innerHTML--;
    paginationWrapper.innerHTML = '';
    createPage();
    if (currentPage.textContent === '1') {
      changeButtonStatus(leftButtons, true);
      changeButtonStatus(rightButtons, false);
    } else if (currentPage.textContent !== String(getNumberOfPages()) && currentPage.textContent !== '1') {
      changeButtonStatus(leftButtons, false);
      changeButtonStatus(rightButtons, false);
    };
  };

  function onClickEnd() {
    currentPage.innerHTML = getNumberOfPages();
    paginationWrapper.innerHTML = '';
    createPage();
    changeButtonStatus(leftButtons, false);
    changeButtonStatus(rightButtons, true);
  };

  function onClickStart() {
    currentPage.innerHTML = 1;
    paginationWrapper.innerHTML = '';
    createPage();
    changeButtonStatus(leftButtons, true);
    changeButtonStatus(rightButtons, false);
  };

  function onClickButtons(event) {
    if (!event.target.classList.contains('slider__arrow_inactive') && event.target.textContent === '>') {
      numberPage++;
      onClickNext(numberPage);
    } else if (!event.target.classList.contains('slider__arrow_inactive') && event.target.textContent === '<') {
      numberPage--;
      onClickPrev(numberPage);
    } else if (!event.target.classList.contains('slider__arrow_inactive') && event.target.textContent === '>>') {
      numberPage = getNumberOfPages() - 1;
      onClickEnd(numberPage);
    } else if (!event.target.classList.contains('slider__arrow_inactive') && event.target.textContent === '<<') {
      numberPage = 0;
      onClickStart(numberPage);
    };
  };
}

export default pagination;