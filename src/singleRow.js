import React from 'react';

const SingleRow = (props) => {
    return(
        <tr key={props.movie.id} className='movie' onClick={() => {props.selectMovie(props.movie.id)}}>
            <td>{props.movie.name}</td>
            <td>{props.movie.yearCreated}</td>
            <td>{props.movie.Director.name}</td>
        </tr>

    )
}

export default SingleRow;