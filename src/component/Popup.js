import React from 'react';

function Popup({ selected, closePopup }) {
  return (
    <div className="popup">
      <div className="content">
        <h2>
          {selected.Title} <span>({selected.Year})</span>
        </h2>

        <div className="plot">
          <div>
            <img src={selected.Poster} alt="" />
          </div>
          <div className="plot2">
            <div className="items">
              <div className="item">
                <strong>Genre:</strong> {selected.Genre}
              </div>
              <div className="item">
                <strong>Rating:</strong> {selected.Released}
              </div>
              <div className="item">
                <strong>Rated:</strong> {selected.Rated}
              </div>
              <div className="item">
                <strong>imdbRating:</strong> {selected.imdbRating}
              </div>
              <div className="item">
                <strong>Director:</strong> {selected.Director}
              </div>
              <div className="item">
                <strong>Writer:</strong> {selected.Writer}
              </div>
              <div className="item">
                <strong>Actors: </strong>
                {selected.Actors}
              </div>
            </div>
          </div>
        </div>
        <button className="close" onClick={closePopup}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;
