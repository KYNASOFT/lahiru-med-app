'use client'

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import '@/components/Bookings/booking.css'





function BookingForm() {

  const [patientName,setPatientName] = useState("");
  const [patientNic,setPatientNic]=useState("");
  const [patientAddress,setPatientAddress]=useState("");
  const [patientEmail,setPatientEmail] = useState("");
  const [patientContactNum,setpatientContatNum] = useState("");
  const [patientBloodGroup,setPatientBloodGroup] = useState("");
  const [patientSymptoms,setPatientSymptoms] = useState("");

  const [unit,setUnit] = useState("");
  const [doc, setDoc] = useState("");

  const router = useRouter();  
 

  const bookingHandler = async ()=>
  {
    
     console.log(patientName,patientNic,patientAddress,patientEmail,patientContactNum,patientBloodGroup,patientSymptoms);
    //Backend integeration
  
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
                  placeholder='Patient Name'
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
                  type="description" 
                  placeholder='Patient Symptoms'
                  name='symptoms'
                  onChange={e=>setPatientSymptoms(e.target.value)}
                  value={patientSymptoms}
                  className='text-box'
                  ></input>
            </div>
            <div className='btn-wrapper'>
                <button className='normal-btn' onClick={bookingHandler}>Enter Details</button>
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
            </div>
        </div>
    </div>
  )
}

export default BookingForm