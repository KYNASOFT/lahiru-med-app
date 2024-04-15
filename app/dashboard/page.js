import PatientOverview from '@/components/PatientManagement/PatientOverview'
import PatientProfileCompletion from '@/components/PatientManagement/PatientProfileCompletion'
import React from 'react'

function page() {
  return (
    <div>
        <PatientOverview/>
        <PatientProfileCompletion/>
    </div>
  )
}

export default page