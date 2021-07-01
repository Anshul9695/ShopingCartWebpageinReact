import React, {createContext,useState} from "react";

import bag from "../images/bag.jpg";
import bag2 from "../images/bag2.jpg";
import shoes from "../images/shoes.jpg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch2.jpg";
import microphone from "../images/microphone.jpg"; 

import iphone from "../images/iphone.jpg"; 
import perfume from "../images/perfume.jpg"; 

export const ProductsContext =createContext();

const ProductContextProvider=(props)=>{
    const [Products] =useState([
        {id: 1,name: "bag", price:3000, image:bag, status: "hot"},
        {id: 2,name: "bag2", price:2000, image:bag2, status: "new"},
        {id: 3,name: "shoes", price:1000, image:shoes, status: "hot"},
        {id: 4,name: "watch", price:3000, image:watch, status: "branded"},
        {id: 5,name: "watch2", price:5000, image:watch2, status: "hot"},
        {id: 6,name: "microphone", price:700, image:microphone, status: "new"},

        {id: 7,name: "iphone", price:1700, image:iphone, status: "branded"},
        {id: 8,name: "perfume", price:900, image:perfume, status: "new"}
    ]);
    return(
<ProductsContext.Provider value={{Products: [...Products]}}>
{props.children}
</ProductsContext.Provider>
    )
}
export default ProductContextProvider;