import React, { useContext } from "react";
import { useState } from "react";
const ProductContent = React.createContext();
const ProductContentDispatcher = React.createContext();

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { title: "React.js", price: "99 $", id: 1, quantity: 1 },
    { title: "Node.js", price: "89 $", id: 2, quantity: 2 },
    { title: "JavaScript", price: "79 $", id: 3, quantity: 3 },
  ]);
  return (
    <ProductContent.Provider value={products}>
      <ProductContentDispatcher.Provider value={setProducts}>
        {children}
      </ProductContentDispatcher.Provider>
    </ProductContent.Provider>
  );
};

export default ProductsProvider;
export const useProducts = () => useContext(ProductContent);
export const useProductsActions = () => {
  const setProducts = useContext(ProductContentDispatcher);
const products=useContext(ProductContent);
  const removeHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id !== id);
    setProducts(filteredProducts);
  };
  const incrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    product.quantity++;
    const updatedProduct = [...products];
    updatedProduct[index] = product;
    setProducts(updatedProduct);
  };
  const decrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    if (product.quantity === 1) {
      const filteredProducts = products.filter((p) => p.id !== id);
      setProducts(filteredProducts);
    } else {
      const updatedProduct = [...products];
      product.quantity--;
      updatedProduct[index] = product;
      setProducts(updatedProduct);
    }
  };
  return {removeHandler,incrementHandler,decrementHandler}
};
