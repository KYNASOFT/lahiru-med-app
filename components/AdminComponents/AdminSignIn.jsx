"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import React from 'react'
import '@/components/Registration/signup.css'
import Link from 'next/link'
import { signIn, signOut } from 'next-auth/react'
import { getUser } from '@/lib/getUser'

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
        console.log("From admin sign in ", email,password);
        const userx = await getUser(email,'api/userExcist');
        console.log(userx);
        if(res.error)
        {
            setWarn("Invalid credentials");
        }
        else if(userx.user.userType === "admin")
        {
            
            router.replace('/admin/dashboard');
        }
        else{
            setWarn("Not an admin");
            signOut();
            router.replace('/admin');
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
            <h1 className='main-title'>Admin Sign In</h1>
            <h2 className='des-title'>"Authorizied Personal Only"</h2>
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
            <div className='btn-wrapper'>
               <button className='btn-n' onClick={signInHandler}>Sign In</button>
               <button className='btn-n' onClick={()=>router.push("/")}>Cancel</button>
            </div>
        </div>
        
    </div>
  )
}

export default SignIn