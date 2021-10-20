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
        {this.state.products.map((p,index) => (
          <Product onDelete={this.handleDelete} id={p.id} key={index} productName={p.productName} count={p.count} />
        ))}
      </>
    );
  }

  handleDelete = (productId)=>{
    const newProducts = this.state.products.filter(p => p.id !== productId);
    this.setState({products: newProducts});
  }
}
 
export default Products;