import React, { useState, useEffect } from "react";

function MiApi({ name }) {
  const [sortedInfo, setSortedInfo] = useState([]);

  const key = "a6bbc00a112018aede3af782e4713ac4";

  const getMovie = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${name}`;
    const response = await fetch(url);
    const data = await response.json();
    setSortedInfo(data.results);
  };

  useEffect(() => {
    getMovie();
  }, [name]);

  const sortByDateAscFunc = () => {
    const sorted = [...sortedInfo].sort((a, b) =>
      a.release_date > b.release_date ? 1 : -1
    );
    setSortedInfo(sorted);
  };

  const sortByDateDescFunc = () => {
    const sorted = [...sortedInfo].sort((a, b) =>
      a.release_date < b.release_date ? 1 : -1
    );
    setSortedInfo(sorted);
  };

  return (
    <>
      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th style={{ verticalAlign: "top", width: "30%" }}>Title</th>
            <th style={{ verticalAlign: "top", width: "50%" }}>Synopsis </th>
            <th style={{ verticalAlign: "top", width: "10%" }}>Score</th>
            <th style={{ verticalAlign: "top", width: "10%" }}>
              Release Date
              <div>
                <button onClick={sortByDateAscFunc} style={{ padding: "5px" }}>
                  &uarr;
                </button>
                <button onClick={sortByDateDescFunc} style={{ padding: "5px" }}>
                  &darr;
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedInfo.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.overview}</td>
              <td>{movie.vote_average}</td>
              <td>{movie.release_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MiApi;
