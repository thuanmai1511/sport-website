import React, {Component} from 'react';
import '../../css/Navbar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom' ;
import background from '../../img/background.png';
import midBackground from '../../img/mid.jpg';
import Logo from '../../img/logo.png';
import Cookies from 'universal-cookie';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import SvgIcon from '@material-ui/icons/DescriptionOutlined';
import PersonIcon from '@material-ui/icons/Person';
import Icon from '@material-ui/icons/Person';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import Icons  from '@material-ui/icons/LocalMallOutlined';

const cookies = new Cookies();
const cookie = cookies.get('email')




class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            cookies : false
        }
        this.logOut = this.logOut.bind(this);
        this.Search = this.Search.bind(this);
        
        // this.Avt = this.Avt.bind(this);
    }   

    componentDidMount(){
        if(cookies){
            this.setState({
                cookies : true
            })
        }
    }
    logOut(){
        cookies.remove('email', {path: '/'});
        cookies.remove('_id', {path: '/'});
        window.location.reload(true);
    }
    Search(){
    
        let products = document.getElementById("table-search").children[1].children;
        let inputSearch = document.getElementById("search").value.toLowerCase();

        if(inputSearch != ""){
            for(var i of products){ // chay tung thang trong sanpham
                
                if(i.children[0].children[1].children[0].innerText.toLowerCase().search(inputSearch) == -1){
                    i.style.display = "none";
                }else{
                    i.style.display = "";
                }
            }
        }else{
            for(var i of products){
                i.style.display = "";
            }
        }
        
    }
    
    render() {
        
        const { cookies } = this.state;
        let comp ;
        let compp ;
        if(!cookie) {
            comp = <Link to="/signin"><li> <Icon style={{color:"white"}}  Component={PersonIcon}/> </li></Link>
        } else {
            
            comp =  <li><p onClick={this.logOut} title="Logout here" style={{color:"#fff", cursor:"pointer"}}>{cookie}</p></li>
            
        }
        if(!cookie) {

        }  else {
            compp = <Link to="/Order"><li><SvgIcon  style={{color:"white"}} Component={DescriptionOutlinedIcon}/></li></Link> 
        }

        return(
            <div className="header">
                 <div className="top-header">
                    <p>COURIER SERVICES ARE OPERATING ABOVE PEAK AND HOLIDAY VOLUME. YOU MAY EXPERIENCE LONGER THAN EXPECTED DELIVERY TIMES.</p>
                </div>
                <nav className="NavbarItem">
                    <div className="name-Sport">
                        
                        <Link to="/"><img src={Logo}></img></Link>
                    </div>
                    
                    <div className="nav-menu">
                        <ul className="menu-title">
                            <li><Link to ="/">Home</Link></li>
                            <li><Link to="/Products">Product</Link>
                                <ul className="drop-down" >
                                    <li><Link to={"/products/type=fg" }>FG(FirmG)</Link></li>
                                    <li><Link to={"/products/type=tf" }>TF(Turf)</Link></li>
                                    <li><Link to={"/products/type=ic" }>IC(Indoor)</Link></li>
                                    <li><Link to={"/products/type=accessories" }>Gloves</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/viewCollection">Collection</Link></li>
                            <li><Link to="#">Outlet</Link></li>
                            <li><Link to="#">Gift Guide</Link></li>
                          

                        </ul>
                       
                    </div>
                    
                    
                    <div className="search">
                        <form method="POST" >
                            <input type="search" name="search-box" id= "search" onKeyUp={this.Search} placeholder="    Searching..." ></input>
                            <button type="submit" class="btn-search" style ={{display: "none"}} ><i class="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    
                    
                    
                    
                    
                    <div className="nav-icon">
                        <ul>    
                            {compp}
                            <Link to="/Cart"><li><Icons  style={{color:"white"}}  Component={LocalMallOutlinedIcon}/></li></Link>
                            {comp}
                           
                            
                        </ul>
                    </div>
                </nav>
                
                <div className="mid-header">
                        <div className="span1">
                            <span>FLASH SALE</span>
                        </div>
                        <div className="span2">
                            <span>25% OFF SITEWIDE</span>
                        </div>
                        <div className="span3">
                            <span>USE CODE: FLASH25</span>
                        </div>
                    
                        
                </div>
               
            </div>
               
            
            
        );   
    }
}


export default Navbar ;

