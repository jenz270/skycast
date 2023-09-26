import HeaderText from './HeaderText'
import { convertDateToDay, formatTempToString, convertIdToIcon } from '../utils/helper'

type Props = {
    day: string,
    highTemp: number,
    lowTemp: number,
    icon: number
}

const ForecastDayRow = ({ day, highTemp, lowTemp, icon }: Props) => {
  const iconImageSrc = `../src/assets/${convertIdToIcon(icon)}`

  return (
    <div className="flex flex-row">
        <HeaderText text={convertDateToDay(day)}/>
        <img className="w-[70px] px-5" alt="weather-icon" src={iconImageSrc}/>
        <p className="pr-5">H:{formatTempToString(highTemp)}</p>
        <p>L:{formatTempToString(lowTemp)}</p>
    </div>
  )
}

export default ForecastDayRow