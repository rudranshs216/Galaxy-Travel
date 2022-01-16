import React from 'react'
import { Link } from 'react-router-dom';
import moon from "../assets/moon.jpg";
import pod from "../assets/pod.jpg";
import "./TrainingInfo.css"

function TrainingInfo() {
    return (
        <div className='trainingInfo'>
           <div className="left">
               <h1>
                   Training Course
               </h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum adipisci laboriosam quam illo nulla est quisquam, sint eos, odio dignissimos doloribus obcaecati accusantium? Voluptas, itaque!</p>
               <div className="btn"><Link to="/contact">Contact Us</Link></div> 
           </div>
           <div className="right">
           <div className="img">
           <img className='img1' src={moon} alt="" />
           <img className='img2' src={pod} alt="" />
           </div>
           

           </div>
            
        </div>
    )
}

export default TrainingInfo
