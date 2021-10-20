import React, { Component } from 'react';
import Users from './components/users';
import Navbar from './components/navbar';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';
import {Route} from 'react-router-dom';

class App extends React.Component {
  render() { 
    return <>
      <Navbar />
      <div className='container mt-3'>
        <Route path='/users' component={Users} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/' component={Home} />
      </div>
    </>
  }
}
 
export default App;