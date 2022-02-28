// console.log('test');

// document.querySelector('body').innerHTML = '<hr/>'

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            movies: []
        };
        this.selectMovie = this.selectMovie.bind(this);
    }

    async componentDidMount(){
        const response = await axios.get('/api/movies');
        this.setState({
            movies: response.data
        })
    }
    
    async selectMovie(id){
        const response = await axios.get(`/api/movies/${id}`);
        this.setState({
            movies: [response.data]
        })
    }


    render(){
        return <div>
            <h1>Movies</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Director</th>
                    </tr>
                
                    {this.state.movies.map((movie, idx) => {
                        return(
                            
                        <tr key={idx} className='movie' onClick={() => {this.setState({movies: [movie]})}}>
                            <td>{movie.name}</td>
                            <td>{movie.yearCreated}</td>
                            <td>{movie.Director.name}</td>
                        </tr>)
                    })}
                    
                </tbody>
                
            </table>
            
        </div>;
    }
}

ReactDOM.render(
    <Main/>,
    document.querySelector('#root')
)
