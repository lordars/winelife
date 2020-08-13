import React from "react"


function Sidebar (){
    const closeMenu = ()=>{
        document.querySelector(".sidebar").classList.remove("open")
    }
return(



<aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button  onClick={closeMenu} className="sidebar-close-button"  >x</button>
           <div className="sidebar-item">
            <ul  >
                <li>
                   <a href="">Cavernets Suavinion</a> 
                    
                </li>
                <li>
                    <a href=""> Malbecs</a>
                </li>
            </ul>
            </div>
        </aside>






)

}


export default Sidebar;