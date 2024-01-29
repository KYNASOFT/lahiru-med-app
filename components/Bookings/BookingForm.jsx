'use client'

import React from 'react'
import { useState } from 'react'


function booking() {

  const [patientName,setPatientName] = useState("");
  const [patientNic,setPatientNic]=useState("");
  const [patientAddress,setPatientAddress]=useState("");
  const [patientEmail,setPatientEmail] = useState("");
  const [patientContactNum,setpatientContatNum] = useState("");
  const [patientBloodGroup,setPatientBloodGroup] = useState("");
  const [patientSymptoms,setPatientSymptoms] = useState("");

  return (
    <div>
        <div>
           <div>
                <h1>Patient Details</h1>
            </div>
            <div>
            <input
                  type="text" 
                  placeholder='Patient Name (AutoFill)'
                  name='name'
                  onChange={setPatientName}
                  ></input>

                <input
                  type="text" 
                  placeholder='Patient Nic (AutoFill)'
                  name='nic'
                  onChange={setPatientNic}
                  ></input>

                <input
                  type="text" 
                  placeholder='Patient Address (AutoFill)'
                  name='address'
                  onChange={setPatientAddress}
                  ></input>

                <input
                  type="text" 
                  placeholder='Patient Email (AutoFill)'
                  name='email'
                  onChange={setPatientEmail}
                  ></input>
                
                <input
                  type='number' 
                  placeholder='Patient Contact Number (AutoFill)'
                  name='contactnum'
                  onChange={setpatientContatNum}
                  ></input>

                <input
                  type="text" 
                  placeholder='Patient Blood Group (AutoFill)'
                  name='bloodgroup'
                  onChange={setPatientBloodGroup}
                  ></input>

                <input
                  type="text" 
                  placeholder='Patient Symptoms'
                  name='symptoms'
                  onChange={setPatientSymptoms}
                  ></input>
            </div>
            <div>
                <button className='border rounded p-2 w-20'>Enter Details</button>
            </div>
        </div>

        <div>
            <div>
                <h1>Doctor Details</h1>
            </div>
        </div>
    </div>
  )
}

export default booking