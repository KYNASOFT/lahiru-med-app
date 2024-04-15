'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import '@/components//PatientManagement/patient_m.css'
function PatientOverview() {

  const {data: session} = useSession();

  return (
    <div>
        <div className='hero-overview'>
            <h1>Hi <span className='text-4xl font-black'>{session?.user?.email}</span></h1>
            <h2>Welcome Back ! Your health is our priority</h2>
        </div>
    </div>
  )
}

export default PatientOverview