import React, { Component } from 'react';
import ProductContext from "./../context/products";


class Navbar extends React.Component {
  static contextType = ProductContext;

  constructor(props){
    super(props);
    console.log('navbar - constructor');
  }

  componentDidMount(){
    console.log('navbar - didMount');
  }

  render() { 
    console.log('navbar - render');
    return (
      <nav className='navbar navbar-light bg-light'>
        <div className="container-fluid">
          <a href="#" className="navbar-brand">
            Navbar {this.calculateSum()}
          </a>
        </div>
      </nav>
    );
  }

  calculateSum = ()=>{
    let sum = 0;
    this.context.products.forEach(p=>{
      sum += p.count;
    })
    return sum;
  }
}
 
export default Navbar;