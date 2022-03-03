import React from 'react';

const MovieDetails = (props) => {
    return(
        <div className='details'>
                                        
            <h1>{props.selected.name}</h1>
            <h2>{props.selected.yearCreated}</h2>
            <h2>{props.selected.Director.name}</h2>
                                        
            <p>Description: {props.selected.description}</p>
            <button onClick={props.clearSelected}>back</button>
        </div>
    )
}

export default MovieDetails;