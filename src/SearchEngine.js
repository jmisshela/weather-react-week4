import React from "react";

export default function SearchEngine() {
  function handleSubmit(event) {
    event.prevemtDefault();
  }

  function updateCity(event) {}

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );
}
