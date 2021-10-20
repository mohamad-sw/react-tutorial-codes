import Product from './product';
import {useState} from 'react';

const Products = () => {
  const [products, setProducts] = useState([
    {id:1 , count: 2, productName: 'laptop'},
    {id:2 , count: 1, productName: 'phone'},
    {id:3 , count: 4, productName: 'airpods'},
  ])
  return ( 
    <>
      {products.map((p,index) => (
          <Product onDelete={handleDelete} id={p.id} key={index} productName={p.productName} count={p.count} />
        ))}
    </>
   );

   function handleDelete(productId){
    const newProducts = products.filter(p => p.id !== productId);
    setProducts(newProducts);
  }
}
 
export default Products;