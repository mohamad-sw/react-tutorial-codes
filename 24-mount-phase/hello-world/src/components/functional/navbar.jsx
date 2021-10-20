
import {useContext} from 'react';
import ProductsContext from "./../../context/products";

const Navbar = (props) => {
  const productsContext  = useContext(ProductsContext);
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          Navbar {calculateSum()}
        </a>
      </div>
    </nav>
  );

  function calculateSum(){
    let sum = 0;
    productsContext.products.forEach(p=>{
      sum += p.count;
    })
    return sum;
  }
}
 
export default Navbar;