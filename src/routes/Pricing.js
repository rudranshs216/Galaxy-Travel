import React from 'react'
import Footer from '../components/Footer'
import Img from '../components/Img'
import Navbar from '../components/Navbar'
import PriceCard from '../components/PriceCard'
import "./Pricing.css"

function Pricing() {
    return (
        <div>
        <Navbar/>
        <Img header="Pricing" desc="Choose a Plan" img="../assets/heroImg.jpg"/>
        
        <div className="Cards"> 
        <PriceCard a="Basic" b="1 BTC"/>
        <PriceCard a="Medium" b="2 BTC"/>
        <PriceCard a="Premium" b="3 BTC"/>
        </div>
       
        <Footer/>
            
        </div>
    )
}

export default Pricing
