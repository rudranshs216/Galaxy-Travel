import React from 'react'
import "./Footer.css"
import {FaFacebook, FaLinkedin, FaMailBulk,FaPhone,FaTwitter,FaSearchLocation} from "react-icons/fa";

function Footer() {
    return (
        <div className='Footer'>
        <div className="Footer_Container">
            <div className="left">
                <div className="location">
                    <FaSearchLocation size={20} style={{color: "#ffffff" , marginRight: "2rem"}} />
                    <div>
                        <p>123 Acme St.</p>
                        <h4>Houston, Tx</h4>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color: "#ffffff" , marginRight: "2rem"}}/>1-800-234-5689</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color: "#ffffff" , marginRight: "2rem"}}/>abc@def.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae dolorum unde aliquam facere reprehenderit. Velit ipsum perspiciatis quisquam saepe rem provident laudantium nemo nihil hic temporibus facilis</p>
                <div className="social">
                    <FaFacebook size={30} style={{color: "#ffffff" , marginRight: "1rem"}}/>
                    <FaTwitter size={30} style={{color: "#ffffff" , marginRight: "1rem"}}/>
                    <FaLinkedin size={30} style={{color: "#ffffff" , marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default Footer
