import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SKYCAST } from "../utils/constants";
import Title from "../components/Title";
import SearchBar from "../components/SearchBar";
import ForecastBox from "../components/ForecastBox";
import TodayWeatherBox from "../components/TodayWeatherBox";
import { WeatherAPI, Location } from "../utils/interface";
import { useNavigate } from 'react-router-dom';
import {
  WEATHER_API_KEY,
  WEATHER_API_URL,
  WEATHER_FORECAST_API_URL,
} from "../utils/api";
import axios from "axios";

const WeatherDetails = () => {
  const [currentWeather, setCurrentWeather] = useState<WeatherAPI>();
  const [forecastWeather, setForecastWeather] = useState<WeatherAPI[]>([]);
  const { locationString } = useParams();

  const navigate = useNavigate();

  // Check if locationString exists before decoding
  if (!locationString) {
    return <div>Loading...</div>;
  }

  const decodedLocationString = decodeURIComponent(locationString);
  const decodedLocation = JSON.parse(decodedLocationString);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentWeatherResponse = await axios.get(
          `${WEATHER_API_URL}lat=${decodedLocation.latitude}&lon=${decodedLocation.longitude}&exclude=hourly,daily,alerts&appid=${WEATHER_API_KEY}&units=metric`
        );
        const currentWeatherData = currentWeatherResponse.data;
        // console.log("This is the currentWeatherData: ", currentWeatherData);

        const forecastWeatherResponse = await axios.get(
          `${WEATHER_FORECAST_API_URL}lat=${decodedLocation.latitude}&lon=${decodedLocation.longitude}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const forecastWeatherData = forecastWeatherResponse.data.list;
        console.log("This is the forecastWeatherData: ", forecastWeatherData);

        setCurrentWeather(currentWeatherData);
        setForecastWeather(forecastWeatherData);
      } catch (error) {
        console.error("Error Fetching Data: ", error);
      }
    };

    fetchData();
  }, [decodedLocation.latitude, decodedLocation.longitude]);

  const handleNavigateToWeatherDetails = (location: Location) => {
    const encodedLocation = encodeURIComponent(JSON.stringify({ city: location.city, countryCode: location.countryCode, region: location.region, latitude: location.latitude, longitude: location.longitude }));
    navigate(`/weather-details/${encodedLocation}`)
  }

  const handleSearchClick = (location: Location) => {
    console.log("Search is clicked! And this is the data: ", location)
    handleNavigateToWeatherDetails(location)
    // use this longitude and latitude info and navigate to the next page (weatherDetails)
  }

  return (
    <div className="flex flex-col h-screen">

      {/* Top Bar with Title on left and SearchBar on right */}
      <div className="flex md:flex-row flex-col justify-between items-center pr-10 pl-10 pt-10">
        <div
          className="md:mb-0 mb-10"
          onClick={() => navigate('/')}
        >  {/* Add margin-bottom for small screens */}
          <Title text={SKYCAST} />
        </div>
        <SearchBar onClick={handleSearchClick} />
      </div>

      {/* Main Content with TodayWeatherBox and ForecastBox side by side */}
      <div className="flex md:flex-row flex-col items-center justify-center">
        <div className="pw-20 py-10">
          <TodayWeatherBox
            city={decodedLocation.city}
            region={decodedLocation.region}
            countryCode={decodedLocation.countryCode}
            weatherData={currentWeather}
          />
        </div>
        <div className="px-20 py-10">
           <ForecastBox forecastWeather={forecastWeather} />
        </div>
      </div>
    </div>
  )
}

export default WeatherDetails;
