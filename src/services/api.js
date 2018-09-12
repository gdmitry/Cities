const requestCity = zipCode => fetch(`https://api.zippopotam.us/us/${zipCode}`)
  .then(res => res.json())
  .then((res) => {
    if (!res.places) {
      throw new Error('City not found!');
    }
    return res.places[0];
  })
  .then((data) => {
    const name = data['place name'];
    const state = data['state abbreviation'];
    return { state, name };
  });

export default requestCity;
