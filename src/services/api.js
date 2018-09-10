const requestCity = zipCode => 
fetch(`https://api.zippopotam.us/us/${zipCode}`)
.then(res => res.json())
.then(res => res.places[0]);

export default requestCity;
