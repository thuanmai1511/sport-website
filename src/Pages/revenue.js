import React, { Component } from 'react';
import '../css/admin.css';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom' ;
import axios from 'axios';



class Revenue extends Component {


    constructor(props) {
        super(props);
        this.state = {
           order:[],
           selectedMonth:""
        }
        
        this.SelectMonth = this.SelectMonth.bind(this);
    }
    componentDidMount(){
        this.getOrder();
        
    }
    
    getOrder(){
        axios.get('http://localhost:8080/Order').then(res=>{
            this.setState({
                order: res.data
            })
            // console.log(this.state.order);
        })
    }
    SelectMonth(e){
        const value = e.target.value;
        this.setState({
            selectedMonth: value
        })
        
    }
    
    render() {
        let prArrs = []
        let {order} = this.state
        let totalPro = 0;
        let totalQua = 0;
        let totalLast = 0 ;
        let totalLast1 = 0;
        
        // Thong ke theo thang 
        order = order.filter(dt => {
            return dt.date.slice(4,7) == this.state.selectedMonth
        })
        // 
        order = order.map(dt => {
            return dt.product
        })

        for(var pr of order){
            for( var i of pr){
                prArrs.push(i)
            }
        }

        var result = []

        prArrs.reduce(function(res, value) {
            
            if (!res[value._id]) {
              res[value._id] = { 
                    id: value._id, 
                    image: value.image,
                    name: value.name,
                    price: value.price,
                    quantum: 0 ,
                    total: 0,
                    totalP: 0
                    

                };
              result.push(res[value._id])
            }
            res[value._id].quantum += value.quantum;
            res[value._id].total += value.price * value.quantum;
            
            return res;
          }, {});
        
        
        return(
            <div>
               <div className="btn-Order">
                    <button style={{background:"none",border:"1px solid #ddd",marginTop:"20px",width:"120px",height:"50px"}}><Link to = "/productManagement" style={{color:"black",textDecoration:"none"}}>Products</Link></button>
                   
                </div>
               
                
               <div className="btn-revenue">
                <button style={{background:"none",border:"1px solid #ddd",width:"120px",height:"50px"}}><Link to = "/orderManagement" style={{color:"black",textDecoration:"none"}}>Back</Link></button>
                
                <select style={{width:"20%",  height:"40px",fontSize:"18px",marginLeft:"5px"}} onChange={this.SelectMonth}>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                    <option>Apr</option>
                    <option>May</option>
                    <option>Jun</option>
                    <option>Jul</option>
                    <option>Sep</option>
                    <option>Oct</option>
                    <option>Nov</option>
                    <option>Dec</option>
                </select>
               
               </div>
              
              
                
                <h1 style={{textAlign:"center"}}>Revenue Statistics</h1>
               
                <table class="table table-hover" >
                   <thead>
                        <tr >
                            <th  scope="col">Product Code</th>
                            <th  scope="col">Product Image</th>
                            <th  scope="col">Product Name</th>
                            <th  scope="col">Prices</th>
                            <th  scope="col">Quatity</th>
                            <th  scope="col">Total</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                   
                    {
                           result.map( (pro)=>(
                            
                                <tr>
                                    
                                    <td>{pro.id}</td>
                                    <td><img src={pro.image[0]} style={{width:"60px"}}></img></td>
                                    <td>{pro.name}</td>
                                    <td>${pro.price}</td>
                                    <td>{pro.quantum}</td>
                                    <td id="total-Price">${pro.total}</td>
                                    
                                   
                                </tr> 
                        ))
                       
                    }
                      {
                           result.map( (pro)=>(
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td style={{display:"none"}}>{totalPro += pro.total}</td>
                                    <td style={{display:"none"}}>{totalQua += pro.quantum}</td>
                                    
                                   
                                </tr> 
                        ))
                       
                    }
                    
                    <p style={{fontWeight:"700"}}>Total: {totalLast1 += totalQua}</p>
                    <p style={{fontWeight:"700"}}>
                        Total revenue: ${totalLast += totalPro}</p>
                    
                    </tbody>
                </table>
               
            </div>
        )
    }
}



export default Revenue;