import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom' ;
import axios from 'axios';
import swal from 'sweetalert';
import Cancel from '../img/cancel.png';
import '../css/Cart.css';
import Check from '../img/checked.png';
import Cookies from 'universal-cookie';
import plus from '../img/plus.png';
import minus from '../img/remove.png';
import OrderModal from "../components/modal"


const cookies = new Cookies();
const cookie = cookies.get('_id');

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            modal: false,
            code: "" ,
            discount: 0           
                           
        }       
        this.checkout = this.checkout.bind(this) 
        this.discountCode = this.discountCode.bind(this) 
    }
    
    componentDidMount(){
        if(!cookie){
            this.props.history.push('/signin')
        }
        this.getCart();  
    }
    getCart() { 
        // console.log("getCart rendering--------------");
        const userId = cookie;
        // console.log(userId);
        axios.get("http://localhost:8080/Cart/" +userId).then(res =>{
            this.setState({
                cart: res.data,
            });
        //    console.log(res.data);
        });
    }


    getUpdate(id, num, num1){
        if(num1 + num > 0 ) {
            const data = {
                id: id,
                num: num
            }
            axios.post("http://localhost:8080/updateCart" ,data)
            .then(() => {
                this.getCart();
            })
        }
       
        
    }
    discountCode(event){
        const value = event.target.value;
        this.setState({
            code: value
        })
        // console.log(this.state.code);
    }
    remove(id) {
        // console.log("hi");
        const data = {
            id: id
        }
        axios.post("http://localhost:8080/deleteCart",data)
        .then( ()=>{
            this.getCart();
        })
        window.location.reload(true);
    }
    
    checkout(){
        
        this.setState({
            modal : !this.state.modal,
            cart: this.state.cart
           
        })
       
    }
    render(){
        
        let total = 0;
        let discount = 0;
        let Ship = 0;
        let grandTotal = 0;
        const {cart} = this.state;
        for(var dt of cart){
            total += dt.price * dt.quantum
        }
       if(this.state.code == ""){
            discount = 0
       }else {
           discount = total - ((Number(total)*this.state.discount)/100)
       }
      
       
       if(total != ""){
        if(total > 1000) {
            Ship = 0
        }else {
            Ship = 20;
        }
        grandTotal =( total - ((Number(total)*this.state.discount)/100)) + Ship;
       }
       
        return(
            
            <div className="Bag">
                    <OrderModal total={grandTotal} modal={this.state.modal} checkout={this.checkout} onClick={this.checkout} cart={this.state.cart} />
                    <div className="Cart">    
                        <h2>Bag</h2>
                        <div class="shopping-cart">

                            <div class="column-labels">
                                <label class="product-image">Image</label>
                                <label class="product-details">Product</label>
                                <label class="product-price">Price</label>
                                <label class="product-quantity">Quantity</label>
                                <label class="product-removal">Remove</label>
                                <label class="product-line-price">Total</label>
                            </div>
                           
                        {
                            
                            this.state.cart.map((item,index)=>(
                                <div>
                                    <div class="product">
                                        <div class="product-image">
                                            <img src={item.image[0]}></img>
                                    </div>
                                    <div class="product-details">
                                    <div class="product-title">{item.name}</div>
                                        <p class="product-description">{item.description}</p>
                                    </div>
                                    <div class="product-price">{item.price}</div>
                                    <div class="product-quantity">
                                        <button style={{width:"25px",height:"25px",border:"none",outline:"none"}} onClick={()=>this.getUpdate(item._id, -1,item.quantum)}><img style={{width:"10px",height:"10px"}}src={minus}></img></button>
                                        <span style={{padding:"0px 10px"}}>{item.quantum}</span>
                                        <button style={{width:"25px",height:"25px",border:"none",outline:"none"}} onClick={()=>this.getUpdate(item._id, 1 , item.quantum)}><img style={{width:"10px",height:"10px"}} src={plus}></img></button>
                                </div>
                                    <div class="product-removal">
                                        <button class="remove-product" onClick={()=>this.remove(item._id)}>
                                            <img style={{width:"20px"}} src={Cancel}></img>
                                        </button>

                                    </div>
                                    <div class="product-line-price">
                                        {item.price*item.quantum}                                     
                                    </div>
                                </div>
                                </div>
                            
                            ))
                            
                        }
                        
                        <div class="totals">
                            <div class="totals-item">   
                            <label>Subtotal</label>
                            <div class="totals-value" id="cart-subtotal">{total}</div>
                            </div>
                            <div class="totals-item">
                            <label>Tax (25%)</label>
                            <div class="totals-value" id="cart-tax">
                                {discount}
                                {/* {total - ((Number(total)*this.state.discount)/100)} */}
                            </div>
                            </div>
                            <div class="totals-item">
                            <label>Shipping </label>
                            
                            <div class="totals-value" id="cart-shipping">
                                {Ship} 
                               
                            </div>
                            </div>
                            <div class="totals-item totals-item-total">
                            <label>Grand Total</label>
                            <div class="totals-value" id="cart-total" style={{fontWeight:"700"}}>
                                {grandTotal}</div>
                            </div>
                            {/* <div class="totals-item totals-item-total">
                            <label>Grand Total + Discount</label>
                            <div class="totals-value" id="cart-total" style={{fontWeight:"700"}}>
                                {grandTotal - ((Number(grandTotal)*this.state.discount)/100)}</div>
                            </div> */}
                            <div class="totals-item totals-item-total">
                            <label>Discount Code</label>
                            <div class="discount-code" >
                                <input type="text" onChange={this.discountCode} value={this.state.code} placeholder="Discount Code..." style={{float:"right",margin:"0 -20px",border:"none",outline:"none",fontSize:"12px",fontStyle:"italic"}} 
                                
                                onKeyPress={(e)=>{
                                    if(e.key==='Enter'){
                                        axios.get('http://localhost:8080/discount?value='+this.state.code)
                                            .then(res=>{
                                                // console.log(res.data);
                                                this.setState({discount: Number(res.data)})
                                            })
                                    }
                                    // console.log(e.key);
                                }}
                                ></input>
                                </div>
                            </div>
                            
                        </div>
                        


                       
                        <button class="checkout" onClick={this.checkout}>Checkout</button>
                        

                        </div>
                        
                    </div>
                    
                    
                        
                    
            </div>
           
             
               
        )
    } 


}
export default Cart;