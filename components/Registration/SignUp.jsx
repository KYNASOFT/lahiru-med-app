"use client"

import React from 'react'
import Link from 'next/link'
import '@/components/Registration/signup.css'
function SignUp() {
  return (
    <div className=''>
        <div className='form-head'>
            <h1 className='main-title'>Sign Up</h1>
            <h2 className='des-title'>Connecting You to Care</h2>
        </div>
        <div className='form-body'>
            <input
                className='form-input'
                type='email'
                name='email'
                placeholder='Enter your email address'
                value={""}
                onChange={""}
            ></input>
            <input
                className='form-input'
                type='password'
                name='pass'
                placeholder='Enter a password'
                value={""}
                onChange={""}
            ></input>
            <input
                className='form-input'
                type='password'
                name='repass'
                placeholder='Retype password'
                value={""}
                onChange={""}
            ></input>
        </div>
        <div className='form-bottom'>
            <div>
                <Link className='redirect-link' href={'/signin'}>Already have an account Sign in instead</Link>
            </div>
            <div className='btn-wrapper'>
               <button className='btn-n'>Sign Up</button>
               <button className='btn-n'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default SignUp