import React, { useContext } from 'react';
import { cities } from 'data/cities';
import DropdownWithSearch from '../Dropdown';
import './SearchArea.css';
import { ContextType, DataContext } from 'context/dataContext';
import WeatherCard from '../WeatherCard';
export const SearchArea = () => {

  const { selectedCity, weather } = useContext(DataContext) as ContextType;

  return (
    <div className='searchArea-wrapper'>
        <div className='title-wrapper'>
            <h1>Weather Forecast</h1>
        </div>
        <div className="dropdown-container">
          <DropdownWithSearch data={cities}/>
        </div>
      {
        !!weather.description && !!weather.temperature && !!selectedCity && (
          <div className='weather-wrapper'>
            <WeatherCard weather={weather} selectedCity={selectedCity}/>
          </div>
        )
      }
    </div>
  );
};

