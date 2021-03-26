import axios from 'axios';
import React, {Component} from 'react';
import FacebookLoginBtn from 'react-facebook-login/dist/facebook-login-render-props';
import facebook from '../img/facebook.png';
import Cookies from 'universal-cookie';
import swal from 'sweetalert';
const cookies = new Cookies();
export default class LoginFacebook extends Component {
    state = {
        auth: false,
        name:"",
        picture:""
    }
    componentClicked = () => {
        console.log("Facebook btn clicked");
    } 
    responseFacebook = (response) => {
        // console.log(response);
        cookies.set('email', response.email, { path: '/' });
        cookies.set('_id', response.id, { path: '/' });
        swal({
            title: "Success!",
            text: "You clicked the button!",
            icon: "success",
            button: "OK",
          })
          .then(() => {
            window.location.href = "http://localhost:3000";
          });
        this.setState({
            auth: true,
            name: response.name,
            picture: response.picture.data.url
        
        })
       
    }  
   
    render(){
        let facebookdata;
        this.state.auth ?
            facebookdata =(
                <div>
                    <img src={this.state.picture} alt={this.state.name}></img>
                    <h2>Hello {this.state.name}</h2>
                </div>
            ) : 
            facebookdata = (
            <FacebookLoginBtn
                    appId="381646883125174"
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} 
                    render={renderProps => (
                        <button onClick={renderProps.onClick}><img src={facebook}></img></button>
                    )}
            />
                    
            );
        return(
            <>
                {facebookdata}
            </>
        );
    }
}