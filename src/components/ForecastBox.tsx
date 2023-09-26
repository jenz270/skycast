import { FORECAST } from '../utils/constants'
import Subtitle from './Subtitle'
import ForecastDayRow from './ForecastDayRow'
import Separator from './Separator'
import { WeatherAPI } from '../utils/interface'

type Props = {
  forecastWeather: WeatherAPI[]
}

const ForecastBox = ({ forecastWeather }: Props) => {
  return (
    <div className='flex flex-col'>
      <div className="mb-3">
        {/* 5 DAY FORECAST TEXT */}
        <Subtitle text={FORECAST} />
      </div>
      <div className="flex flex-col w-96 mb-4 px-10 py-5 bg-backgroundGreen border-1 border-black rounded-lg">
        {forecastWeather && forecastWeather.filter(item => item.dt_txt.includes("00:00:00")).map(item => (
          <>
            <ForecastDayRow
              key={`${item.dt_txt}_${item.id}`}
              day={item.dt_txt}
              highTemp={item.main.temp_max}
              lowTemp={item.main.temp_min}
              icon={item.weather[0].id}
            />
            <Separator />
          </>
        ))}
      </div>
    </div>
  )
}

export default ForecastBox