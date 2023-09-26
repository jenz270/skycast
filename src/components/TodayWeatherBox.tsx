import { TODAY } from '../utils/constants'
import Subtitle from './Subtitle'
import { convertDateToDay, convertIdToIcon, formatLocationString, formatTempToString } from '../utils/helper'
import HeaderText from './HeaderText'
import { WeatherAPI } from '../utils/interface'

type Props = {
    city: string,
    region: string,
    countryCode: string,
    weatherData: WeatherAPI | undefined
}

const TodayWeatherBox = ({ city, region, countryCode, weatherData } : Props) => {
  const day = convertDateToDay(weatherData?.dt || "")
  const iconImageSrc = convertIdToIcon(weatherData?.weather[0].id)

  return (
    <div className= "flex flex-col w-full space-y-2">
        <div className="mb-2">             {/* TODAY TEXT */}
            <Subtitle text={TODAY} />
        </div>
        <div className="flex w-96 pb-10 bg-backgroundGreen border-1 border-black rounded-lg"> {/* Columns of Green Box*/}
            <div className="w-3/4 h-full pl-6 pt-6"> {/* First general column inside of box */}
                <div className="flex flex-col h-full pb-3"> {/* Left Column */}
                    <HeaderText text={formatLocationString(city, region, countryCode)} />
                    <p className="pt-2">Sunny</p>
                    <p className='italic pt-2'>Feels Like: {formatTempToString(weatherData?.main.feels_like)}</p>
                    <p className="pl-8 pt-16 text-6xl font-bold">{formatTempToString(weatherData?.main.temp)}</p>
                </div>
            </div>
            <div className="w-1/4 h-full">  {/* Second general column inside of box */}
                <div className="flex flex-col h-full pr-6 pt-6 pb-5"> {/* Left Column */}
                    <img className="pb-8" alt="weather-icon" src={iconImageSrc}/>
                    <p className="pt-2 text-lg pb-2">{day}</p>
                    <p className="pt-4 pb-1">H: {formatTempToString(weatherData?.main.temp_max)}</p>
                    <p>L: {formatTempToString(weatherData?.main.temp_min)}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TodayWeatherBox