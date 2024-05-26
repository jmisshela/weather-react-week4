import React from "react";

export default function SearchEngine() {
  function handleSubmit(event) {
    event.prevemtDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." />
      <input type="submit" value="Search" />
    </form>
  );
}
