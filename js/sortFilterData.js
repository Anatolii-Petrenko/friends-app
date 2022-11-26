// Sort by age
function sortByAge(arr, sortCriteria, sortType) {
  let sortedArr = arr;
  if (sortType === 'min-max') {
    sortedArr = [...arr].sort((a, b) => a[sortCriteria] - b[sortCriteria]);
  }

  if (sortType === 'max-min') {
    sortedArr = [...arr].sort((a, b) => b[sortCriteria] - a[sortCriteria]);
  }

  return sortedArr;
}

// Sort by name
function sortByName(arr, sortCriteria, sortType) {
  let sortedArr = arr;

  if (sortType === 'a-z') {
    sortedArr = [...arr].sort((a, b) => {
      return a[sortCriteria] === b[sortCriteria]
        ? 0
        : a[sortCriteria] > b[sortCriteria]
        ? 1
        : -1;
    });
  }

  if (sortType === 'z-a') {
    sortedArr = [...arr].sort((a, b) => {
      return a[sortCriteria] === b[sortCriteria]
        ? 0
        : a[sortCriteria] < b[sortCriteria]
        ? 1
        : -1;
    });
  }

  return sortedArr;
}

//Search data
function searchByName(input, cardsData) {
  const regx = new RegExp(`^${input}`, 'i');
  const filteredCardsData = cardsData.filter(
    card =>
      regx.test(card.firstName.toLowerCase()) ||
      regx.test(card.lastName.toLowerCase())
  );

  return filteredCardsData;
}

//Filter data
function filterCards(filtersGroupName, filtersType, cards) {
  const regx = new RegExp(`^${filtersType}`, 'i');
  const filteredCards = cards.filter(card =>
    regx.test(card[filtersGroupName].toLowerCase())
  );

  return filteredCards;
}

export { sortByAge, sortByName, searchByName, filterCards };
