import React, { Component } from 'react';
import Product from './product';

class Products extends React.Component {
  state = {
    products: [
      {id:1 , count: 2, productName: 'laptop'},
      {id:2 , count: 1, productName: 'phone'},
      {id:3 , count: 4, productName: 'airpods'},
    ]
  }
  render() { 
    return (
      <>
        <button onClick={this.handleReset} className='btn btn-primary'>Reset</button>
        {this.state.products.map((p,index) => (
          <Product onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete} id={p.id} key={index} productName={p.productName} count={p.count} />
        ))}
      </>
    );
  }

  handleDelete = (productId)=>{
    const newProducts = this.state.products.filter(p => p.id !== productId);
    this.setState({products: newProducts});
  }

  handleIncrement = (productId)=>{
      const newProducts = [...this.state.products];
      const index = newProducts.findIndex(p=> p.id === productId);
      newProducts[index].count += 1;
      this.setState({products: newProducts});
  }

  handleDecrement = (productId)=>{
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex(p=> p.id === productId);
    newProducts[index].count -= 1;
    this.setState({products: newProducts});
}

  handleReset = ()=>{
    const newProducts = this.state.products.map(p=>{
      p.count = 0;
      return p
    });
    this.setState({products: newProducts});
  }
}
 
export default Products;