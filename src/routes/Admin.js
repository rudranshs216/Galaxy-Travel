import React from 'react'
import AdminData from '../components/AdminData';
import Footer from '../components/Footer';
import Img from '../components/Img';
import Navbar from '../components/Navbar';



function Admin() {
   
    return (
        <div>
        <Navbar />
        <Img header="Contact List"/>
        <AdminData/>
        <Footer/>
            
        </div>
    )
}

export default Admin
