const key = 'le4369GAUjAIRqQCuprYAnBV11LPRiev';

const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    // console.log(data[0]);
    return data[0];
};

const getWeather = async (cityKey) => {
    const base = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}`;
    const query = `?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};

// getCity('manchester')
//     .then(data => {
//         return getWeather(data.Key);
//     })
//     .then(data => {
//         return updateUI(data);
//     })
//     .catch(err => console.log(err));
