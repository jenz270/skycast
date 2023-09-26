import Title from '../components/Title'
import SearchBar from '../components/SearchBar'
import { SKYCAST } from '../utils/constants'
import { Location } from "../utils/interface"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

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
    <div className="flex flex-col h-screen items-center justify-center space-y-16">
        <Title text={SKYCAST} />
        <SearchBar onClick={handleSearchClick}/>
    </div>
  )
}

export default Home