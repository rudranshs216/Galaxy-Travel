import React from 'react'
import "./PriceCard.css"

function PriceCard({a,b}) {
    return (
        <div className='priceCard'>
            <h2>{a}</h2>
            <p>---</p>
            <h2>{b}</h2>
            <p>Lorem</p>
            <p>Epsum</p>
            
        </div>
    )
}

export default PriceCard
