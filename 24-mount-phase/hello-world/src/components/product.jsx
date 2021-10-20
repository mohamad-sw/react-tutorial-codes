import { Component } from "react";
import './product.css'
import ProductContext from "./../context/products";

class Product extends Component {
  static contextType = ProductContext;

  constructor(props){
    super(props);
    console.log('Product - constructor');
  }

  componentDidMount(){
    console.log('Product - didMount');
  }

  render() {
    console.log('Product - render');

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
    this.context.onIncrement(this.props.id);
  }

  handleDecrement =()=>{
    this.context.onDecrement(this.props.id);
  }

  handleDelete =()=>{
    this.context.onDelete(this.props.id);
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
