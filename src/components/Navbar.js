import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from "react-icons/fa"

function Navbar() {
    const[click,setClick] = useState(false);
    
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);
 
    return (
        <div className={colorChange ? 'nav_div colorChange' : 'nav_div'}>
        <Link to="/"><h1>Galaxy Travel</h1></Link>
        
        <ul className={click ? "active" : ""}>
        <Link to="/"> <li>Home</li></Link>
        <Link to="/pricing"> <li>Pricing</li></Link>
        <Link to="/training"><li>Training</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        <Link to="/admin"><li>Admin</li></Link>
        </ul>

        <div className="hamburger" onClick={()=>{setClick(!click)}}>
           {click ? (<FaTimes size={20} style={{color: "#fff"}} />):(<FaBars size={20} style={{color: "#fff"}} />)} 
        </div>
            
        </div>
    )
};


export default Navbar;
