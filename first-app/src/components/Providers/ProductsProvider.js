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
  const filterSizeHandler = (selectedOption) => {
    if (selectedOption.value === "" || selectedOption.value === undefined) {
      setProducts(productsData);
    } else {
      const updatedProducts = productsData.filter(
        (p) => p.availableSizes.indexOf(selectedOption.value) >= 0
      );
      setProducts(updatedProducts);
    }
  };
  const sortPriceHandler = (selectedOption) => {
    const updatedProduct = [...products];
    if (selectedOption.value === "lowest") {
      const sortedProducts = updatedProduct.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
      setProducts(sortedProducts);
    } else {
      const sortedProducts = updatedProduct.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
      setProducts(sortedProducts);
    }
  };
  const searchHandler = (e) => {
    if (e.target.value ==="") {
      setProducts(products)
    }
    else{
      const filteredProducts=products.filter((p)=>p.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
    setProducts(filteredProducts)
    }
  };
  return {
    removeHandler,
    incrementHandler,
    decrementHandler,
    filterSizeHandler,
    sortPriceHandler,
    searchHandler,
  };
};
