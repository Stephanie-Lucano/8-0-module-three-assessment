import { Component } from "react";

class People extends Component {
  constructor() {
    super()
    this.state = {
      userInput: "",
      characters: [],
    }
  }

  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://ghibliapi.herokuapp.com/people")
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                characters: data,
            })
        })
        .catch((error) => {
            throw error;
        })
        event.target.value = '';
  }

  render() {
    const findCharacter = () => {this.state.characters.find((character) => { return character.name === this.state.userInput || null})
    }
    return (
      <div className="people">
          <h1>Search for a Person</h1>
          <form>
            <input 
              type='text' 
              placeholder='Find Your Person' 
              name='searchbar' 
              onChange={this.handleChange} 
              required 
            />
            <button onSubmit={this.handleSubmit}>Submit</button>
          </form>
      </div>
    );
  }
}

export default People;