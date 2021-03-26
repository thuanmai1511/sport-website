import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom' ;
import axios from 'axios';
import swal from 'sweetalert';
import Cancel from '../img/cancel.png';
import '../css/Cart.css';
import Check from '../img/checked.png';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const cookie = cookies.get('_id');

class Order extends Component {
    constructor(props){
        super(props);
        this.state = {
            order: []
        }
       
        
    }
    componentDidMount(){
        if(!cookie){
            this.props.history.push('/signin')
        }
        this.getOrder();

    }
    getOrder() {
        const idUser = cookie;
        // console.log(idUser);
        axios.get('http://localhost:8080/Order/'+ idUser).then(res=>{
            this.setState({
                order: res.data
            })
            // console.log(res.data);
        })
    }
   
    
    render(){
        return(
            <div style={{margin:"0 auto" ,margin:"30px"}}>
               <h1>Orders</h1>
               <table class="table table-hover">
                   <thead>
                        <tr >
                            <th  scope="col">Code Order</th>
                            <th  scope="col">Name</th>
                            <th  scope="col">Products</th>
                            <th  scope="col" >Date Order</th>
                            <th  scope="col">Status</th>
                            <th  scope="col">Totals</th>

                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.order.map((item)=>(
                        <tr>
                            
                            <td><strong>{item._id}</strong></td>
                            <td>{item.name}</td>
                            <td>{
                                item.product.map((pro)=>(
                                    
                                    <div>
                                       
                                        <ul style={{listStyle: "none"}}>
                                            <li style={{fontWeight:"800"}}>{pro.name}</li><br></br>
                                            <div >
                                                <ul id="View-pro"style={{listStyle: "none"}}>
                                                    
                                                    <li style={{fontSize: "12px"}}> <img style={{width:"40px"}} src={pro.image[0]}></img> <span>Price: ${pro.price}</span> , <span>Quatity: {pro.quantum}</span></li>
                                                    
                                                </ul>
                                            </div>
                                        </ul>
                                    </div>
                                )) 
                                }</td>
                            <td>{item.date.slice(0,25)}</td>
                            <td>
                                {item.status == 0 && <div><p style={{color:"orange"}}>Waiting for confirmation</p></div>}
                                {item.status == 1 && <div><p style={{color:"blue"}}>Being transported</p></div>}
                                {item.status == 2 && <div><p style={{color:"green"}}>Delivered</p></div>}
                            </td>
                            <td style={{fontWeight:"600"}}>$ {item.total}</td>
                        </tr>
                        ))
                  
                    }
                    </tbody>
                </table>
            </div>
        )
    }

}






export default Order;