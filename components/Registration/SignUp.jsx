"use client"

import React from 'react'
import Link from 'next/link'
import '@/components/Registration/signup.css'
function SignUp() {
  return (
    <div className=''>
        <div>
            <h1 className='main-title'>Sign Up</h1>
            <h2 className='des-title'>Connecting You to Care</h2>
        </div>
        <div className='form-body'>
            <input
                type='email'
                name='email'
                placeholder='Enter your email address'
                value={""}
                onChange={""}
            ></input>
            <input
                type='password'
                name='pass'
                placeholder='Enter a password'
                value={""}
                onChange={""}
            ></input>
            <input
                type='password'
                name='repass'
                placeholder='Retype password'
                value={""}
                onChange={""}
            ></input>
        </div>
        <div>
            <Link href={'/signin'}>Already have an account Sign in instead</Link>
            <button>Sign Up</button>
            <button>Cancel</button>
        </div>
    </div>
  )
}

export default SignUp