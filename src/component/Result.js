import React from 'react';

function Result({ result, openPopup }) {
  return (
    <div className="result" onClick={() => openPopup(result.imdbID)}>
      <img src={result.Poster} alt="" />
      <h3>{result.Title}</h3>
      <h3>Year : {result.Year}</h3>
      <h3>imdbID : {result.imdbID}</h3>
    </div>
  );
}

export default Result;
