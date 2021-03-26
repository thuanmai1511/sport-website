import axios from 'axios';
import React, { Component, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';

const cookies = new Cookies();
const cookie = cookies.get('email');
const cookieId = cookies.get('_id');

class OrderModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order:[],
      name: "" ,
      address: "",
      email: cookie,
      phone:"",
      note:"",
      userId: cookieId     
    };
    this.nameHandler = this.nameHandler.bind(this);
    this.addressHandler = this.addressHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
    this.phoneHandler = this.phoneHandler.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
    this.noteHandler = this.noteHandler.bind(this);
  }
 
  nameHandler(event){
    const value = event.target.value;
    this.setState({
      name: value
    })
  }
  addressHandler(event) {
    const value = event.target.value;
    this.setState({
      address: value
    })
  }
  emailHandler(event){
    const value = event.target.value;
    this.setState({
      email: value
    })
  }
  phoneHandler(event){
    const value = event.target.value;
    this.setState({
      phone: value
    })

  }
  noteHandler(event){
    const value = event.target.value;
    this.setState({
      note: value
    })
  }
  
  getdata() {
    // console.log(cookieId);
    axios.get("http://localhost:8080/Cart/" + cookieId).then(res =>{
        this.setState({
            order: res.data
        });
        // console.log(res.data);
    });
   
}
  submitOrder(event) {
    event.preventDefault();
    
    const dt = {
      name : this.state.name,
      userId : cookieId,
      address : this.state.address,
      phone : this.state.phone,
      email : cookie,
      note : this.state.note,
      order: this.props.cart,
      total: this.props.total
    }
    console.log(dt);
    axios.post("http://localhost:8080/Order", dt)
    
    swal({
      title: "Added to orders!",
      icon: "success",
      button: "OK",
      timer: 5000
    })
    window.location.href="/Order";
   
  }
  
  render(){
    // console.log(this.props.total);
    const {
      buttonLabel,
      className
    } = this.props;
  const {modal, onClick} = this.props;

    return(
      <div>
        <form>
          <Modal isOpen={modal} toggle={onClick} className={className}>
            <ModalHeader toggle={onClick}>Address</ModalHeader>
            
            <ModalBody>
            
                <label for="fname">Name:</label><br></br>
                <input type="text" placeholder="Name" value={this.state.name} onChange={this.nameHandler}></input><br></br>
                <label for="lname">Address</label><br></br>
                <input type="text" value={this.state.address} placeholder="Ex: 1 3/2 Street, Xuan Khanh, Ninh Kieu, Can Tho" onChange={this.addressHandler}></input><br></br>
                <label for="lname">Email</label><br></br>
                <input type="email"   value={this.state.email} onChange={this.emailHandler}></input><br></br>
                <label for="lname">Phone number</label><br></br>
                <input type="text" value={this.state.phone} onChange={this.phoneHandler} ></input><br></br>
                <label for="lname">Note</label><br></br>
                <textarea for="lname" value={this.state.note} onChange={this.noteHandler}></textarea>

            </ModalBody>
            
            <ModalFooter>
              <Button color="primary" onClick={this.submitOrder}>Accept</Button>
              <Button color="secondary" onClick={onClick}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </form>
        
    </div>
    )
  }
}



export default OrderModal;
