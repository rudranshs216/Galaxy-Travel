import React from 'react'
import "./Video.css"
import {Link} from "react-router-dom";

import spaceVideo from "../assets/space.mp4"

function Video() {
    return (
        <div className='hero'>
            <video autoPlay loop  muted id='video'>
                <source src={spaceVideo}/>
            </video>
            <div className="material">
            <div className="content">
                <h1>Galaxy. Travel</h1>
                <p>World's first Civilian Space-Travel</p>
            </div>
            <div className='button'>
                <Link to="/training" className='btn'>Training</Link>
                <Link to="/contact" className='btn btn-light'>Launch</Link>
            </div>
            </div>

            
        </div>
    )
}

export default Video;