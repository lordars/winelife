import React from "react"

import { Link } from "react-router-dom"

interface PagesProducsProps{
    id:number;
    name: string;
    description: string;
    price: string;
    rating?:string
    img?:string;
}

const Products: React.FunctionComponent <PagesProducsProps> =(props)=>{

 

return(

    <li>
                         <div className="product">
                            <img 
                            className="product-image"
                            src={props.img}
                             alt="product"/> 
                             <div className="product-name">
                             <Link to={`/Product/${props.id}`}>  {props.name} </Link>  
                             </div>
                             <div className="product-brand">{props.description} </div>
                             <div className="product-price">${props.price}</div>
                             <div className="product-rating">{props.rating} </div>
                         </div>
                     </li>




)

}


export default Products;