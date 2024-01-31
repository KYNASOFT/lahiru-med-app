'use client'

import React from 'react'
import { useState } from 'react'
import '@/components/Bookings/booking.css'
import { useRouter } from 'next/router'




function booking() {

  const [patientName,setPatientName] = useState("");
  const [patientNic,setPatientNic]=useState("");
  const [patientAddress,setPatientAddress]=useState("");
  const [patientEmail,setPatientEmail] = useState("");
  const [patientContactNum,setpatientContatNum] = useState("");
  const [patientBloodGroup,setPatientBloodGroup] = useState("");
  const [patientSymptoms,setPatientSymptoms] = useState("");

  const router = useRouter();

  const bookingHandler = async ()=>
  {
    console.log(patientName,patientNic,patientAddress,patientEmail,patientContactNum,patientBloodGroup,patientSymptoms);
    //Backend integeration
  }

  return (
    <div>
        <div>
           <div>
                <h1>Patient Details</h1>
            </div>
            <div className='formbookingpatient-body'>
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
                  type="text" 
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
                  type="text" 
                  placeholder='Patient Symptoms'
                  name='symptoms'
                  onChange={e=>setPatientSymptoms(e.target.value)}
                  value={patientSymptoms}
                  ></input>
            </div>
            <div>
                <button className='border rounded p-2 w-20' onClick={e=>bookingHandler}>Enter Details</button>
                <button className='border rounded p-2 w-20'onClick={()=>router.push('/')}>Cancel</button>
            </div>
        </div>

        <div>
            <div>
                <h1>Doctor Details</h1>
            </div>

            <div>
              
            </div>
        </div>
    </div>
  )
}

export default booking