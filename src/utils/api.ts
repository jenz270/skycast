export const geoApiOptions = {
    method: "GET",
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    params: {
        minPopulation: '100000',
        namePrefix: ''
    },
    headers: {
      "X-RapidAPI-Key": '0a4f43cbf0msh10711d208782ad4p1f14d1jsne1e6f555c301', // enter your rapid api key here
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  export const WEATHER_FORECAST_API_URL = "https://api.openweathermap.org/data/2.5/forecast?";
  export const WEATHER_API_KEY = "5787b0e4862cf15254c42377ca3fcfa1";    // enter your weather api key here