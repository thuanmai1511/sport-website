import React, { Component } from 'react';
import '../css/admin.css';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom' ;
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import Cancel from '../img/cancel.png';
import plus from '../img/plus.png';
import pen from '../img/pen.png';
import ModalEdit from '../components/Modaledit';
import ModalAdd from '../components/ModalAdd';


class Management extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [],
            search : "",
            dataOri: [],
            modal: false,
            modals: false,
            item: null
        }
        this.getData = this.getData.bind(this);
        
    }
    componentDidMount(){
        this.getData();
    }
    getData(){
        axios.get("http://localhost:8080/data").then(res=>{
            this.setState({
                data: res.data,
                dataOri: res.data
            })
            console.log(res.data);
        })
    }
    remove(id) {
        // console.log(id);
        const data = {
            id : id
        }
        axios.post("http://localhost:8080/deleteProduct" , data).then(res=>{
            this.getData();
        })
    }
    
    SearchFilter(e) {
        // let products = this.state.data;
        let q = e.target.value.toLowerCase();
        let productFilter = this.state.dataOri.filter(dt => {
            return dt.name.toLowerCase().indexOf(q) != -1
        })
        this.setState({
            data : productFilter
        })
    }
    addProduct(){
        
        this.setState({
            modal : !this.state.modal
        })
    }
    
    editProduct(item){
        // console.log(item);
        this.setState({
            modals : !this.state.modal,
            item : item
        })
    }
    render() {
        
        return(
            <div>
                {/* <ModalAdmin  modal={this.state.modal} onClick={this.checkout}  /> */}
                <ModalEdit  modal={this.state.modals}  item={this.state.item} onClick={()=>{
                   this.setState({
                    modals : false,
                    // id : id
                   })
                }}/>
                 <ModalAdd  modal={this.state.modal}  onClick={()=>{
                   this.setState({
                    modal : false,
                    
                   })
                }}/>
                <div className="btn-Order">
                    <button style={{background:"none",border:"1px solid #ddd",marginTop:"20px",width:"120px",height:"50px"}}><Link to = "/orderManagement" style={{color:"black",textDecoration:"none"}}>Go to Orders</Link></button>
                   
                </div>
                
               <div className="btn-revenue">
                <button style={{background:"none",border:"1px solid #ddd",width:"120px",height:"50px"}}><Link to = "/revenueStatistics" style={{color:"black",textDecoration:"none"}}>Revenue statistics</Link></button>
                <input type="text" placeholder="Searching..." onChange={(e)=>this.SearchFilter(e)} style={{width:"20%",  height:"40px",fontSize:"18px",marginLeft:"5px"}}></input>
               
               </div>
              
              
                
                <h1 style={{textAlign:"center"}}>Product Management</h1>
               
                <table class="table table-hover" >
                   <thead>
                        <tr >
                            <th  scope="col">Product Code</th>
                            <th  scope="col">Product Image</th>
                            <th  scope="col">Product Name</th>
                            <th  scope="col">Prices</th>
                            <th  scope="col">Quatity</th>
                            <th  scope="col">Kind</th>
                            <th  scope="col">Del</th>
                            <th  scope="col">Edit</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                   
                        {
                            this.state.data.map((item)=>(
                        <tr>
                            
                            <td><strong>{item._id}</strong></td>
                            <td>
                                <img src={item.image[0]} style={{width:"50px"}}></img>
                            </td>
                            <td>{item.name}</td>
                            <td>$ {item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.kind}</td>
                            <td>
                            <button onClick={()=>this.remove(item._id)} style={{border:"none", background:"none"}}>
                                <img style={{width:"20px"}} src={Cancel}></img>
                            </button>
                            </td>
                            <td>
                                <button style={{width:"25px",height:"25px",border:"none",outline:"none",background:"none"}} onClick={()=>this.editProduct(item)}>
                                    <img style={{width:"20px",height:"20px"}} src={pen}></img>
                                </button>
                            </td>
                            
                        </tr>
                            ))
                        }
                        <button style={{width:"25px",height:"25px",border:"none",outline:"none",background:"none"}} onClick={()=>this.addProduct()}>
                            <img style={{width:"20px",height:"20px"}} src={plus}></img>
                        </button>
                     
                    </tbody>
                </table>
            </div>
        )
    }
}



export default Management;