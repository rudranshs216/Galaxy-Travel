import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Img from '../components/Img'
import Navbar from '../components/Navbar'

function Contact() {
    return (
        <div>
        <Navbar/>
        <Img header="Contact" desc="Let's Say HI"/>
        <ContactForm/>
        <Footer/>
            
        </div>
    )
}

export default Contact
