import React, { Component } from 'react';
import '../css/viewcollection.css';
import Collection1 from '../img/collection1.jpg';
import Collection2 from '../img/collection2.jpg';
import Collection5 from '../img/collection5.jpg';
import Collection4 from '../img/collection4.jpg';
class viewCollection extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className="viewCollection ">
               <table border="0">
                   <tr>
                       <td>
                           <div className="Content-view">
                            <h2 >1952 <br></br>INNOVATING FOOTBALL</h2>
                            <p>The launch of PUMA’s SUPER ATOM in 1952 creates a stir. Rudolf Dassler collaborates with experts, such as West Germany’s national coach Sepp Herberger to develop the world’s first boot with screw-in studs. For PUMA, beside a successful product launch, it marks the beginning of our football heritage.</p>
                           </div>
                       </td>
                       <td><img src={Collection4} style={{width:"100%",height:"600px",float:"right"}}></img></td>
                   </tr>
                   <tr>
                        <td><img src={Collection5} style={{width:"100%",height:"600px",float:"right"}}></img></td>
                       <td>
                           <div className="Content-view">
                            <h2 >1982 <br></br>FOOTBALL'S GOLDEN BOY</h2>
                            <p>The TORERO, an invention by company founder Rudolf Dassler's son Armin, is the first shoe equipped with a highly flexible DUOFLEX sole inspired by a straw. It has two joint zones which support the natural movement of the foot. The TORERO makes its debut at the World Cup in Spain 1982.</p>
                           </div>
                       </td>
                      
                   </tr>
                   <tr>
                       <td>
                           <div className="Content-view">
                            <h2 >1986 <br></br>SUCCESS IN STOCK</h2>
                            <p>The TORERO, an invention by company founder Rudolf Dassler's son Armin, is the first shoe equipped with a highly flexible DUOFLEX sole inspired by a straw. It has two joint zones which support the natural movement of the foot. The TORERO makes its debut at the World Cup in Spain 1982.</p>
                           </div>
                       </td>
                       <td><img src={Collection2} style={{width:"100%",height:"600px",float:"right"}}></img></td>
                   </tr>
                   <tr>
                        <td><img src={Collection1} style={{width:"100%",height:"600px",float:"right"}}></img></td>
                       <td>
                           <div className="Content-view">
                            <h2 >2016 <br></br>HATTRICK</h2>
                            <p>The UEFA Euro 2016 in France proves to be a great stage to prove why we're an innovative and design-driven sports brand. With an on-field presence of almost 40% across all matches, PUMA’s five participating partner teams secure a strong visibility with their kits featuring our ACTV Thermo-R apparel technology. To top it off, France's Antoine Griezmann was voted "Player of the Tournament" by the UEFA after being the top scorer with six goals, all shot in his bi-colored PUMA Tricks boots.</p>
                           </div>
                       </td>
                      
                   </tr>
               </table>
                
            </div>
        )
    }
}





export default viewCollection;

