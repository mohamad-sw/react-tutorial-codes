import { Component } from "react";
import Products from "./components/products";
import Navbar from "./components/navbar";
import ProductContext from "./context/products";

class App extends Component {

  constructor(props){
    super(props);
    console.log('App - constructor');
  }

  componentDidMount(){
    console.log('App - didMount');
  }

  state = {
    products: [
      { id: 1, count: 2, productName: "laptop" },
      { id: 2, count: 1, productName: "phone" },
      { id: 3, count: 4, productName: "airpods" },
    ],
  };

  render() {
    console.log('App - render');
    return (
      <>
        <ProductContext.Provider
          value={{
            products: this.state.products,
            onDelete: this.handleDelete,
            onIncrement: this.handleIncrement,
            onDecrement: this.handleDecrement,
            onReset: this.handleReset,
          }}
        >
          <Navbar />
          <Products />
        </ProductContext.Provider>
      </>
    );
  }

  handleDelete = (productId) => {
    const newProducts = this.state.products.filter((p) => p.id !== productId);
    this.setState({ products: newProducts });
  };

  handleIncrement = (productId) => {
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count += 1;
    this.setState({ products: newProducts });
  };

  handleDecrement = (productId) => {
    const newProducts = [...this.state.products];
    const index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].count -= 1;
    this.setState({ products: newProducts });
  };

  handleReset = () => {
    const newProducts = this.state.products.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState({ products: newProducts });
  };
}

export default App;
