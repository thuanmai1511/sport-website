import React, { Component } from 'react';
import RadioProducts from '../components/RadioProducts';
import CardProduct from '../components/CardProduct';
import Pagination from '../components/pagination';
import axios from 'axios';

class AllProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
            
           
        };
        
        
    }
   
    componentDidMount() {
        this.getData();
        
    }

    getData() { // lay products xu ly trong csdl theo type
        
        
        axios.get("http://localhost:8080/data" ).then(res =>{
        
            const products = res.data
            let page = 1 ;

            let newProducts = [];
            
            if(this.props.match.params.page) {
                page = Number(this.props.match.params.page);
            }

            const limit = 8;
            const start = (page - 1) * limit ;
            const end = (page * limit) - 1;
            const length = products.length-1;
       
            for(let i=start ; i<=end && i<=length ; i++) {
                newProducts.push(products[i]);
            }

            this.setState({
                products: newProducts
            })
        //    console.log(res.data);
        });
    }
    
    
    render() {
  
        let {products} = this.state

        return (
            <div className="Products" >
                {/* <h1 style={{marginLeft: "50px",marginTop:"20px"}}>ALL PRODUCTS</h1> */}
                {/* <div ><img style={{width:"100%"}}src={PNG}></img></div> */}
                {/* <RadioProducts  /> */}
               <CardProduct products = {products}   />
                <Pagination page={this.props.match.params.page}/>
              
               
         
                
            </div>
        )
    }
}
export default AllProducts;