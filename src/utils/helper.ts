import { Location } from "./interface";
import Asset11d from "/assets/11d.png"
import Asset9d from "/assets/09d.png"
import Asset10d from "/assets/10d.png"
import Asset13d from "/assets/13d.png"
import Asset50d from "/assets/50d.png"
import Asset01d from "/assets/01d.png"
import Asset02d from "/assets/02d.png"
import Asset03d from "/assets/03d.png"
import Asset04d from "/assets/04d.png"

const images = {
    2: Asset11d,
    3: Asset9d,
    5: Asset10d,
    6: Asset13d,
    7:  Asset50d,
    800:  Asset01d,
    801:  Asset02d,
    802:  Asset03d,
    803:  Asset04d,
    804:  Asset04d
}

const imageMap = new Map<number, string>(Object.entries(images).map(([key, value]) => [Number(key), value]));

export const formatLocation = (location: Location): string => {
    return `${location.city}, ${location.region}, ${location.country}`;
}

export const formatLocationString = (city: string, region: string, countryCode: string): string => {
    return `${city}, ${region}, ${countryCode}`;
}

export const formatTempToString = (temp: number | undefined): string => {
    if (temp == undefined) { return "" }
    return `${Math.ceil(temp)}°C`;
}

export const convertDateToDay = (dateString: string): string => {
    const date = new Date(dateString);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[date.getDay()];
    return dayOfWeek
}

export const convertIdToIcon = (id: number | undefined): string | undefined => {
    if (id === undefined) { return "02d" }
    const short = Math.floor(id / 100)
    if (short === 8) {
        return imageMap.get(id)
    }

    return imageMap.get(short)
}