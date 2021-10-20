import { Component } from "react";
import './product.css'

class Product extends Component {
  count = 5;
  render() {
    return (
      <>
        <span  className='m-2 text-info'>product name</span>
        <span  className='m-2 badge bg-primary'>{this.format()}</span>
        <button className='m-2 btn btn-sm btn-success'>+</button>
        <button className='m-2 btn btn-sm btn-warning'>-</button>
        <button className='m-2 btn btn-sm btn-danger'>delete</button>
      </>
    );
  }

  format(){
    if(this.count === 0){
      return 'zero';
    }else{
      return this.count;
    }
  }
}

export default Product;
