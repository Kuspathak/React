import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [btnClicked, setBtnClicked] = useState(false);
  const apiKey = "a8878a70bfb9d0b6cf1cbfa5abd8f60b";
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  useEffect(() => {
    if (btnClicked) {
      const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;

      axios.get(url)
        .then((response) => {
          setData(response.data);
          setBtnClicked(false); // Reset btnClicked to false after updating data
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
          setBtnClicked(false); // Reset btnClicked even if there's an error
        });
    }
  }, [btnClicked, city, apiKey]);

  const getData = (e) => {
    e.preventDefault()
    setBtnClicked(true);
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 to-blue-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Weather App</h1>
        <form className="flex items-center justify-center mb-4">
          <input
            placeholder="Enter City Name"
            className="border rounded-l h-10 w-40 px-2 focus:outline-none"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white border border-blue-500 rounded-r h-10 px-4 hover:bg-blue-800 hover:text-white"
            onClick={getData}
          >
            Search
          </button>
        </form>
        <div className="text-center">
          {data && (
            <>
              <h2 className="text-xl font-semibold mb-2">
                Temperature: {data.main.temp}°C
              </h2>
              <p>City: {data.name}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
