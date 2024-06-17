import React, { useState } from "react";

function Buscador({ onSearch }) {
  const [movie, setMovie] = useState("");

  const handleInputChange = (e) => {
    setMovie(e.target.value);
  };

  const handleSearch = () => {
    onSearch(movie);
  };

  return (
    <>
      <input
        type="text"
        value={movie}
        onChange={handleInputChange}
        placeholder="Enter movie name"
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
}

export default Buscador;
