import React, { Component } from 'react';
import Product from './product';
import ProductContext from "./../context/products";

class Products extends React.Component {
  static contextType = ProductContext;
  
  render() { 
    return (
      <>
        <button onClick={this.context.onReset} className='btn btn-primary'>Reset</button>
        {this.context.products.map((p,index) => (
          <Product  id={p.id} key={index} productName={p.productName} count={p.count} />
        ))}
      </>
    );
  }

  
}
 
export default Products;