import React, { Component } from 'react' ;
import '../css/Card.css';
// import imgProducts from '../img/product1.jpg';
import '../Pages/products';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import axios from 'axios';
import './Navbar/Navbar';
// import PNG from '../img/png.jpg'
// import { Link } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' ;
class Cards extends Component {
    constructor(props){ 
        super(props);
        
        
    }
   
    render() {
        // console.log(this.props.products);
        return(
            <div style={{width:"80%", margin:"0 auto"}} id="table-search">
                   
                    <h3 style={{marginLeft: "50px",marginTop:"20px",fontWeight:"500",fontStyle:"italic"}}>MEN'S FOOTBALL CLEATS - HIGH TOPS & LOW CUT</h3>
                  <Row>
                           
                {
                    this.props.products.map((product) => (
                          
                           
                            <Col sm="3">
                               
                                <Card body>
                                    
                                    <CardTitle><Link to = {"/products/id=" +product._id}><img src={product.image[0]}></img></Link></CardTitle>
                                    
                                    <strong><CardTitle>{product.name}</CardTitle></strong>
                                    <CardTitle style={{fontWeight:"700"}}>$ {product.price}</CardTitle>
                                    {/* <CardText>{product.description}</CardText> */}
                                   {/* <Button style={{backgroundColor: "#ae946d"}}>Add to cart</Button>                 */}
                                </Card>
                            
                            </Col>
                            
                           
                        
                    ))
            
                }
                  </Row>
                  
            </div>
            


            
            
        ) 
    };
}
export default Cards ;