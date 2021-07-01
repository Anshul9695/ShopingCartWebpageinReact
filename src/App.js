import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Gmail from "./Components/Gmail";
import ProductContextProvider from "./Global/ProductsContext";
import CartContextProvider from './Global/CartContext';
import Products from "./Components/Products";
import Cart from "./Components/Cart";
function App() {
  return (
    <div className="App">
       <ProductContextProvider>
         <CartContextProvider>
         <Router>
         <Gmail />
         <Navbar />
         <Switch>
           <Route path="/" exact component={Products} />
           <Route path="/Cart" exact component={Cart} />
         </Switch>
         </Router>   
         </CartContextProvider>
    </ProductContextProvider>
    
    </div>
  );
}

export default App;
