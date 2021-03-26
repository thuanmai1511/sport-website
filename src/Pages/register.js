// import React, { Component } from 'react';
// // import '../css/signin.css';
// import Background from '../img/backgroundlg.jpg';
// import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom' ;
// import axios from 'axios';
// import swal from 'sweetalert';


// let usernameErr = true;
// let passwordErr = true;
// let emailErr = true;
// let phoneErr = true;


// class register extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             username: "",
//             email: "",
//             password: "",
//             phone: ""
//         }
//         this.Register = this.Register.bind(this);
//         this.usernameHanndler = this.usernameHanndler.bind(this);
//         this.emailHandler = this.emailHandler.bind(this);
//         this.passwordHandler = this.passwordHandler.bind(this);
//         this.phoneHandler = this.phoneHandler.bind(this);
//     }
    
//     usernameHanndler(){ 

    
//         let username = document.getElementById("username").value;
        
//         if(username.length == 0){
//             document.getElementById("errUsername").innerHTML = "Username is not valid";
//             // document.getElementById("errUsername").style.color = "red";
//             usernameErr = true;
//         }else {
//             usernameErr = false;
//         }
//         // console.log(username.length)   
//         this.setState({
//             username : username
//         })
//     }
    
//     emailHandler(){
//         let email = document.getElementById("email").value
//         if(email.length == 0){
//             document.getElementById("errEmail").innerHTML = "Email is not null";
//             document.getElementById("errEmail").style.color = "red";
//             emailErr = true;
//         }else {
//             emailErr = false;
//         }
//         this.setState({
//             email : email
//         })
//     }
//     passwordHandler(){
//         let password = document.getElementById("passwd").value;

//         if(password.length <8 || password.length > 20) {
//             document.getElementById("errPassword").innerHTML="Wrong password";
//             document.getElementById("errPassword").style.color = "red";
            
//             passwordErr = true;
        
//         }else if(password.length == 0) {
//             document.getElementById("errPassword").innerHTML="Password is not null";
//             document.getElementById("errPassword").style.color = "red";
//             passwordErr = true;
//         }else {
//             passwordErr = false;
//         }
//         this.setState({
//             password: password
//         })
//     }
//     phoneHandler(){
//         let phone = document.getElementById("phone").value;
//         if(phone.length == 0) {
//             document.getElementById("errPhone").innerHTML = "Phone is not null";
//             document.getElementById("errPhone").style.color = "red";
//             phoneErr = true;
//         }else {
//             phoneErr = false;
//         }
//         this.setState({
//             phone: phone
//         })
       
//     }
//     Register (e){
//         e.preventDefault();

//         const data = {
//             username: this.state.username,
//             email: this.state.email,
//             password: this.state.password,
//             phone: this.state.phone
//         }

//         if (usernameErr == false && emailErr == false && phoneErr == false && passwordErr == false) {
            
//             axios.post('http://localhost:8080/signup',data)
//             swal({
//                 title: "Success!",
//                 // text: "You clicked the button!",
//                 icon: "success",
//                 button: "OK",
//               })
//               .then(() => {
//                 window.location.href = "http://localhost:3000/signin";
//               });
//         } else {
//             swal({
//                 title: "Error!",
//                 // text: "Input ",
//                 icon: "error",
//                 button: "OK",
//               })

//         }
   
//     }
    
//     render() {
        
//         return (
            
//             <div className="all-login">
//                 <img src={Background}></img>
//                 <div className="Login-box">
                
//                 <h1>Sign up</h1>
                
//                 <form onSubmit={this.Register} id="register-form">
//                     <div className="textbox">
//                         <i class="fa fa-lock" aria-hidden="true"></i>
//                         <input type="text" placeholder="username" id="username"  onChange={this.usernameHanndler}/>
                        
//                     </div>
//                     <p id="errUsername" style = {{color:"red",fontSize: "14px"}}></p>
                  
//                     <div className="textbox">
//                         <i class="fa fa-lock" aria-hidden="true"></i>
//                         <input type="email" placeholder="email" id="email" onChange={this.emailHandler}/>
//                     </div>
//                     <p id="errEmail" style = {{color:"red",fontSize: "14px"}}></p>
//                     <div className="textbox">
//                         <i class="fa fa-lock" aria-hidden="true"></i>
//                         <input type="password" placeholder="password" id="passwd" onChange={this.passwordHandler}/>
                        
//                     </div>
//                     <p id="errPassword" style = {{color:"red",fontSize: "14px"}}></p>
//                     <div className="textbox">
//                         <i class="fa fa-lock" aria-hidden="true"></i>
//                         <input type="text" placeholder="phone" id="phone" onChange={this.phoneHandler}/>
                      
//                     </div>
//                     <p id="errPhone" style = {{color:"red",fontSize: "14px"}}></p>
//                     <button className="btn-login" type="submit">Sign up</button>
                    

//                 </form>
               

                
//             </div>
//             </div>
            
//         )
//     }
// }
// export default register;
