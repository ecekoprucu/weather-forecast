import './WeatherCard.css';
import { WeatherType } from 'context/dataContext';

type Props = {
    weather: WeatherType;
    selectedCity: string;
}

const WeatherCard = ({weather, selectedCity}: Props) => {

   
    return (
        <div className='card-wrapper'>
            <h3>{!!weather.temperature && Math.round(weather.temperature)}°C</h3>
            <h3>{selectedCity}</h3>
            <span>{new Date(weather.date).toLocaleDateString("en-US", {
                "day": "numeric",
                "month": "long"
            })}</span>
           <div className='description-wrapper'>
            <img width={35} height={35} src={`/src/assets/icons/${weather.icon ? weather.icon : 'c04d'}.png`}/> 
            <p>{weather.description}</p>
           </div>
        </div>
    );
}

export default WeatherCard;