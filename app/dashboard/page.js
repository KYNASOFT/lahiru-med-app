'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import PatientOverview from '@/components/PatientManagement/PatientOverview'
import PatientProfileCompletion from '@/components/PatientManagement/PatientProfileCompletion'
import React from 'react'
import { getUser } from '@/lib/getUser'
import QuickSetUpDoc from '@/components/DoctorManagement/QuickSetUpDoc'
import SpecialitySelection from '@/components/DoctorManagement/SpecialitySelection'
import DoctorProfile from '@/components/DoctorManagement/DoctorProfile'



function page() {

  const {data:session} = useSession();
  const [userType,setUserType] = useState();

  const[isInitiated,setIsInitiated] = useState(false);
  const initiate = async() =>{
      const res = await getUser(session?.user?.email,'http://localhost:3000/api/userExcist');  
      if(res){
          setUserType(res?.user?.userType);
      }
      
    else{
        return;
    }
  }
  if(!isInitiated ){
    initiate();
    setIsInitiated(true);
  }
  else if(userType == undefined){
    initiate();
  }


  return (
    <div>
      {userType=="doctor" &&
      <div className='flex'>
        <div>
           <QuickSetUpDoc/>
           <SpecialitySelection/>
        </div>
        <div>
            <DoctorProfile/>
        </div>
      </div> 
      } 
      {userType == "pat" &&
        <div>
        <PatientOverview/>
        <PatientProfileCompletion/>
        </div>}
    </div>
  )
}

export default page