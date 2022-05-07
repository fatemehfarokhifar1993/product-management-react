import ProductsProvider from "./components/Providers/ProductsProvider";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
import Filter from "./components/Filter/Filter";
const App = () => {
  return (
    <ProductsProvider>
      <div className="container">
        <NavBar />
        <Filter />
        <ProductList />
      </div>
    </ProductsProvider>
  );
};

export default App;
