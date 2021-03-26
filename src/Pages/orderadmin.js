import React, { Component } from 'react';
import '../css/admin.css';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom' ;
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import Cancel from '../img/cancel.png';


class Orderadmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [],
            values: '',
            dataOri: []
        }
        // this.Status = this.Status.bind(this);
    }
    componentDidMount(){
        this.getData();
    }
    getData() {
        axios.get("http://localhost:8080/viewOrder").then(res => {
            this.setState({
                order: res.data,
                dataOri: res.data
            })
            // console.log(res.data);
        })
    }
    remove(id) {
        const data = {
            id : id 
        }
    axios.post("http://localhost:8080/deleteOrder", data).then(()=>{
        this.getData();
    })
    }
    
    Status(id,e){
        // console.log(e.target.value);
       this.setState({
           values: Number(e.target.value)
       })
       
       const data = {
           id : id,
           status : e.target.value
       }
       axios.post("http://localhost:8080/updateStatus", data)
       
    }
    SearchFilter(e) {
        
        let q = e.target.value.toLowerCase();
        let productFilter = this.state.dataOri.filter(dt => {
            return dt.name.toLowerCase().indexOf(q) != -1
        })
        this.setState({
            order : productFilter
        })
    }
    render() {
        // console.log(this.state.order);
        return(
            <div>
                <div className="btn-Order">
                    <button style={{background:"none",border:"1px solid #ddd",marginTop:"20px",width:"120px",height:"50px"}}><Link to = "/productManagement" style={{color:"black",textDecoration:"none"}}>Back</Link></button>
                   
                </div>
               
                
               <div className="btn-revenue">
                <button style={{background:"none",border:"1px solid #ddd",width:"120px",height:"50px"}}><Link to = "/revenueStatistics" style={{color:"black",textDecoration:"none"}}>Revenue statistics</Link></button>
                <input type="text" placeholder="Searching..." onChange={(e)=>this.SearchFilter(e)} style={{width:"20%",  height:"40px",fontSize:"18px",marginLeft:"5px"}}></input>
               
               </div>
                
               <h1 style={{textAlign:"center", marginTop:"50px"}}>ORDER MANAGEMENT</h1>
               <table class="table table-hover">
                   <thead>
                        <tr >
                            <th  scope="col">Order Code</th>
                            <th  scope="col">Customer Name</th>
                            <th  scope="col">Product</th>
                            <th  scope="col">Total Prices</th>
                            <th  scope="col">Address</th>
                            <th  scope="col" >Status</th>
                            <th  scope="col" >Del</th>

                        </tr>
                    </thead>
                    <tbody>
                       {
                           this.state.order.map( (item)=>(
                            <tr>
                            
                                <td><strong>{item._id}</strong></td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {
                                        item.product.map((i)=>(
                                            <div>{i.name}</div>
                                        ))
                                    }
                                </td>
                                
                                <td>$ {item.total}</td>
                                <td>{item.address}</td>
                                <td>
                               
                                    <select  onChange={(e)=>this.Status(item._id, e)}>
                                        
                                        <option value ="0" selected={(item.status == 0) ? true : false}>Waiting for confirmation</option>
                                        <option value="1" selected={(item.status == 1) ? true : false}>Being transported</option>
                                        <option value="2" selected={(item.status == 2) ? true : false}>Delivered</option> 
                                       
                                    </select>
                                    
                                </td>
                                <td>
                                    <button onClick={()=>this.remove(item._id)} style={{border:"none", background:"none"}}>
                                        <img style={{width:"20px"}} src={Cancel}></img>
                                    </button>
                                </td>
                        </tr>
                           ))
                       }
                        
                         
                       
                     
                    </tbody>
                </table>
            </div>
        )
    }
}   

export default Orderadmin;