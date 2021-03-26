import React, { Component } from 'react';
import '../css/login.css';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom' ;
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
import facebook from '../img/facebook.png';
import google from '../img/google.png';
import twitter from '../img/twitter.png';
import bcrypt from 'bcryptjs';
import FacebookLogin from '../components/FacebookLogin';
const cookies = new Cookies();
 
let userErr = true;
// let passwordErr = true;
let usernameErr = true;
let passwordErr = true;
let emailErr = true;
let phoneErr = true;

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            phone: ""
        }
        
       
        this.Login = this.Login.bind(this);
        this.btnLogin = this.btnLogin.bind(this);
        this.btnSign = this.btnSign.bind(this);
        this.Register = this.Register.bind(this);
        this.usernameHanndler = this.usernameHanndler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.phoneHandler = this.phoneHandler.bind(this);
    }
    Login(e) {
        
        e.preventDefault();
        
        let resquest = {
            email: document.getElementById("emailInput").value,
            password: document.getElementById("pswInput").value
        }
       
        
        
        if(resquest.email.length == 0) {
            document.getElementById("errUsername").innerHTML="Please fill out this field.";
            userErr = true;
        }else {
            userErr = false;
        }

        if(resquest.password.length == 0) {
            document.getElementById("errPassword").innerHTML="Please fill out this field.";
            passwordErr = true;
        }else {
            passwordErr = false;
        }
        axios.post('http://localhost:8080/login', resquest)
        .then( resp => {
            console.log(resp.data);
            if (resp.data.valid){
                cookies.set('email', resp.data.email, { path: '/' });
                cookies.set('_id', resp.data.id, { path: '/' });
            swal({
                title: "Success!",
                text: "You clicked the button!",
                icon: "success",
                button: "OK",
              })
              .then(() => {
                window.location.href = "http://localhost:3000";
              });
            }else {
                // console.log("hihi");
                swal({
                    title: "Error!",
                    text: "You clicked the button!",
                    icon: "error",
                    button: "OK",
                  })
            }
            
           
        })
        .catch (err => {
            console.log(err);
        })
    }
    usernameHanndler(){ 

    
        let username = document.getElementById("username").value;
        
        if(username.length == 0){
            document.getElementById("errUsername").innerHTML = "Username is not valid";
            document.getElementById("errUsername").style.color = "red";
            usernameErr = true;
        }else {
            usernameErr = false;
        }
        // console.log(username.length)   
        this.setState({
            username : username
        })
    }
    
    emailHandler(){
        let email = document.getElementById("email").value
        if(email.length == 0){
            document.getElementById("errEmail").innerHTML = "Email is not null";
            document.getElementById("errEmail").style.color = "red";
            emailErr = true;
        }else {
            emailErr = false;
        }
        this.setState({
            email : email
        })
    }
    passwordHandler(){
        let password = document.getElementById("passwd").value;
        if(password.length <8 || password.length > 20) {
        console.log(password.length);

            document.getElementById("errPassword").innerHTML="Wrong password";
            document.getElementById("errPassword").style.color = "red";
            
            passwordErr = true;
        
        }else if(password.length == 0) {
            document.getElementById("errPassword").innerHTML="Password is not null";
            document.getElementById("errPassword").style.color = "red";
            passwordErr = true;
        }else {
            passwordErr = false;
        }
        this.setState({
            password: password
        })
    }
    phoneHandler(){
        let phone = document.getElementById("phone").value;
        if(phone.length == 0) {
            document.getElementById("errPhone").innerHTML = "Phone is not null";
            document.getElementById("errPhone").style.color = "red";
            phoneErr = true;
        }else {
            phoneErr = false;
        }
        this.setState({
            phone: phone
        })
       
    }
    Register (e){
        e.preventDefault();
        
        const data = {
            username: this.state.username,
            email: this.state.email,
            password:this.state.password,
            phone: this.state.phone
        }
        
        if (usernameErr == false && emailErr == false && phoneErr == false && passwordErr == false) {
            
            axios.post('http://localhost:8080/signup',data)
            swal({
                title: "Success!",
                // text: "You clicked the button!",
                icon: "success",
                button: "OK",
              })
              .then(() => {
                window.location.href = "http://localhost:3000/signin";
              });
        } else {
            swal({
                title: "Error!",
                // text: "Input ",
                icon: "error",
                button: "OK",
              })

        }
   
    }
    
    btnLogin() {
        
        document.getElementById("register-form").style.left = "-450px";
        document.getElementById("login-form").style.left = "20px";
        document.getElementById("btn").style.left = "0";
        document.getElementById("login-form").style.display = "block";
        document.getElementById("register-form").style.display = "none";   
    }
    btnSign(){
        document.getElementById("login-form").style.left = "0";
        document.getElementById("register-form").style.left = "20px";   
        document.getElementById("btn").style.left = "200px"; 
        document.getElementById("login-form").style.display = "none";
        document.getElementById("register-form").style.display = "block";   
        
    }       
    render() {
        
        return (
            <div className="all-login">
               
                
                <div className="Login-Sign">
                    <span><p>Login or Sign up for a PUMA Account to create a Wishlist.</p></span>
                </div>

                <div className="Login-box">
                    
                    <div className="btn-all">
                    
                        <div id="btn"></div>
                        <button className="change-login" onClick={this.btnLogin}>Login</button>
                        <button className="change-login" onClick={this.btnSign}>Sign up</button>
                    </div>
                    <div className="logo-login">

                        <FacebookLogin />
                        <button><img src={google}></img></button>
                        <button><img src={twitter}></img></button>
                    </div>
                    <form onSubmit= {this.Login} id="login-form" className="login-form">
                        
                        <div className="textbox">
                            
                            {/* <i class="fa fa-user" aria-hidden="true"></i> */}
                            <input type="email" placeholder="Email*" id="emailInput"/>
                        </div>
                        {/* <p id="errUsername"  style = {{color:"red",fontSize: "14px"}}></p> */}
                        <div className="textbox">
                            {/* <i class="fa fa-lock" aria-hidden="true"></i> */}
                            <input type="password" placeholder="Password*" id="pswInput" />
                        </div>
                        {/* <p id="errPassword"  style = {{color:"red",fontSize: "14px"}}></p> */}
                        <div>
                            <input type="checkbox" className="checkbox"></input><span>Remember me</span>
                        </div><br></br>
                        <div className="LoginwithFacebook" style={{border: "none", outline: "none", background: "none", float:"left"}}>
                            
                        </div>
                        <div>
                            <button type="submit" className="btn-login" >LOGIN</button>
                            <Link to="/signup" style={{color:"black",fontWeight:"500", fontStyle:"oblique",marginLeft:"20px"}}> Are you account?</Link>
                        </div>
                        
                        
                        
                    </form>

                    <form onSubmit={this.Register} id="register-form" className="login-form">
                        
                        <div className="textbox">
                            {/* <i class="fa fa-lock" aria-hidden="true"></i> */}
                            
                            <input type="text" placeholder="Username*" id="username"  onChange={this.usernameHanndler}/>
                            
                        </div>
                        <p id="errUsername" style = {{color:"red",fontSize: "14px"}}></p>
                    
                        <div className="textbox">
                            {/* <i class="fa fa-lock" aria-hidden="true"></i> */}
                            <input type="email" placeholder="Email*" id="email" onChange={this.emailHandler}/>
                        </div>
                        <p id="errEmail" style = {{color:"red",fontSize: "14px"}}></p>
                        <div className="textbox">
                            {/* <i class="fa fa-lock" aria-hidden="true"></i> */}
                            <input type="password" placeholder="Password*" id="passwd" onChange={this.passwordHandler}/>
                            
                        </div>
                        <p id="errPassword" style = {{color:"red",fontSize: "14px"}}></p>
                        <div className="textbox">
                            {/* <i class="fa fa-lock" aria-hidden="true"></i> */}
                            <input type="text" placeholder="Phone*" id="phone" onChange={this.phoneHandler}/>
                        
                        </div>
                        <p id="errPhone" style = {{color:"red",fontSize: "14px"}}></p>
                        <button className="btn-login" type="submit">SIGN UP</button>
                        

                    </form>
                

                
                </div>
            </div>
           
            
        )
    }
}
export default Login;

