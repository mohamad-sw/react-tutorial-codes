import Product from "./product";

const Products = ({products,onIncrement,onDecrement,onDelete,onReset}) => {
  
  return (
    <>
      <button onClick={onReset} className="btn btn-primary">
        Reset
      </button>
      {products.map((p, index) => (
        <Product
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
          id={p.id}
          key={index}
          productName={p.productName}
          count={p.count}
        />
      ))}
    </>
  );

  
};

export default Products;
