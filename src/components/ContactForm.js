import React, { useState } from 'react'
import "./ContactForm.css"

function ContactForm() {


    const [data, setData] = useState({
        name: "",
        email: "",
        detail: ""
    });
    let name,value;
    const postData = (event) => {
        console.log(event);
        name = event.target.name;
        value = event.target.value;

        setData({...data , [name]:value});

    }
    const submitData = async (event) => {
        event.preventDefault();
        const {name,email,detail} = data;
        if(name && email && detail){
        const res = await fetch("https://galaxy-travel-eb2dc-default-rtdb.firebaseio.com/userData.json",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                detail
            })
        })
        if(res){
            setData({
                name: "",
                email: "",
                detail: "" 
            })
            alert("Data Stored");
        }
       else {alert("Please Fill the Data")}
    }
    else {alert("Please Fill the Data")}

    }
    return (
        <div className="Co">
        <div>
        <form className='contactForm' method='POST'>
        <label htmlFor="name" >Name</label>
        <input type="text" name="name" value={data.name} onChange={postData}/>
        <label htmlFor="name" >Email</label>
        <input type="email" name="email" value={data.email} onChange={postData}/>
        <label htmlFor="name">Detail</label>
        <textarea name="detail" value={data.detail} onChange={postData} id="" cols="30" rows="10" placeholder='Write Your Message'></textarea>
        <div className="btn" onClick={submitData}>Send</div> 
        </form>
       
            
        </div>
        </div>
       
    )
}

export default ContactForm
