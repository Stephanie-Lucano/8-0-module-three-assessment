import { Component } from "react";
import { Link } from 'react-router-dom';
import logo from "../camera.png";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <article>
            <Link to="/">
                <img src={logo} alt=""text />
            </Link>
        </article>
        <Link to="/movies">Movies</Link>
        <Link to="/people">People</Link>
        <Link to="/locations">Locations</Link>
        
      </div>
    );
  }
}

export default Navbar;