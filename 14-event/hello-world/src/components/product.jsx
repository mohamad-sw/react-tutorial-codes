import { Component } from "react";
import './product.css'

class Product extends Component {
  count = 5;
  render() {
    return (
      <>
        <span  className='m-2 text-info'>product name</span>
        <span  className='m-2 badge bg-primary'>{this.format()}</span>
        <button onClick={this.handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
        <button onClick={this.handleDecrement} className='m-2 btn btn-sm btn-warning'>-</button>
        <button onClick={this.handleDelete} className='m-2 btn btn-sm btn-danger'>delete</button>
      </>
    );
  }

  handleIncrement = ()=>{
    console.log('increment');
  }

  handleDecrement =()=>{
    console.log('Decrement');
  }

  handleDelete =()=>{
    console.log('Delete');
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
