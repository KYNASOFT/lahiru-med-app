"use client"

import { useState } from 'react'
import React from 'react'
import Link from 'next/link'
import '@/components/Registration/signup.css'


const signErors ={
    passmiss:"The retyped password does not match the provided password. Please ensure both passwords are identical to proceed",
    emailInvalid: "Please provide a valid email address",
    emailExcist: "User already created sign in instead",
    none:""
}

//reg expression to match a valid email 
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

function SignUp() {

  //using use state to get inputs
  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const [repass,setRepass] = useState("");
  const [warning,setWarning] = useState("");
 
  let validEmail;
  let validPass;

  const signUpHandler=async () =>
  {
     
    //   console.log(email,pass,repass);
      if(emailPattern.test(email))
      {
        validEmail =true;
        
      }
      else
      {
        validEmail = false;
        setWarning(signErors.emailInvalid);
      }
      
      if(pass === repass)
      {
        validPass = true;

      }
      else
      {
        validPass = false;
        setWarning(signErors.passmiss);
      }

      if(validEmail && validPass)
      {
          try{
            //here call userExcist api to get if user already registered
            const resUserExcist = await fetch('api/userExcist',
              {method:"POST",
               headers:{
                "Content-Type":"application/json"
               },
               body: JSON.stringify({
                email
               })
              }

            )
            if(resUserExcist.ok)
            {
               const {user} = await resUserExcist.json();

               if(user)
               {
                  console.log("User already excist");
                  setWarning(signErors.emailExcist);
                  return;
               }
            }
            else{
              console.error("Sign in Api Error");
            }



            const res = await fetch('api/users',
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                email,repass
              })
            }
            
            )
            if(res.ok)
            {
               console.log("Sent data to the api form sign up")
            }
            else
            {
               console.log("not sending the data from sign up")
            }
          }
          catch(error)
          {
              console.log("Error from sign up - " + error)
          }
          


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