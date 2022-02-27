

class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            movies: []
        };
    }

    async componentDidMount(){
        const response = await axios.get('/api/movies');
        console.log(response);
        this.setState({
            movies: response.data
        })
    }
    
    render(){
        

        return <div>
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