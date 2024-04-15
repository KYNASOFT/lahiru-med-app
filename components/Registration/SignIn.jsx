"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import React from 'react'
import '@/components/Registration/signup.css'
import Link from 'next/link'
import { signIn } from 'next-auth/react'


function SignIn() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [warn,setWarn] =useState("")
  
  const router = useRouter();
  const signInHandler = async() =>{

    //this function should validate user 
     console.log("this is for debug from signIn page =  email password is " + email + " " + password);  //ready
     
     if(!email)
     {
         setWarn("Enter an email address")
         return;
     }
     else if(!password)
     {
        setWarn("You must fill password to log in")
        return;
     }

     try{
        const res = await signIn("credentials",{
            email,
            password,
            redirect:false,
        })

        if(res.error)
        {
            setWarn("Invalid credentials");
        }
        else{
            router.replace('/dashboard');
        }
     }catch(error)
     {
        console.error(error);
        setWarn("Unsucessful sign in - server end");
     }
     //send this to backend api from here
    

  }

  return (
    <div className=''>
        <div className='form-head'>
            <h1 className='main-title'>Sign In</h1>
            <h2 className='des-title'>"Welcome back! Your health journey continues here. 
            Let's securely unlock the door to your medical records and personalized care"</h2>
            <h3 className='su-warn'>{warn}</h3>
        </div>

        <div className='form-body'>
            <input
                className='form-input'
                type = "email"
                name ="email"
                placeholder="Enter your email address"
                value ={email}
                onChange ={e=>setEmail(e.target.value)}>
            </input>

            <input
                className='form-input'
                type = "password"
                name ="password"
                placeholder="Enter your password"
                value ={password}
                onChange= {e=>setPassword(e.target.value)}>
            </input>
        </div>

        <div className='form-bottom'>
            <div>
                <Link className='redirect-link' href={'/signup'}>Not registered user. Sign up instead</Link>
            </div>
            <div className='btn-wrapper'>
               <button className='btn-n' onClick={signInHandler}>Sign In</button>
               <button className='btn-n' onClick={()=>router.push("/")}>Cancel</button>
            </div>
        </div>
        
    </div>
  )
}

export default SignIn