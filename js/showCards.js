function generateCards(data) {
  const cards = [];

  data.forEach(item => {
    let firstName = item.firstName;
    let loginId = item.loginId;
    let lastName = item.lastName;
    let age = item.age;
    let phone = item.phone;
    let email = item.email;
    let photo = item.photo;
    let gender = item.gender;
    let nickName = item.nickName;
    let country = item.country;
    let state = item.state;
    let city = item.city;

    let cardColor = '';
    if (item.gender === 'male') {
      cardColor = 'card_blue';
    }
    if (item.gender === 'female') {
      cardColor = 'card_coral';
    }

    cards.push(
      `
			<div id="${loginId}" class="card ${cardColor}" data-gender="${gender}">
				<div class="card__header">
					<p class="card__header-text">${nickName}</p>
					<div class="card__circle">
					<p class="card__text">${age}</p>
					</div>
				</div>
					<div class="card__img-wrapper">
						<div class="card__img-container">
							<img src="${photo}" alt="User photo">
						</div>
					</div>
					<div class="card__main-info">
						<h2 class="card__title">${firstName} ${lastName}</h2>
					</div>
					<div class="card__body">
						<div class="card__phone">
							<svg class="card__icon">
								<use xlink:href="#telephone"></use>
							</svg>
							<p class="card__text">${phone}</p>
						</div>
						<div class="card__location">
							<svg class="card__icon">
								<use xlink:href="#location"></use>
							</svg>
							<p class="card__text">${country}, ${state}, ${city}</p>
						</div>
					</div>
		</div>
			`
    );
  });

  return cards;
}

function showCards(place, data) {
  place.innerHTML = generateCards(data).join('');
}

export { showCards };
