import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Movies from "./components/movieComponent";
import NavBar from "./components/navBar";
import Customers from "./components/customer";
import Rentals from "./components/rental";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import Register from "./components/common/register";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/register" component={Register}></Route>
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies"></Redirect>
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
