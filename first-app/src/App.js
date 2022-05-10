import ProductsProvider from "./components/Providers/ProductsProvider";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
import Filter from "./components/Filter/Filter";
const App = () => {
  return (
    <div className="App">
      <ProductsProvider>
        <NavBar />
        <div className="container">
          <Filter />
          <ProductList />
        </div>
      </ProductsProvider>
    </div>
  );
};

export default App;
