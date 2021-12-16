import { Component } from "react";
// import Film from "./Film";

class Movies extends Component {
  constructor() {
    super();
    this.state ={
      films: [],
      selectedFilm: "",
    }
  }

  fetchFilms = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
    .then((response) => response.json())
    .then((data) => {
      this.setState({films: data})
      console.log({data})
    })
    .catch((error) => {
      throw error;
    })
  }

  handleChange = (event) => {
    this.setState({selectedFilm: event.target.value})
  }

  componentDidMount = () => {
    this.fetchFilms()
  }
  
  render() {
    return (
      <div className="movies">
          <h1>Select a Movie</h1>
          <select onChange={this.handleChange}>
            <option value=""></option>
            {this.state.films.map((film) => {
              return (
                <option value={film.title}>{film.title}</option>
              )
            })}
          </select>
      </div>
    );
  }
}

export default Movies;