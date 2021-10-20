import { Component } from "react";
import './product.css'

class Product extends Component {

  render() {
    const {productName} = this.props;
    return (
      <div>
        <span  className='m-2 text-info'>{productName}</span>
        <span  className='m-2 badge bg-primary'>{this.format()}</span>
        <button onClick={this.handleIncrement} className='m-2 btn btn-sm btn-success'>+</button>
        <button onClick={this.handleDecrement} className='m-2 btn btn-sm btn-warning'>-</button>
        <button onClick={this.handleDelete} className='m-2 btn btn-sm btn-danger'>delete</button>
      </div>
    );
  }

  handleIncrement = ()=>{
    this.props.onIncrement(this.props.id);
  }

  handleDecrement =()=>{
    this.props.onDecrement(this.props.id);
  }

  handleDelete =()=>{
    this.props.onDelete(this.props.id);
  }

  format(){
    if(this.props.count === 0){
      return 'zero';
    }else{
      return this.props.count;
    }
  }
}

export default Product;
