import axios from 'axios';
import React, { Component, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';

const cookies = new Cookies();
const cookie = cookies.get('email');
const cookieId = cookies.get('_id');

class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price:"",
      quantity:"",
      kind:"" ,
      description:"",
      image: []
    };
    
  }
 

  render(){
    const {
      buttonLabel,
      className
    } = this.props;
  const {modal, onClick} = this.props;
    
    return(
      <div>
        <form>
          <Modal isOpen={modal} toggle={onClick} className={className}>
            <ModalHeader toggle={onClick}>AddProducts</ModalHeader>
            
            <ModalBody>
            
                <label for="fname">Name:</label>  <br></br>
                <input type="text" onChange={(e)=>this.setState({name: e.target.value})}></input><br></br>
                <label for="fname">Image:</label>  <br></br>
                <input type="file" onChange={(e)=>this.setState({image: e.target.files[0].name})}></input><br></br>
                <label for="lname">Prices</label><br></br>
                <input type="text" onChange={(e)=>this.setState({price:e.target.value})}></input><br></br>
                <label for="lname">Quantity</label><br></br>
                <input type="text"  onChange={(e)=>this.setState({quantity:e.target.value})}></input><br></br>
                <label for="lname">Kind</label><br></br>
                <select onChange={(e)=>this.setState({kind:e.target.value})}>
                  <option >fg</option>
                  <option >tf</option>
                  <option >ic</option>
                  <option >accessories</option>
                </select><br></br>
                {/* <input type="text" onChange={(e)=>this.setState({kind:e.target.value})}></input><br></br> */}
                <label for="lname">Description</label><br></br>
                <input type="text" onChange={(e)=>this.setState({description:e.target.value})}></input><br></br>
                

            </ModalBody>
            
            <ModalFooter>
              <Button color="primary" onClick={()=>{
                    
                    const data = {
                        
                        nameAdd: this.state.name,
                        imageAdd: 'http://localhost:8080/image/'+ this.state.image,
                        priceAdd: this.state.price,
                        quantityAdd: this.state.quantity,
                        kindAdd: this.state.kind,
                        descriptionAdd: this.state.description
                    }
                    
                    axios.post("http://localhost:8080/data",data).then(res=>{
                      swal({
                        title: "Success!",
                        text: "You clicked the button!",
                        icon: "success",
                        button: "OK",
                      })
                        onClick();
                        window.location.reload(true);
                    })


              }}>Accept</Button>
              <Button color="secondary" onClick={onClick}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </form>
        
    </div>
    )
  }
}



export default EditModal;
