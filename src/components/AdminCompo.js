import React from 'react'
import "./AdminCompo.css"

function AdminCompo({index,name,email,detail}) {
    return (<>
        <div className='admin_compo'>
        <div className="index"><h1>{index}</h1></div>
        <div className="name"><h1>{name}</h1></div>
        <div className="email"><p>{email}</p></div>
        <div className="detail"><p>{detail}</p></div>
            
        </div>
        </>
    )
}

export default AdminCompo
