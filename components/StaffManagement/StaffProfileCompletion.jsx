"use client";

import React, { useState } from 'react'
import { useSession } from 'next-auth/react';
import '@/components/StaffManagement/staffm.css'
import { useRouter } from 'next/navigation';



function StaffProfileCompletion() {
    const {data: session} = useSession();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [staffType, setStaffType] = useState("");
    const router = useRouter();
    const handleSubmit = async(event) => {

        
        event.preventDefault();
        let email = session?.user?.email;

        if (!email||!name || !address || !staffType){
            setError("All fields are necessary !");
            return;
        }

        try {
           const res = await fetch('http://localhost:3000/api/sendstaffdetails' ,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    name,
                    address,
                    staffType,
                }),
            });

            if(res.ok) {
                //const from = event.target;
                //from.reset();
                router.replace('http://localhost:3000/dashboard/staff');
            }else {
                console.log("form submition failed. ");
            }
        } catch (error) {
            console.log ("Error during submition", error);
        }

      
    };
    
  return (
  <div>
       <div className='p-4 max-w-3xl '>
        <h1 className='font-semibold text-3xl'>Complete your staff profile</h1>
        <p className='text2'> Please help us set up your profile</p><br/>
    </div>

    <form onSubmit= {handleSubmit} className='form'>
    <div className='text-3xl' >

      <label htmlFor='name'> Name : </label>
          <input 
          type="text" 
          name='name' 
          value={name}
          onChange={x=>setName(x.target.value)} /><br/> <br/>

          <label>Address:</label>
          <input
          type="text"
          name='address'
          value={address}
          onChange={x=>setAddress(x.target.value)}/>
            
      <label>Staff Type:</label>
         <input
          type="text"
          name='number'
          value={staffType}
          onChange={x=>setStaffType(x.target.value)}/> <br/> <br/>


    <button  
    type= "submit" >Submit
    </button>

     </div>

    

     </form>
      
  </div>
  )
}

export default StaffProfileCompletion