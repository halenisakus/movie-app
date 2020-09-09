import React from 'react'

function Result({result}) {
    return (
        <div className="result">
        <img src={Result.Poster} />
	    <h3>{Result.Title}</h3>
            
        </div>
    )
}

export default Result
