'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import '@/components/AdminComponents/adminpage.css';


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
  const [successmsg,setSuccessmsg] =useState("");
  const [showcopy,setShowcopy] = useState(false);
  const router = useRouter();
 
  let validEmail;
  let validPass;
  const copySys = () =>
  {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');

    // Set the text content to be copied
     textarea.value = "Email = "+email+" Password = " + repass;

    // Make sure the textarea is not visible on the screen
    textarea.style.position = 'fixed';
    textarea.style.top = 0;
    textarea.style.left = 0;
    textarea.style.width = '1px';
    textarea.style.height = '1px';
    textarea.style.opacity = 0;

    // Append the textarea to the DOM
    document.body.appendChild(textarea);

    // Select the text inside the textarea
    textarea.select();

    try {
    // Execute the copy command
    const successful = document.execCommand('copy');
    if (successful) {
      console.log('Text copied to clipboard');
      alert("Copied");
    } else {
      console.error('Unable to copy text to clipboard');
      alert("Unable to copy");
    }
    } catch (error) {
      console.error('Unable to copy text to clipboard:', error);
    }

    // Remove the textarea from the DOM
    document.body.removeChild(textarea);
  }

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
            const resUserExcist = await fetch('http://localhost:3000/api/userExcist',
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



            const res = await fetch('http://localhost:3000/api/adminregister',
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
               setSuccessmsg("Added the account successfully");
               setShowcopy(true);
               console.log("Sent data to the api form sign up");
            }
            else
            {
               console.log("not sending the data from sign up");
            }
          }
          catch(error)
          {
              console.log("Error from sign up - " + error);
          }
          


      }
      
  }

  const refresh=()=>
  {
      window.location.reload();
  }

  return (
    <div className='my-20'>
        <div className='form-head'>
            <h1 className='main-title'>Create an Admin</h1>
            <h2 className='des-title'>This will provide admin privilage to another person</h2>
            <h2 className='su-warn'>{warning}</h2>
            <h2 className='su-success'>{successmsg}</h2>
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
            <div className='btn-wrapper'>
               <button className='btn-n' onClick={signUpHandler}>Create</button>
               <button className='btn-n' onClick={refresh}>Cancel</button>
               {showcopy && 
                 <button className='btn-n' onClick={copySys}>Copy</button>
               }
            </div>
        </div>
    </div>
  )
}

export default SignUp