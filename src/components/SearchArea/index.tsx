import React from 'react';
import { cities } from 'data/cities';
import DropdownWithSearch from '../Dropdown';
import './SearchArea.css';
export const SearchArea = () => {


  return (
    <div className='searchArea-wrapper'>
        <div className='title-wrapper'>
            <p>Weather Forecast</p>
        </div>
        <div className="dropdown-container">
          <DropdownWithSearch data={cities}/>
        </div>
    </div>
  );
};

