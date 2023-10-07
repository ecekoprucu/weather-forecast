import { cities } from "data/cities";

export const findCountryCodeFromCity = (city: string) => {
    const foundCity = cities.find(item => item.city_name.includes(city));
    if (foundCity) {
        return foundCity.country_code;
    }
}

export const findIfCityExists = (city: string) => {
    return cities.find(item => item.city_name.includes(city));
}

export const doesCityHaveCode = (city: string) => {
    return city.includes("{");
}

export const getCountryCodeFromCity = (city: string) => { 
   return city.split('{')[1].split('}')[0];
}

export const separateCityName = (city: string) => {
    return city.split('{')[0].slice(0, -1);
}