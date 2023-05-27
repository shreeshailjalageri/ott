// const { useState, useEffect } = require("react")

// const weather=()=>{
     
//     let[place,setPlace]=useState(null);
//     let[weather,setWeather]=useState("");
//     const SearchBar = ({ onSearch }) => {
//         const [city, setCity] = useState("");
      
//         const handleSearch = async () => {
//           try {
//             const response = await axios.get(
//               `https://rapidapi.com/Neteosourceweather/api/ai-weather-by-betesource/findplaces?city=${city}`,
//               {
//                 headers: {


// 		'X-RapidAPI-Key': '80e3e9f697mshc6f99ab5989434cp1e6ba0jsn98a52305f645',
// 		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
//             }
// }
//           }}}};
//    fetch(url,options)
//    .then((res)=>{return res.json})
//    .then((data)=>{setPlace(data.data.place);})

// },[])
    
// let weather=()=>{
//     const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places_prefix?text=fishermans%20wh&language=en';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '80e3e9f697mshc6f99ab5989434cp1e6ba0jsn98a52305f645',
// 		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
// 	}
// };
// fetch(url,options)
// .then((res)=>{return res.json})
// .then((data)=>{setWeather(data.data.weather);})

// }
// return(
//     <div className="weather">
//         <h1>weather forcasting</h1>
//         <hr />
//         <textarea id="input" value={place}></textarea>
//             </div>
// )
// }



// import React, { useState } from 'react';
// import axios from 'axios';

// const API_KEY = '80e3e9f697mshc6f99ab5989434cp1e6ba0jsn98a52305f645'; // Replace with your RapidAPI key

// const SearchBar = ({ onSearch }) => {
//   const [city, setCity] = useState('');

//   const handleSearch = async () => {
//     try {
//       const response = await axios.get(
//         `https://rapidapi.com/Neteosourceweather/api/ai-weather-by-betesource/findplaces?city=${city}`,
//         {
//           headers: {
//             'x-rapidapi-key': API_KEY,
//             'x-rapidapi-host': 'Neteosourceweather.p.rapidapi.com',
//           },
//         }
//       );
      
//       const placeId = response.data.results[0].place_id;
//       onSearch(placeId);
//     } catch (error) {
//       console.error('Error searching for place:', error);
//     }
//   };

//   return (
//     <div>
//       <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
//       <button onClick={handleSearch}>Search</button>
//     </div>
//   );
// };

// const WeatherCard = ({ weatherData }) => {
//   const { temperature, humidity, windSpeed, weatherCondition } = weatherData;

//   return (
//     <div>
//       <h2>Weather Details</h2>
//       <p>Temperature: {temperature}°C</p>
//       <p>Humidity: {humidity}%</p>
//       <p>Wind Speed: {windSpeed} m/s</p>
//       <p>Weather Condition: {weatherCondition}</p>
//     </div>
//   );
// };

// const WeatherApp = () => {
//   const [weatherData, setWeatherData] = useState(null);

//   const searchWeather = async (placeId) => {
//     try {
//       const response = await axios.get(
//         `https://rapidapi.com/Neteosourceweather/api/ai-weather-by-betesource/currently?placeId=${placeId}`,
//         {
//           headers: {
//             'x-rapidapi-key': API_KEY,
//             'x-rapidapi-host': 'Neteosourceweather.p.r)
//         }
//     }
// }
//   }
