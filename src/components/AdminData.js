import React, { useEffect, useState } from 'react'
import fireDB from "../firebase";
import AdminCompo from './AdminCompo';
import "./AdminData.css"

function AdminData() {
    const[data,setData] = useState({})
    useEffect(()=>{
        fireDB.child("userData").on("value", (snapshot)=>{
            if(snapshot){
           setData({ ...snapshot.val()});            
}
            else{
                setData({});
            }
        })
        },[])
    return (
        <div className='AdminData'>
       
        {Object.keys(data).map((id,index) => {
           return (
            <AdminCompo key={id} index={index+1} name={data[id].name} email={data[id].email} detail={data[id].detail} />
           )
        })}
            
        </div>
    )
}

export default AdminData
