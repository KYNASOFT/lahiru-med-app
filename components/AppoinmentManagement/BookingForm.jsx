'use client'

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import '@/components/AppoinmentManagement/booking.css'

function BookingForm() {

  const [patientName,setPatientName] = useState("");
  const [patientNic,setPatientNic]=useState("");
  const [patientAddress,setPatientAddress]=useState("");
  const [patientEmail,setPatientEmail] = useState("");
  const [patientContactNum,setpatientContatNum] = useState("");
  const [patientBloodGroup,setPatientBloodGroup] = useState("");
  const [patientSymptoms,setPatientSymptoms] = useState("");
  const [date,setDate] = useState("");
  
  const [unit,setUnit] = useState("");
  const [doc, setDoc] = useState("");
  const{data:session} = useSession("");
  const router = useRouter();  

  const getUserDetails =async()=>{
     const email = session?.user?.email;
     try{
      const resUserExcist = await fetch('../api/userExcist',
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
          fillForm(user);
          return user;
       }
    }
    else{
      return null;
    }
    }catch(error){
        console.error(error);
        return null;
    }
  }

  function fillForm(user){
      setPatientName(user.username);
      setPatientAddress(user.address);
      setPatientBloodGroup(user.bloodtype);
      setPatientEmail(user.email);
      setPatientNic(user.nic);
      setpatientContatNum(user.telephone);
  }


  
  const bookingHandler = async ()=>
  {
    
     try{
      const aptRes = await fetch('../api/bookappoinment',{
        method:"POST",headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email:patientEmail,
          name:patientName,
          symptoms:patientSymptoms,
          //fill this later to send every details
        })
      })
      if(aptRes.ok){
        console.log("appoinment created success");
      }
      else{
        console.log("unsuccess appoinment");
      }

     }catch(error){
      console.error(error);
     }
  
  }

  return (
    <div className='booking-wrapper'>
        <div className='patient-wrapper'>
           <div>
                <h1 className='main-title'>Patient Details</h1>
            </div>
            <div className='form-group'>
            <input
                  type="text" 
                  placeholder="Enter your name"
                  name='name'
                  onChange={e=>setPatientName(e.target.value)}
                  value={patientName}

                  ></input>

                <input
                  type="text" 
                  placeholder='Patient Nic'
                  name='nic'
                  onChange={e=>setPatientNic(e.target.value)}
                  value={patientNic}
                  ></input>

                <input
                  type="text" 
                  placeholder='Patient Address'
                  name='address'
                  onChange={e=>setPatientAddress(e.target.value)}
                  value={patientAddress}
                  ></input>

                <input
                  type="email" 
                  placeholder='Patient Email'
                  name='email'
                  onChange={e=>setPatientEmail(e.target.value)}
                  value={patientEmail}
                  ></input>
                
                <input
                  type='text' 
                  placeholder='Patient Contact Number'
                  name='contactnum'
                  onChange={e=>setpatientContatNum(e.target.value)}
                  value={patientContactNum}
                  ></input>

                <input
                  type="text" 
                  placeholder='Patient Blood Group'
                  name='bloodgroup'
                  onChange={e=>setPatientBloodGroup(e.target.value)}
                  value={patientBloodGroup}
                  ></input>

                <input
                  type="text-area" 
                  placeholder='Patient Symptoms'
                  name='symptoms'
                  onChange={e=>setPatientSymptoms(e.target.value)}
                  value={patientSymptoms}
                  className='text-box'
                  ></input>
            </div>
            <div className='btn-wrapper'>
                <button className='normal-btn' onClick={getUserDetails}>Auto Fill</button>
                <button className='normal-btn' onClick={bookingHandler}>Submit</button>
                <button className='normal-btn'onClick={()=>router.push('/')}>Cancel</button>
            </div>
        </div>

        <div className='doctor-wrapper'>
            <div>
                <h1 className='main-title'>Doctor Details</h1>
            </div>

            <div className='form-group'>
                <input
                  type="text"
                  placeholder='Unit that you are looking for'
                  name='unit'
                  onChange={e=>setUnit(e.target.value)}
                  value={unit}
                  ></input>

                <input
                  type="text"
                  placeholder='Name of the Doctor you are looking for'
                  name='doctor'
                  onChange={e=>setDoc(e.target.value)}
                  value={doc}
                  ></input>
                <input
                  type="date"
                  value={date}
                  onChange={e=>setDate(e.target.value)}
                ></input>  
            </div>
        </div>
    </div>
  )
}

export default BookingForm