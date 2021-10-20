import React, { Component } from "react";
import Users from "./components/users";
import User from "./components/user";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/notFound";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-3">
          <Switch>
            <Route path="/users/:id" component={User} />
            <Route path="/users" component={Users} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Redirect from="/customers" to="users" />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
