
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MovieList from './movieList';
import MovieDetails from './movieDetails';


class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            movies: [],
            selected: {}
        };
        this.selectMovie = this.selectMovie.bind(this);
        this.clearSelected = this.clearSelected.bind(this);
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
            selected: response.data[0]
        });
        
    }

    async clearSelected(){
        this.setState({
            selected: {}
        })
    }

    render(){
        if(Object.keys(this.state.selected).length === 0)
            return <MovieList movies={this.state.movies} selectMovie={this.selectMovie}/>;
        else{
            return <MovieDetails selected={this.state.selected} clearSelected={this.clearSelected}/>

            }
    }
}

ReactDOM.render(
    <Main/>,
    document.querySelector('#root')
)
