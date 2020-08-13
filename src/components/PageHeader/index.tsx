import React, { useState, useEffect } from 'react'
import  backIcon from  '../../assets/image/back.svg'
import  logoIcon from  '../../assets/image/logoIcon.jpeg'

import "./styles.css"
import { Link } from 'react-router-dom';

interface PagesHeaderProps{
    title: string;
    description?: string;
}

//pode escrever tambem React.FC
const PagesHeader: React.FunctionComponent <PagesHeaderProps> = (props)=>{
  
    const openMenu = ()=>{
        document.querySelector('.sidebar').classList.add("open");
    }
  
    return(
     
        <header className="header">

            <div className='brand'>
                <button onClick={openMenu}>
                   &#9676; 
                </button>
        <Link to="/">wineLIFE</Link>
            </div>
            
        <div className='header-links'>
        <Link to='/Cart'>Cart</Link>
        <Link to='/Signin'>Sign In</Link>
        </div>
         
              
          </header>
    );

}

export default PagesHeader;