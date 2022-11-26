
import getData from './getData.js';

function parseData(data) {
  const people = data.map(person => {
    return {
      loginId: person.login.salt,
      firstName: person.name.first,
      lastName: person.name.last,
      gender: person.gender,
      age: person.dob.age,
      phone: person.phone,
      email: person.email,
      photo: person.picture.large,
      nickName: person.login.username,
      country: person.location.country,
      state: person.location.state,
      city: person.location.city,
    };
  });

  return people;
}

async function returnParsedData() {
  const initialData = await getData();
  return parseData(initialData.results);
}

export default returnParsedData;
