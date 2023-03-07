import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Vidly
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav">
                <NavLink className="nav-item nav-link" to="/movies">
                  Movies
                </NavLink>
                <NavLink className="nav-item nav-link" to="/customers">
                  Customers
                </NavLink>
                <NavLink className="nav-item nav-link" to="/rentals">
                  Rentals
                </NavLink>
                <NavLink className="nav-item nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-item nav-link" to="/register">
                  Register
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
