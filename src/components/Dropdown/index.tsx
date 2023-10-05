import React, { FormEvent, useState, useContext, useRef } from 'react';

import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { findCountryCodeFromCity, findIfCityExists } from 'utils/helpers';
import { ContextType, DataContext } from 'context/dataContext';

import { apiUrl } from 'data/apiData';

type DataItem = {
  country_code: string;
  city_name: string[];
};

interface DropdownWithSearchProps {
  data: DataItem[];
}

const DropdownWithSearch: React.FC<DropdownWithSearchProps> = ({ data }: DropdownWithSearchProps) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState<string[]>([]);
    const [isSending, setIsSending] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const { setData, setSelectedCity, setWeather } = useContext(DataContext) as ContextType

    const searchValue = (value: string) => {
        setSearchTerm(value);
        if (value.length > 2) {
          const filteredData = data
            .map((item) => item.city_name)
            .flat()
            .filter((city) =>
              city.toLowerCase().includes(value.toLowerCase())
            );
          setFilteredData(filteredData);
        } else {
          setFilteredData([]);
        }
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        searchValue(value);
    };

    const handleClose = () => {
        setSearchTerm('');
        setFilteredData([]);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!searchTerm.length) {
            alert('Please enter a city name');
            return;
        }
        
        if(!findIfCityExists(searchTerm)) {
            setSelectedCity('not found');
            return;
        }

        setIsSending(true);
        const countryCode = findCountryCodeFromCity(searchTerm);
        const requestUrl = apiUrl + '&city=' + searchTerm + '&country=' + countryCode;
        
        fetch(requestUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json()).then(data => {
            setData(data.data); 
            setSelectedCity(searchTerm);
            setIsSending(false);
            setWeather({
                description: data.data[0].weather.description,
                temperature: data.data[0].temp,
                icon: data.data[0].weather.icon,
                date: data.data[0].datetime,
            })
        }).catch(err => {
            console.log(err);
            setIsSending(false);
        });
    }

    const handleSelect = (city: string) => {
        setSearchTerm(city);
        setFilteredData([]);
        inputRef.current?.focus();
    }

    return (
        <form onSubmit={handleSubmit} className="search">
            <div>
                <div className='wrapper'>
                    <div className='input-wrapper'>
                        <input
                            type="text"
                            placeholder="Search City"
                            value={searchTerm}
                            ref={inputRef}
                            onChange={onInputChange}
                        />
                         <button type="submit" className='search-button'>
                            <FontAwesomeIcon icon={faSearch} color='#77B6EA' size='sm'/>
                        </button>
                    </div>
                    { isSending ? <span className='loader'></span> : <></>}
                </div>
                {!!filteredData.length && <div className='dropdown-wrapper'>
                    <div className="dropdown-list">
                    {filteredData.map((city, index) => (
                    <div
                        key={index}
                        className="dropdown-item"
                        onClick={() => {
                            handleSelect(city);
                        }}
                    >
                        {city}
                    </div>
                    ))}
                    </div>
                    <button onClick={handleClose} className='close-button'>
                        <FontAwesomeIcon icon={faXmark} color='#000000' size='sm'/>
                    </button>
                </div>}
            </div>
        </form>
      );
}

export default DropdownWithSearch;
