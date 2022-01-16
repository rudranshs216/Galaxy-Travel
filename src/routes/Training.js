import React from 'react'
import Footer from '../components/Footer'
import Img from '../components/Img'
import Navbar from '../components/Navbar'
import TrainingInfo from '../components/TrainingInfo'

function Training() {
    return (
        <div>
            <Navbar/>
            <Img header="Training" desc= "Courses to help you achieve your goals"/>
            <TrainingInfo />
            <Footer/>
        </div>
    )
}

export default Training
