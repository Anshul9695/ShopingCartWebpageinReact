import React,{useContext} from "react";
import {Link} from "react-router-dom";
import {CartContext} from "../Global/CartContext";
const Navbar=()=>{
    const {qty} = useContext(CartContext);
    return(
        
       <nav className="nav">
           <ul className="left">
         <li><Link to="/"><b className="indian">Online Shopping Store</b></Link></li>
           </ul>
           <ul className="right">
               <li><Link to="Cart">
                   <span className="shopingCard"><b className="card"><i class="fa fa-cart-plus" aria-hidden="true"></i></b>
                   <span className="cardcount">{qty}</span>
                   </span>
                   </Link></li>
              
           </ul>
       </nav>
    )
}
export default Navbar;