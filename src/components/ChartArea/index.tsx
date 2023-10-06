import { useContext } from 'react';
import { Chart } from '../Chart';

import './ChartArea.css';
import { ContextType, DataContext } from 'context/dataContext';

export const ChartArea = () => {
    const { selectedCity } = useContext(DataContext) as ContextType;

    return (
        <div className='chart-wrapper'>
             { !!selectedCity && <>
                <p>Average high & low temperatures for {selectedCity}</p>
                <Chart />
            </>}
        </div>
    );
}

