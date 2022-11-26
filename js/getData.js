const getData = async () => {
  const url = `https://randomuser.me/api`;
  const peopleQuantity = 500;
  const peopleAttributes = [
    'name',
    'gender',
    'dob',
    'phone',
    'email',
    'picture',
    'login',
    'id',
    'location',
  ];

  try {
    const requestToApi = await fetch(
      `${url}/?results=${peopleQuantity}&inc=${peopleAttributes.join()}`
    );
    const responseFromApi = await requestToApi.json();

    return responseFromApi;
  } catch (error) {
    console.warn(error);
    document.querySelector('body').innerHTML = `
		<div class="loading-error-container">
		<section class="loading-error">
			<p class="loading-error__smile">:-(</p>
			<p class="loading-error__text">Something went wrong!</p>
			<p class="loading-error__additional-text">We can\`t load the people list right now. Please try again later.</p>
			<p class="loading-error__refresh-link">Refresh the page</p>
		</section>
	</div>
		`;
  }
};

export default getData;
