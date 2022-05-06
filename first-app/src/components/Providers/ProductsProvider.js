import React, { useContext } from "react";
import { useState } from "react";
import { productsData } from "../../db/products";
const ProductContent = React.createContext();
const ProductContentDispatcher = React.createContext();
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
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
  const products = useContext(ProductContent);
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
  return { removeHandler, incrementHandler, decrementHandler };
};
