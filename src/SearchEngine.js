import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");

  function displayWeather(response) {}

  function handleSubmit(event) {
    event.prevemtDefault();
    let apiKey = "97c2f6a3b34509ac62090edc5d18d949";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
}
