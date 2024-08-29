class Forecast {
    constructor() {
        this.key = 'x7iSpgJ0ltaBMaRpy4X9XPhXEGCMJGAA';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city) {
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);
        return {cityDetails,weather};
    }
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return data[0];
    }

    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
}


// const getCity = async (city) => {
//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`;
//     const response = await fetch(base + query);
//     const data = await response.json();
//     // console.log(data[0]);
//     return data[0];
// };

// const getWeather = async (cityKey) => {
//     const base = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}`;
//     const query = `?apikey=${key}`;
//     const response = await fetch(base + query);
//     const data = await response.json();
//     return data[0];
// };

// getCity('manchester')
//     .then(data => {
//         return getWeather(data.Key);
//     })
//     .then(data => {
//         return updateUI(data);
//     })
//     .catch(err => console.log(err));
