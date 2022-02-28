
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';



class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            movies: [],
            selected: {}
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
            selected: response.data[0]
        });
        
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
                
                    {this.state.movies.map(movie => {
                        if(movie.id === this.state.selected.id){
                            console.log(movie);
                            return(
                                <tr key={movie.id} >
                                    
                                    <td>{movie.name}</td>
                                    <td>{movie.yearCreated}</td>
                                    <td>{movie.Director.name}</td>
                                    <td>{movie.description}</td>
                                    
                                    
                                </tr>
                            )
                        }
                        else{
                            return(   
                                <tr key={movie.id} className='movie' onClick={() => {this.selectMovie(movie.id)}}>
                                    <td>{movie.name}</td>
                                    <td>{movie.yearCreated}</td>
                                    <td>{movie.Director.name}</td>
                                </tr>)
                        }
                        
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
