import {createContext} from 'react';

const productContext = createContext({
  products: [],
  onDelete: ()=>{},
  onIncrement: ()=>{},
  onDecrement: ()=>{},
  onReset: ()=>{},
});

export default productContext;