import React, { Component } from 'react';
import './carousel';
import '../css/home.css';
import Carousel from './carousel';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' ;



class Home extends Component {
    render() {
        return (
            <div className="Carousel">
                
                {/* <Carousel/> */}
                {/* <br></br>
                <br></br> */}
                 <div className="session4">
        <div className="session4-one">
          <div className="content-session4">
            <div className="child session4-content">
              <div className="session4-background session4-background-one" />
              <div className="box-content-session4">
                <div className="session4-container">
                  <div className="session4-text">
                    <h1>TURBOCHARGED</h1>
                    <h5>INTRODUCING THE TURBO PACK</h5>
                    <button className="btn-home"><Link to="/products" style={{textDecoration:"none",color:"black"}}>SHOP FUTURE</Link></button>
                  </div>
                  <div className="content-button session4-button">
                    <div className="background-button">
                      {/* <p>Get Started FREE</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="session4-two">
          <div className="session4-two-content session4-two-left">
            <div className="content-session4">
              <div className="child session4-content">
                <div className="session4-background session4-background-two" />
                <div className="box-content-session4">
                  <div className="session4-container">
                    <div className="session4-text">
                      <h1>FLASH FORWARD</h1>
                      <h5>INTRODUCING ULTRA SPEED OF LIGHT</h5>
                      <button className="btn-home"><Link to="/products" style={{textDecoration:"none",color:"black"}}>SHOP ULTRA</Link></button>
                    </div>
                    <div className="content-button session4-button">
                      <div className="background-button">
                        {/* <p>Get Started FREE</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="session4-two-content session4-two-right">
            <div className="content-session4">
              <div className="child session4-content">
                <div className="session4-background session4-background-three" />
                <div className="box-content-session4">
                  <div className="session4-container">
                    <div className="session4-text">
                      <h1>THE KING IS BACK</h1>
                      <h5>Kickstart your Journey as 3D Artist</h5>
                      <button className="btn-home"><Link to="/products" style={{textDecoration:"none",color:"black"}}>SHOP NOW</Link></button>
                    </div>
                    <div className="content-button session4-button">
                      <div className="background-button">
                        {/* <p>Get Started FREE</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
            
         )
        
    }
}
export default Home;