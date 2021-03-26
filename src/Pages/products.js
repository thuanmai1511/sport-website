import React, { Component } from 'react';
import RadioProducts from '../components/RadioProducts';
import CardProduct from '../components/CardProduct';
// import '../models/product.model';
import axios from 'axios';
import equal from 'fast-deep-equal';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            type: this.props.match.params.type
           
        };
        
        
    }
    // Next-props
    componentDidUpdate(Prevprops) { 
        if(!equal(this.props.match.params.type, Prevprops.match.params.type)){
            this.getData();
        }
    }
    componentDidMount() {
        this.getData();
        
    }

    getData() { // lay products xu ly trong csdl theo type
        const { type }  = this.props.match.params;
        
        axios.get("http://localhost:8080/data/type="+ type ).then(res =>{
            this.setState({
                products: res.data,
            });
        //    console.log(res.data);
        });
    }
    
    
    render() {
     
        return (
            <div className="Products" >
            
          
                {/* <RadioProducts  /> */}
               <CardProduct products = {this.state.products}   />
               
               
            </div>
        )
    }
}
export default Products;