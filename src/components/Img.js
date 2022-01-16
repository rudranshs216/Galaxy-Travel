import React from 'react'
import "./Img.css"

function Img({header,desc}) {
    return (
        <div className='Img'>
       <div className="heading">
       <h1>{header}</h1>
        <p>{desc}</p>
       </div>
        
            
        </div>
    )
}

export default Img
