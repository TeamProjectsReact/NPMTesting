import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"

const Dashboard = () => {
    const navigate = useNavigate()
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className='bg-gray-200 py-8 px-12'>
                <div className="bg-white rounded py-8 px-4">
                    <h1 className="text-gray-500 font-semibold text-2xl">Welcome to Dashboard</h1>
                    <hr />

                    <div className="my-4 mx-8">
                        <p className="text-xl text-gray-500">Email : { EmailUser }</p>
                        <p className="text-xl text-gray-500">Role: { RoleUser }</p>                        
                    </div>
                </div>
            </div>
        )
    }
    else{
        useEffect(() => {
            localStorage.clear()
            navigate('/')
        })
    }
}

export default Dashboard