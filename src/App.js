import React, { useState,useEffect,useCallback } from 'react';
import Seacrh from './component/Search'
import Results from './component/Results'
import Axios from 'axios'


function App() {
      const [state,setState] = useState({
         s:"",
         results:[],
        selected:{},
  });

         const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=79a741e4";

         const search = (e) => {
    if (e.key === "Enter") {
      Axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }







  return (
    <div className="App">
      <header>
        <h1>Movie App</h1>
      </header>
      <main>
        <Seacrh handleInput={handleInput} search={search}/>
        <Results results={state.results}/>
      </main>
    </div>
  );
}

export default App;
