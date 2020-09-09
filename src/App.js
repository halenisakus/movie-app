import React, { useState ,useEffect} from 'react';
import Seacrh from './component/Search'
import Results from './component/Results'
import Popup from './component/Popup'
import Axios from 'axios'


function App() {
      const [state,setState] = useState({
         s:"Pokemon",
         results:[],
        selected:{},
  });

         const apiurl = "http://www.omdbapi.com/?&apikey=79a741e4";

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
  
  useEffect(() => {
    Axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
  }, []);






  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    Axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }



  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }





  return (
    <div className="App">
      <header>
        <h1>Movie App</h1>
      </header>
      <main>
        <Seacrh handleInput={handleInput} search={search}/>
        <Results results={state.results} openPopup={openPopup}/>
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App;
