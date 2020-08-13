import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Cart from './pages/Cart/index';
import Signin from './pages/Signin/index';
import Product from './pages/Product/Product';

function Routes(){

    return(
        <BrowserRouter>
       
        <Route path="/" exact component={Landing} />
        <Route path="/about"  component={About} />
        <Route path="/Cart"  component={Cart} />
        <Route path="/Signin"  component={Signin} />
        <Route path="/Product/:id"  component={Product} />
        </BrowserRouter>  

    )
}
export default Routes;