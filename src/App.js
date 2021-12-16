import { Component } from "react";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/people" component={People} />
          <Route path="/locations" component={Locations} />
        </Switch>
      </div>
    );
  }
}

export default App;