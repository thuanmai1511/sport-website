import React, { Component } from 'react';
import './App.css';
import ReactDom from 'react-dom' ;
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom' ;
import Navbar from './components/Navbar/Navbar';
import Home from './components/home';
import Products from './Pages/products';
import Signin from './Pages/login';
import register from './Pages/register';
import ProductsDetail from './Pages/ProductsDetail';
import Cart from './Pages/Cart';
import AllProduct from './Pages/allproduct';
import Order from './Pages/order';
import Admin from './Pages/admin';
import Management from './Pages/Management';
import orderManagement from './Pages/orderadmin';
import viewCollection from './Pages/viewcollection';
import revenue from './Pages/revenue';
class App extends Component {

  render(){
    return (
      <Router>
        <div className="App">

            <Navbar/>
            <Switch>
              <Route exact path="/" component= {Home}/>      
              <Route exact path="/signin" component= {Signin}/>
              <Route exact path="/viewcollection" component= {viewCollection}/>
              <Route exact path="/products" component= {AllProduct}/> 
              <Route exact path="/products/page=:page" component= {AllProduct}/> 
              <Route exact path="/products/type=:type" component= {Products}/>   
              <Route exact path="/products/type=:type/page=:page" component= {Products}/>   
              <Route exact path="/products/id=:id" component= {ProductsDetail}/> 
              <Route exact path="/Cart" component = {Cart}/>
              <Route exact path="/Order" component = {Order}/>
              <Route exact path="/admin" component = {Admin}/>
              <Route exact path="/productManagement" component = {Management}/>
              <Route exact path="/orderManagement" component = {orderManagement}/>
              <Route exact path="/revenueStatistics" component = {revenue}/>
              
            </Switch>
        </div>
    </Router>
  
   );
  }
}


export default App;
