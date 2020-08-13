import React from "react"
import './styles.css'
import PagesHeader from '../../components/PageHeader/index'
import Sidebar from "../../components/Sidebar/index";
import { RouteComponentProps, match, Link } from 'react-router-dom';
import data from "../../data";
import backIcon from "../../assets/image/back.svg"
import Footer from "../../components/Footer/index";

type PathParamsType = {
    id: string,
}

type PropsType = RouteComponentProps<PathParamsType> & {
    id: string,
}


const Product: React.FC <PropsType> = (props)=>{
 const numero =  (props.match.params.id)
  const trasnformNumero = Number(numero);
  console.log()
   const idProduct = data.productos[trasnformNumero]
    
return(
   
    
    <body>
        <div className="grid-container">    
   <PagesHeader title="Products"/>
   <Sidebar/>
  
  

   
         <div >
            <div className= 'back-to-result'>
            <Link to="/">
            <img src={backIcon} alt=""/>
            </Link>                   
            </div> 
            <div className="details-container">
          
            <div className="details-image">
            <img 
            className="details-image"
            src={idProduct.img}
             alt="product"/>      
            </div>
            
            <div className="details-info">
                <ul>
                    <li> <h4> {idProduct.name} </h4>   </li>
                    <li> Raiting={idProduct.rating}   </li>
                    <li> <b>${idProduct.price}</b> </li>
                    <li> description:
                        <div> {idProduct.description}</div> </li>
                </ul>
            </div>

            <div className="details-action">
            <ul>
                <li>price:<> </>  <b> ${idProduct.price}</b> </li>
                <li>status:{idProduct.status} </li>
                <li >qtd:<> </>  
                    <select className="details-qtd">
                        <option>1 </option>
                        <option>2</option>
                        <option>3 </option>
                        <option>4 </option>
                         </select>
                     </li>
                     <li>
                         <button className="button" >Add to cart </button>
                     </li>



            </ul>

            </div>
            </div>  
             

           
             
        


<Footer/>
</div>
</div>
    </body>
)

}


export default Product;