import React from "react"
import './styles.css'
import data from './../../data'
import Products from "../../components/Products/index"
import  sotonovillosriojajovenpromocionImg from '../../assets/image/sotonovillos-rioja-joven-promocion.jpg'
import Footer from "../../components/Footer/index"
import PagesHeader from "../../components/PageHeader/index"
import Sidebar from "../../components/Sidebar/index"
import Product from "../Product/Product"
interface PagesProducsProps{
    name: string;
    description: string;
    price: string;
    rating?:string
    img?:string;
}
function Landing (){

    return(
          
        <body>
            <div className='grid-container'>
        <PagesHeader  title="Vem vindo" />
        <Sidebar/>
           <main className='main'>
             <div className="content">
             <ul className='products'> 
                  
                  { data.productos.map((product:PagesProducsProps, index )=>{
 
                  return(  
                    <Products 
                    id={index}
                    name=  {product.name}
                    description={product.description}
                    price={product.price}
                    rating={product.rating}
                    img={product.img}
                     />
                     )
                    })}
                        
                </ul>

             </div>
          
           </main>


        <Footer/>
        </div>
       
        </body>
       
      
    )

}



export default Landing