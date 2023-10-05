import React, {useCallback, useState} from 'react';
import { DataType } from 'types/dataType';

export type WeatherType = {
    description: string | null;
    temperature: number | null;
    icon: string | null;
    date: string | Date;
}

export type ContextType = {
    data: DataType[];
    setData: (newData: DataType[]) => void;
    selectedCity: string;
    setSelectedCity: (city: string) => void;
    weather: WeatherType;
    setWeather: (weather: WeatherType) => void;
}

type Props = {
    children: React.ReactNode;
}

export const DataContext = React.createContext<ContextType | null>(null);


const currentDate = new Date();

export const DataProvider = ({children}: Props) => {
    const [data, setData] = useState<DataType[]>([]);
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [weather, setWeather] = useState<WeatherType>({description: null, temperature: null, icon: null, date: currentDate});

    const setdataCallback = useCallback((newData: DataType[]) => {
        setData(newData);
    }, []);

    const setSelectedCityCallback = useCallback((city: string) => {
        setSelectedCity(city);
    }, []);

    const setWeatherCallback = useCallback((weather: WeatherType) => {
        setWeather(weather);
    }, []);

    return (
        <DataContext.Provider value={{data, setData: setdataCallback, selectedCity, setSelectedCity: setSelectedCityCallback, weather, setWeather: setWeatherCallback}}>
            {children}
        </DataContext.Provider>
    );
};