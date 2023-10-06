import { useContext } from 'react';
import WeatherCard from 'components/WeatherCard';
import { ContextType, DataContext } from 'context/dataContext';
import { ChartArea } from 'components/ChartArea';

import './ReportArea.css';

const ReportArea = () => {
    const { weather, selectedCity } = useContext(DataContext) as ContextType;
    
    if(!selectedCity) {
        return (
            <div className='report-wrapper'>
                <p>No city is selected!</p>
                <p>Type any city name to get weekly forecast data</p>
            </div>
        )
    }

    if(selectedCity === 'not found') {
        return (
            <div className='report-wrapper'>
                <p className='red'>City doesn't exist!</p>
                <p>Type a valid city name to get weekly forecast data</p>
            </div>
        )
    }

    return (
        <div className='report-area-wrapper'>
            <ChartArea />
            <WeatherCard weather={weather} selectedCity={selectedCity}/>
        </div>
    );
}

export default ReportArea;