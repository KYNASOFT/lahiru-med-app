"use client"

import { useState } from 'react'
import React from 'react'
import Link from 'next/link'
import '@/components/Registration/signup.css'


const signErors ={
    passmiss:"Retype password did not match",
    emailInvalid: "Invalid email check again",
    emailExcist: "User already created sign in instead"
}



function SignUp() {

  //using use state to get inputs
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const [repass,setRepass] = useState("");
  const [warning,setWarning] = useState("");
 

  const signUpHandler=async () =>
  {
      console.log(email,pass,repass);
      
      if(pass === repass)
      {
        console.log("Password match");
      }
      else
      {
        console.warn("password not match")
        setWarning(signErors.passmiss);
      }
  }

  return (
    <div className=''>
        <div className='form-head'>
            <h1 className='main-title'>Sign Up</h1>
            <h2 className='des-title'>Connecting You to Care</h2>
            <h2 className='su-warn'>{warning}</h2>
        </div>
        <div className='form-body'>
            <input
                className='form-input'
                type='email'
                name='email'
                placeholder='Enter your email address'
                value={email}
                onChange={e=>setEmail(e.target.value)}
            ></input>
            <input
                className='form-input'
                type='password'
                name='pass'
                placeholder='Enter a password'
                value={pass}
                onChange={e=>setPass(e.target.value)}
            ></input>
            <input
                className='form-input'
                type='password'
                name='repass'
                placeholder='Retype password'
                value={repass}
                onChange={e=>setRepass(e.target.value)}
            ></input>
        </div>
        <div className='form-bottom'>
            <div>
                <Link className='redirect-link' href={'/signin'}>Already have an account Sign in instead</Link>
            </div>
            <div className='btn-wrapper'>
               <button className='btn-n' onClick={signUpHandler}>Sign Up</button>
               <button className='btn-n'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default SignUp