import React from 'react'

function Search ({ setState, search }) {
    return (
        <section className="searchbox-wrap">
            <input 
                type="text"
                name="s" 
                placeholder="Search for a movie..." 
                className="searchbox" 
                onChange={(e)=>{
                    let s = e.target.value;
                    setState(prevState => {
                    return { ...prevState, s }
                  })}}
                onKeyPress={search}
            />
            <input 
                type="text" 
                name="d"
                placeholder="Search for a date..." 
                className="searchbox" 
                onChange={(e)=>{
                    let d = e.target.value;
                    setState(prevState => {
                    return { ...prevState, d }
                  })}}
                onKeyPress={search}
            />
            <input 
                type="text" 
                name="d"
                placeholder="Search for a type..." 
                className="searchbox" 
                onChange={(e)=>{
                    let t = e.target.value;
                    setState(prevState => {
                    return { ...prevState, t }
                  })}}
                onKeyPress={search}
            />
        </section>
    )
}

export default Search