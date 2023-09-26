import { Location } from "./interface";

const images = {
    2: "11d.png",
    3: "09d.png",
    5: "10d.png",
    6: "13d.png",
    7:  "50d.png",
    800:  "01d.png",
    801:  "02d.png",
    802:  "03d.png",
    803:  "04d.png",
    804:  "04d.png"
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