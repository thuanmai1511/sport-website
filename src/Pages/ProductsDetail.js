import React, { Component } from 'react';
// import RadioProducts from '../components/RadioProducts';
// import CardProduct from '../components/CardProduct';
// import '../models/product.model';
import axios from 'axios';
// import equal from 'fast-deep-equal';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import '../css/productDetail.css' ;
import Shipping from '../img/ship.png';
// import { ThemeProvider } from '@material-ui/core';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import Heart from '../img/heart.png';
// import ReactDOM from 'react-dom';
import ReactImageZoom from 'react-image-zoom';
// import ReactImageMagnify from 'react-image-magnify';

let n =0;


const cookies = new Cookies();
const cookie = cookies.get('_id');
// console.log(cookie);



class ProductsDetail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            product: [],
            id: this.props.match.params.id,
            size: "",
            quantum: 1,
            idUser: cookie
            
            
        }
        
        
        this.Ship = this.Ship.bind(this);
        this.Quantum = this.Quantum.bind(this);
        this.Size = this.Size.bind(this);
        this.addTocart=this.addTocart.bind(this);
        
    }

    componentDidMount(){
        this.getId();
        

    }
   
    getId() {
        const { id }  = this.props.match.params;
           
        axios.get("http://localhost:8080/data/id="+ id ).then(res =>{
            this.setState({
                product: res.data,
                
            });
            // console.log(res.data);
        });
       
    }
    Ship(){
       
        if(n%2 == 0 ){
            document.getElementById("DetailsShippping").style.display = "block";
        }else {
            document.getElementById("DetailsShippping").style.display = "none";
        }
        n++; 
    }
    Quantum(e){
        // let quantum = 1;
        e.preventDefault();
        this.setState({
            quantum: Number(e.target.value)
        });
        
    }
    Size(e){
        let size = 0;
        e.preventDefault();
        this.setState ({
            size: Number(e.target.value)
        })
      
    }
    addTocart(e) {
        e.preventDefault();
        
        
            const data = {
                id: this.state.id,
                size: this.state.size,
                quantum: this.state.quantum,
                idUser: this.state.idUser,
 
            }
            // console.log(data)
            axios.post("http://localhost:8080/addToCart",data)
            swal({
            title: "Added to cart!",
            icon: "success",
            button: "OK",
          })

        }
       
    
    
    handleTab = index=>{
        this.setState({
            index:index
        })
    }
   
    render() {
      
        {
            this.state.product.map((i)=>(
                <div>
                    {
                        (i.kind) == 'accessories' && <div>Nothing</div>

                    }
                </div>
            ))
        }
        return (
           
            <div className="ProductsDetail">
            
            {
                   
                    this.state.product.map((product) => (
                        
                       <div className= "small-containner single-products">
                           <div className="row">
                                <div className="imgProduct">
                                    
                                    <ReactImageZoom {...{width: 800, zoomWidth: 500, img: product.image[this.state.index]}} />
                                    

                                </div>
                                
                               
                               <div className="DetailProduct">

                                    <p>Product / {product.kind}</p>
                                    <h1>{product.name}</h1>
                                    <h4>{product.price}$</h4>

                                    <div className="owl-carousel">
                                        {
                                            product.image.map((img,index)=>(
                                                <img src={img}  key={index} onClick={()=>this.handleTab(index)}></img>
                                            ))
                                        }
                                    </div>
                                    
                                <form >
                                    {(product.kind) == 'accessories' && <div style={{fontWeight:"700"}}>Free Size</div>}
                                    {(product.kind) == 'fg'  &&  
                                    <div className="size"><strong>Select size:</strong> <br></br><br></br>
                                       
                                        <button className="btn-size" value="8" onClick= {this.Size}>8</button>
                                        <button className="btn-size" value="8.5" onClick= {this.Size}>8.5</button>
                                        <button className="btn-size" value="9" onClick= {this.Size}>9</button>
                                        <button className="btn-size" value="9.5" onClick= {this.Size}>9.5</button>
                                        <button className="btn-size" value="10" onClick= {this.Size}>10</button>
                                        <button className="btn-size" value="10.5" onClick= {this.Size}>10.5</button>
                                        <button className="btn-size" value="11" onClick= {this.Size} >11</button>
                                        <button className="btn-size" value="11.5" onClick= {this.Size}>11.5</button>
                                        <button className="btn-size" value="12" onClick= {this.Size}>12</button>
                                    </div>}
                                    {(product.kind) == 'tf'  &&  
                                    <div className="size"><strong>Select size:</strong> <br></br><br></br>
                                       
                                        <button className="btn-size" value="8" onClick= {this.Size}>8</button>
                                        <button className="btn-size" value="8.5" onClick= {this.Size}>8.5</button>
                                        <button className="btn-size" value="9" onClick= {this.Size}>9</button>
                                        <button className="btn-size" value="9.5" onClick= {this.Size}>9.5</button>
                                        <button className="btn-size" value="10" onClick= {this.Size}>10</button>
                                        <button className="btn-size" value="10.5" onClick= {this.Size}>10.5</button>
                                        <button className="btn-size" value="11" onClick= {this.Size} >11</button>
                                        <button className="btn-size" value="11.5" onClick= {this.Size}>11.5</button>
                                        <button className="btn-size" value="12" onClick= {this.Size}>12</button>
                                    </div>}
                                    {(product.kind) == 'ic'  &&  
                                    <div className="size"><strong>Select size:</strong> <br></br><br></br>
                                       
                                        <button className="btn-size" value="8" onClick= {this.Size}>8</button>
                                        <button className="btn-size" value="8.5" onClick= {this.Size}>8.5</button>
                                        <button className="btn-size" value="9" onClick= {this.Size}>9</button>
                                        <button className="btn-size" value="9.5" onClick= {this.Size}>9.5</button>
                                        <button className="btn-size" value="10" onClick= {this.Size}>10</button>
                                        <button className="btn-size" value="10.5" onClick= {this.Size}>10.5</button>
                                        <button className="btn-size" value="11" onClick= {this.Size} >11</button>
                                        <button className="btn-size" value="11.5" onClick= {this.Size}>11.5</button>
                                        <button className="btn-size" value="12" onClick= {this.Size}>12</button>
                                    </div>}
                                   
                                    
                                        <div className="btn-sel" style = {{width:"500px",marginTop:"50px"}}>
                                            <div className="op-add">
                                                <select className="amount" onChange={this.Quantum} >
                                                    <option value="1" >1</option>
                                                    <option value="2" >2</option>
                                                    <option value="3" >3</option>
                                                    <option value="4" >4</option>
                                                    <option value="5" >5</option>
                                                
                                                </select> 
                                                <input className = "addtocart" type="submit" value="Add to cart" onClick={this.addTocart}></input>
                                                <button className="btn-like" id="btn-like" onClick={this.Like}><img src={Heart} style={{width:"25px"}}></img></button>
                                            </div>   
                                            <div className="shipping" >
                                                <img src= {Shipping} style= {{width: "30px",}}></img>
                                                <span onClick= {this.Ship} style={{marginLeft:"15px"}}>This item ships free *</span>
                                            
                                            </div>
                                            <div className="DetailsShippping" id="DetailsShippping">
                                                    <strong><span> Free Standard shipping on orders $1000+</span></strong>
                                                    
                                                    <p style={{fontSize:"14px"}}>All shop orders from $ 1000 will be free shipping. In contrast, suburban orders will have a shipping cost of $ 20 and a shipping within a city will cost $ 10.</p>
                                            </div>
                                            <div className="description">
                                                <strong><span style={{fontSize:"20px"}}> Description</span></strong>
                                                
                                                <p style={{fontStyle:"oblique",padding:"10px 0px"}}>{product.description}</p>
                                            </div>

                                                
                                        </div>
                                        
                                    </form>
                                </div>
                           </div>
                       </div>
                       
                    ))
            
            }
              
                
            </div>
        )
    }
}
export default ProductsDetail;