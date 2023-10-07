# Weather Forecaster Web App
   * This app shows 16 days of weather prediction

## Notes

* It caches recurrent search results.
* Responsive design
  - Simulator might need refresh due to the width and height ratio of the chart
* Chart.js is used for the chart component
* There is an extra custom component: Dropdown. Can be removed on request.
* There are multiple same named cities and were some duplicates in the city names. They're filtered and to avoid confusion, I've added country codes to the city name. Can be removed on request. (I still keep the previous data file and logic)
  - This is causing the need to select from dropdown only for these duplicate cities.
* The magnifying glass is also a submit button
* The check for non-existing city names are done on FE with a small function. This is because the API gives results of a similar named city when written wrong.
* When hovered on the dots in the chart, users see the temperature as it is. However when it's shown in the card component, it is rounded to the nearest integer.
* The deployment is automated for every push on main.
