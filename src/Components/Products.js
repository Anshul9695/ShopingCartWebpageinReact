import React,{useContext} from "react";
import {ProductsContext} from "../Global/ProductsContext";
import { CartContext } from "../Global/CartContext";
import Banner from "./Banner";
import Heading from "./Heading";
const Products=()=>{
    const {Products} =useContext (ProductsContext);
    const {dispatch}=useContext(CartContext);
  
    return(
 <div className="container">
     <Banner />
     <Heading />
 
       <div className="products">
           {Products.map((product)=>(
               <div className="product" key={product.id}>
                   <div className="product-image">
                       <img src={product.image} alt="not found" />
                   </div>
                  <div className="product-details">
                      <div className="product-name">
                          {product.name}
                  </div>
                  <div className="product-price">
                      ${product.price}.00
                      </div>
                  </div>
                  <div className="add-to-card" onClick={()=>dispatch({type:'ADD_TO_CART',id:product.id,product})}>Add To Card</div>
                  {product.status==="hot" ?<div className="hot">Hot</div> : ""}
                  {product.status==="new" ?<div className="new">New</div> : ""}
                  {product.status==="branded" ?<div className="branded">Branded</div> : ""}
               </div>
           ))}
       </div>
       </div>
    )
}
export default Products;