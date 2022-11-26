import returnParsedData from './returnParsedData.js';

import {
  sortByAge,
  sortByName,
  searchByName,
  filterCards,
} from './sortFilterData.js';

import { showCards } from './showCards.js';
import { showGeneratedFilters } from './showGeneratedFilters.js';


(async () => {
  document.querySelector('.loader-container').classList.add('hidden');

  const domElements = {
    blockMain: document.querySelector('.main'),
    search: document.querySelector('#search'),
    filters: {
      gender: document.querySelector('#filter-gender'),
      country: document.querySelector('#filter-country'),
    },
    sort: {
      name: document.querySelector('#sort-by-name'),
      age: document.querySelector('#sort-by-age'),
    },
    resetFiltersBtn: document.querySelector('#reset-filters'),
  };

  const cardsData = await returnParsedData();

  // display country filters on the page
  showGeneratedFilters(domElements.filters.country, cardsData, 'country');

  // display cards on the page
  showCards(domElements.blockMain, cardsData);

  document
    .querySelector('.header')
    .addEventListener('click', filterSelectHandler);

  function filterSelectHandler(e) {
    if (e.target.id === 'search') {
      e.target.addEventListener('input', () => {
        filterHandler(cardsData);
      });
    }

    e.target.addEventListener('change', () => {
      filterHandler(cardsData);
    });
  }

  //Search people by FirstName|LastName
  function filterHandler(data) {
    //For Search
    const searchInputData = domElements.search.value;
    //For Filters
    const genderFilterValue = domElements.filters.gender.value;
    const countryFilterValue = domElements.filters.country.value;
    //For Sort
    const sortByNameValue = domElements.sort.name.value;
    const sortByAgeValue = domElements.sort.age.value;

    let filteredCardsData = searchByName(searchInputData, data);

    filteredCardsData = filterCards(
      'gender',
      genderFilterValue,
      filteredCardsData
    );

    filteredCardsData = filterCards(
      'country',
      countryFilterValue,
      filteredCardsData
    );

    filteredCardsData = sortByName(
      filteredCardsData,
      'firstName',
      sortByNameValue
    );

    filteredCardsData = sortByAge(filteredCardsData, 'age', sortByAgeValue);

    showCards(domElements.blockMain, filteredCardsData);
  }

  //Reset All Filters
  domElements.resetFiltersBtn.addEventListener('click', resetFiltersHandler);

  function resetFiltersHandler(e) {
    domElements.search.value = '';
    const filtersKey = domElements.filters;
    Object.keys(filtersKey).forEach(key => (filtersKey[key].selectedIndex = 0));
    const sortsKey = domElements.sort;
    Object.keys(sortsKey).forEach(key => (sortsKey[key].selectedIndex = 0));

    showCards(domElements.blockMain, cardsData);
  }
})();
