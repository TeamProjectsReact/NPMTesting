import React, { useState } from 'react'
import { BsMortarboardFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const SignUp = () => {
     // for login data
    const [SignUpData, SetSignUpData] = useState({
        username: '',
        email: '',
        password: ''
    })

    // send data to backend using axios
    const headleSubmit = (e) => {
        e.preventDefault();

        // signup to system
        // this will be updated in future versions
    }
  return (
    <div className='app-body'>
        <div className="line">
            <div className="rec-4"></div>
            <div className="rec-4">
                <div className="form-bg">
                    <center className='' style={{ color: 'rgb(107 114 128)' }}>
                        {/* change the Icon According to your needs */}
                        <h1 className=''><BsMortarboardFill className='logo'/></h1>
                        <p className="" style={{ paddingTop: '16px', fontSize: '24px', lineHeight: '32px' }}>Welcome to</p>
                        <p className="">Your Project Name</p>
                    </center>
                    <hr className='' style={{ marginTop: '8px', marginBottom: '8px' }}/>
                    <div className="" style={{ marginTop: '16px', marginBottom: '16px' }}>
                        <form onSubmit={headleSubmit}>
                             <div className="input-area">
                                <label htmlFor="" className=''>Username : </label>
                                <input type="text" name="" id="" className="feild-input" required placeholder='Enter Username'
                                onChange={e => SetSignUpData({...SignUpData, username:e.target.value})}/>
                            </div>
                            <div className="input-area">
                                <label htmlFor="" className=''>Email : </label>
                                <input type="email" name="" id="" className="feild-input" required placeholder='Enter Email Address'
                                onChange={e => SetSignUpData({...SignUpData, email:e.target.value})}/>
                            </div>
                            <div className="input-area">
                                <label htmlFor="" className=''>Password : </label>
                                <input type="password" name="" id="" className="feild-input" required placeholder='Enter Password' 
                                onChange={e => SetSignUpData({...SignUpData, password:e.target.value})}/>
                            </div>
                            <div className="input-area">
                                <button type='submit' className='jkbtn jkbtn-blue' style={{ width: '100%', marginTop: '2rem' }}>Sign Up</button>
                            </div>
                        </form>
                    </div>
                    <hr className='' style={{ marginTop: '8px', marginBottom: '8px' }}/>
                    <p className="" style={{ marginTop: '16px', marginBottom: '16px' }}>Already have an Account ? <Link to={'/'}><span className="" style={{ color: 'rgb(59 130 246)' }}>SignIn</span></Link></p>
                </div>  
            </div>
            <div className="rec-4"></div>
        </div>
    </div>
  )
}

export default SignUp