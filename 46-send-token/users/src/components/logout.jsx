import React, { Component } from 'react';

class Logout extends React.Component {
  componentDidMount(){
    localStorage.removeItem('token');
    window.location = '/'
  }

  render() { 
    return null;
  }
}
 
export default Logout;