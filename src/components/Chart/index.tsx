import React, { useContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ActiveElement,
  ChartEvent,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ContextType, DataContext } from 'context/dataContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const isMobile = typeof screen.orientation !== 'undefined' && window.innerWidth <= 800;



export const Chart = () => {

    const { setWeather, data } = useContext(DataContext) as ContextType;

    const labels = data.map(item => item.datetime);
    const highTemperatureArray = data.map(item => item.high_temp);
    const lowTemperatureArray = data.map(item => item.low_temp);

    const weatherData = {
    labels,
    datasets: [
        {
        label: 'Highest Temperature',
        data: highTemperatureArray,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
        label: 'Lowest Temperature',
        data: lowTemperatureArray,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
    };

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
        },
        maintainAspectRatio: true,
        aspectRatio: isMobile ? 1 : 2,
        onClick: (event: ChartEvent, chartElement: ActiveElement[]) => {
          if (chartElement.length > 0) {
             const elementIndex = chartElement[0].index;
             const weatherDescription = data[elementIndex].weather.description;
             const weatherTemperature = chartElement[0].datasetIndex === 0 ? data[elementIndex].high_temp : data[elementIndex].low_temp;
             const weatherIcon = data[elementIndex].weather.icon;
             const selectedDate = data[elementIndex].datetime;
      
             const selectedWeather = {
                  description: weatherDescription,
                  temperature: weatherTemperature,
                  icon: weatherIcon,
                  date: selectedDate,
             }
      
            setWeather(selectedWeather);
          }
      }
    };
      
  return <Line options={options} data={weatherData} />;
}
