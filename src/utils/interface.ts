export interface Location {
    city: string;
    country: string;
    countryCode: string;
    id: number;
    latitude: number;
    longitude: number;
    name: string;
    population: number;
    region: string;
    regionCode: string;
    type: string;
    wikiDataId: string;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

export interface WeatherAPI {
    weather: Weather[];
    main: Main;
    id: number;
    name: string;
    dt: string;
    dt_txt: string
}
