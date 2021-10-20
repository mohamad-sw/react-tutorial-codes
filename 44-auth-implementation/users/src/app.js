import React, { Component } from "react";
import Users from "./components/users";
import User from "./components/user";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/notFound";
import Dashboard from "./components/dashboard";
import axios from "axios";

class App extends React.Component {
  state = {
    user: null,
  }

  componentDidMount(){
    const token = localStorage.getItem('token');
    if(!token){
      this.setState({user: null});
      return;
    }
    // const response = await axios.post("reqres.in/api/userbytoken", {token});
    const response = {
      data: {
        user:{
          name: 'mohammad',
          email: 'mohamad@gmail.com'
        }
      }
    }

    if(!response.data.user){
      this.setState({user: null});
      return;
    }

    this.setState({user: response.data.user})
  }
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
            <Route path="/dashboard" component={Dashboard} />
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
