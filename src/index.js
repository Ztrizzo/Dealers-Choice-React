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
    }

    async componentDidMount(){
        const response = await axios.get('/api/movies');
        this.setState({
            movies: response.data
        })
    }
    
    render(){
        

        return <div>
            <h1>Movies</h1>
            <ul>
                {this.state.movies.map((movie, idx) => <li key={idx}>{movie.name}</li>)}
            </ul>
        </div>;
    }
}

ReactDOM.render(
    <Main/>,
    document.querySelector('#root')
)
