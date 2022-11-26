function generateFilters(data) {
  const filtersObg = {
    country: '',
  };

  const locations = [];
  data.forEach(item => locations.push(item.country));

  filtersObg.country = [...new Set(locations)];

  return filtersObg;
}

function showGeneratedFilters(place, dataForFilters, filterName) {
  const generatedFilters = generateFilters(dataForFilters);

  generatedFilters[filterName].forEach(filtersItem => {
    place.insertAdjacentHTML(
      'beforeend',
      `
			<option value="${filtersItem}">${filtersItem}</option>
			`
    );
  });
}

export { showGeneratedFilters };
