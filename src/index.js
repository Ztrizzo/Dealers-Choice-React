
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
            return <div>
                <h1 id='title'>Movies</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Director</th>
                        </tr>
                    
                        {this.state.movies.map(movie => {
                            
                                return(   
                                   
                                    <tr key={movie.id} className='movie' onClick={() => {this.selectMovie(movie.id)}}>
                                        <td>{movie.name}</td>
                                        <td>{movie.yearCreated}</td>
                                        <td>{movie.Director.name}</td>
                                    </tr>)

                            
                        })}
                        
                    </tbody>
                    
                </table>
                
            </div>;
            else{
                return(
                    
                        <div className='details'>
                                        
                            <h1>{this.state.selected.name}</h1>
                            <h2>{this.state.selected.yearCreated}</h2>
                            <h2>{this.state.selected.Director.name}</h2>
                                        
                            <p>Description: {this.state.selected.description}</p>
                            <button onClick={this.clearSelected}>back</button>
                         </div>
                               
                )

            }
    }
}

ReactDOM.render(
    <Main/>,
    document.querySelector('#root')
)
