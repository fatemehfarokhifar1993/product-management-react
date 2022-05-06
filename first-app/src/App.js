import ProductsProvider from "./components/Providers/ProductsProvider";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import NavBar from "./components/NavBar/NavBar";
const App = () => {
  return (
    <ProductsProvider>
      <div className="container">
        <NavBar />

        <ProductList />
      </div>
    </ProductsProvider>
  );
};

export default App;
