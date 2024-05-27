import React, { useState } from 'react'
import { BsMortarboardFill } from "react-icons/bs";

// for login data
const [LoginData, SetLoginData] = useState({
    email: '',
    password: ''
})

const SignIn = () => {
  return (
    <div className='bg-gray-200 min-h-screen py-16 px-8'>
        <div className="md:grid grid-cols-3 gap-2">
            <div className=""></div>
            <div className="">
                <div className="bg-white py-16 px-8 rounded shadow-md w-full ">
                    <center className='text-gray-500'>
                        {/* change the Icon According to your needs */}
                        <h1 className=''><BsMortarboardFill className='h-20 w-auto'/></h1>
                        <p className="pt-4 text-2xl">Welcome Back</p>
                        <p className="">Your Project Name</p>
                    </center>
                    <hr className='my-2'/>
                    <div className="my-4">
                        <form action="">
                            <div className="my-2">
                                <label htmlFor="">Email : </label>
                                <input type="email" name="" id="" className="h-12 pl-2 rounded bg-gray-200" required placeholder='Enter Email Address' />
                            </div>
                        </form>
                    </div>
                </div>  
            </div>
            <div className=""></div>
        </div>
    </div>
  )
}

export default SignIn