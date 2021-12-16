import { Component } from "react";
import Film from "./Film";

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
    const filmData = () => {this.state.films.find((film) => {
        return film.title === this.state.selectedFilm
      })
    }

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
          {this.state.selectedFilm !== "" && <Film data={filmData}/>}
      </div>
    );
  }
}

export default Movies;