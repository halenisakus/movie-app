import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Search from './component/Search';
import Results from './component/Results';
import Popup from './component/Popup';

function App() {
  const [state, setState] = useState({
    s: 'Pokemon',
    d: '',
    t: '',
    results: [],
    selected: {},
  });
  const apiurl = 'http://www.omdbapi.com/?apikey=dfe6d885';

  const search = (e) => {
    if (e.key === 'Enter') {
      if (!state.s) {
        alert('Hata');
      } else {
        console.log(
          apiurl + '&s=' + state.s + '&y=' + state.d + '&type=' + state.t
        );
        axios(
          apiurl + '&s=' + state.s + '&y=' + state.d + '&type=' + state.t
        ).then(({ data }) => {
          console.log(data.Search);
          let results = data.Search;

          setState((prevState) => {
            return { ...prevState, results: results };
          });
        });
      }
    }
  };

  const openPopup = (id) => {
    axios(apiurl + '&i=' + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  useEffect(() => {
    axios(apiurl + '&s=' + state.s).then(({ data }) => {
      let results = data.Search;

      setState((prevState) => {
        return { ...prevState, results: results };
      });
    });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search setState={setState} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {typeof state.selected.Title != 'undefined' ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
