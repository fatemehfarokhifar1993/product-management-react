import React, { useContext, useReducer } from "react";
import { productsData } from "../../db/products";
const ProductContent = React.createContext();
const ProductContentDispatcher = React.createContext();


const reducer=(state,action)=>{
switch (action.type) {
  case "icrement":{
    const index = state.findIndex((item) => item.id === action.id);
    const product = { ...state[index] };
    product.quantity++;
    const updatedProducts = [...state];
    updatedProducts[index] = product;
  return updatedProducts;
  }
  case "decrement":{
    const index = state.findIndex((item) => item.id === action.id);
    const product = { ...state[index] };
    if (product.quantity === 1) {
      const filteredProducts = state.filter((p) => p.id !== action.id);
 return filteredProducts;
    } else {
      const updatedProducts = [...state];
      product.quantity--;
      updatedProducts[index] = product;
      return updatedProducts;
    }
  }
  case "remove":{
    const filteredProducts = state.filter((p) => p.id !== action.id);
    return filteredProducts;

  }
   case "filter":{
    if (action.selectedOption.value === "" || action.selectedOption.value === undefined) {
      return productsData;
    } else {
      const updatedProducts = productsData.filter(
        (p) => p.availableSizes.indexOf(action.selectedOption.value) >= 0
      );
      return updatedProducts;
    }
   }
   case "sort":{
    const products = [...state];
    if (action.selectedOption.value === "lowest") {
      const sortedProducts = products.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
        if (a.price < b.price) {
          return -1;
        }
        return 0;
      });
     return sortedProducts;
    } else {
      const sortedProducts = products.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
        if (a.price > b.price) {
          return -1;
        }
        return 0;
      });
      return sortedProducts;
    }
   }
   case "search":{
    if (action.event.target.value ==="") {
     return state;
    }
    else{
      const filteredProducts=state.filter((p)=>p.title.toLocaleLowerCase().includes(action.event.target.value.toLocaleLowerCase()))
    return filteredProducts;
    }
   }
  default:
   return state;
}
}

const ProductsProvider = ({ children }) => {
  const [products, dispatch] =useReducer(reducer,productsData);
  return (
    <ProductContent.Provider value={products}>
      <ProductContentDispatcher.Provider value={dispatch}>
        {children}
      </ProductContentDispatcher.Provider>
    </ProductContent.Provider>
  );
};

export default ProductsProvider;
export const useProducts = () => useContext(ProductContent);
export const useProductsActions = () => {
  return useContext(ProductContentDispatcher);
};
