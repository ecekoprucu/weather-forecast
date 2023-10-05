import { cities } from "data/cities"

export const findCountryCodeFromCity = (city: string) => {
    const foundCity = cities.find(item => item.city_name.includes(city));
    if (foundCity) {
        return foundCity.country_code;
    }
}

export const findIfCityExists = (city: string) => {
    return cities.find(item => item.city_name.includes(city));
}