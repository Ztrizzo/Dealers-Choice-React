import React from 'react';
import ReactHeader from './header';
import SingleRow from './singleRow';

const MovieList = (props) => {
    return (
        <div>
            <h1 id='title'>Movies</h1>
            <table>
                <tbody>
                    <ReactHeader/>
                    
                    {props.movies.map(movie => {
                        return <SingleRow movie={movie} selectMovie={props.selectMovie} key={movie.id}/>

                            
                    })}
                        
                </tbody>
                    
            </table>
                
        </div>

    )
}

export default MovieList;
