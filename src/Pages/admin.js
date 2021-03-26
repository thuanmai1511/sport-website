import React, { Component } from 'react';
import '../css/admin.css';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom' ;
import axios from 'axios';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
const cookies = new Cookies();
class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            userAdmin:"",
            pswAdmin:""
            
        }
        this.loginAdmin = this.loginAdmin.bind(this);
        
    }
   
    loginAdmin(e){
        e.preventDefault();
        let data1 = {
            admin: document.getElementById("adminInput").value,
            password: document.getElementById("pswadmin").value
        }
        axios.post("http://localhost:8080/loginAdmin", data1).then((res)=>{
        if(res.data.valid){
            cookies.set('admin_id', res.data.id, { path: '/' });
            swal({
                title: "Success!",
                text: "You clicked the button!",
                icon: "success",
                button: "OK",
              })
              .then(() => {
                window.location.href = "http://localhost:3000/productManagement";
              });
            }else {
                swal({
                    title: "Error!",
                    text: "You clicked the button!",
                    icon: "error",
                    button: "OK",
                  })
            }
        })
        
    }
    render() {
        return(
            <div className="Login-admin">
                
                <div className="Wel-admin">
                
                <h1 >WELCOME TO ADMIN</h1>
                
               
                <form onSubmit={this.loginAdmin}>
                    
                    <div className="text">
                        
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input type="text"  id="adminInput"/>
                    </div>
                    
                    <div className="text">
                        <i class="fa fa-lock" aria-hidden="true"></i>
                        <input type="password"  id="pswadmin" />
                    </div>
                   
                    <button type="submit" className="btn-admin" >Login</button>
                   
                    
                    
                </form>
                

                
            </div>
            </div>
        )
    }
}





export default Admin;

