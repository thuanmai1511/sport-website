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
      image:"",
      quantity:"",
      kind:"" 
    };
    
  }
 
  render(){
    const {
      buttonLabel,
      className
    } = this.props;
  const {modal, onClick,item} = this.props;
    console.log(item);
    return(
      <div>
        <form>
          <Modal isOpen={modal} toggle={onClick} className={className}>
            <ModalHeader toggle={onClick}>EditProducts</ModalHeader>
            
            <ModalBody>
            
                <label for="fname">Name:</label>  <br></br>
                <input type="text" placeholder="Name" defaultValue={item?item.name: ""} onChange={(e)=>this.setState({name: e.target.value})}></input><br></br>
                <label for="lname">Images</label><br></br>
                <input type="file" placeholder="Name" onChange={(e)=>this.setState({image: e.target.files[0].name})}></input><br></br>
                <label for="lname">Prices</label><br></br>
                <input type="text" defaultValue={item?item.price: ""} onChange={(e)=>this.setState({price:e.target.value})}></input><br></br>
                <label for="lname">Quantity</label><br></br>
                <input type="text"  defaultValue={item?item.quantity: ""}  onChange={(e)=>this.setState({quantity:e.target.value})}></input><br></br>
                <label for="lname">Kind</label><br></br>
                <select onChange={(e)=>this.setState({kind:e.target.value})}>
                  <option defaultValue={item?item.kind: ""}>fg</option>
                  <option defaultValue={item?item.kind: ""}>tf</option>
                  <option defaultValue={item?item.kind: ""}>ic</option>
                  <option defaultValue={item?item.kind: ""}>accessories</option>
                </select>
                {/* <input type="text" defaultValue={item?item.kind: ""} onChange={(e)=>this.setState({kind:e.target.value})}></input><br></br> */}
                

            </ModalBody>
            
            <ModalFooter>
              <Button color="primary" onClick={()=>{
                    // console.log(item._id);
                    // console.log(this.state.name);
                    // console.log(this.state.price);
                    // console.log(this.state.kind);
                    // console.log(this.state.quantity);
                    const data = {
                        id: item._id,
                        nameEdit: this.state.name,
                        imageEdit: 'http://localhost:8080/image/' + this.state.image,
                        priceEdit: this.state.price,
                        quantityEdit: this.state.quantity,
                        kindEdit: this.state.kind
                    }
                    
                    axios.post("http://localhost:8080/data/id=",data).then(res=>{
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
