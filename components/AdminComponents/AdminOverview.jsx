'use client'
import React from 'react'
import { useState } from 'react';
import { useSession } from 'next-auth/react'
import { getUser } from '@/lib/getUser';
import '@/components/AdminComponents/adminpage.css'
import AdminQuickAccess from './AdminQuickAccess';

function AdminOverview() {
  const{data: session} = useSession();
  const[admin,setAdmin] =useState(); 
  const[isInitiated,setIsInitiated] = useState(false);
  const initiate = async() =>{
      const ad = await getUser(session?.user?.email,'http://localhost:3000/api/userExcist');
      if(ad){
          setAdmin(ad.user);
      }
      
    else{
        return;
    }
  }
  if(!isInitiated ){
    initiate();
    setIsInitiated(true);
  }
  else if(admin == undefined){
    initiate();
  }
  

  return (
    <div className='flex gap-24 justify-evenly'>
        <div>
        <div className='overview-header'>
            <h1>Welcome {admin?.username}</h1>
            <h2>{admin?.userType}</h2>
        </div>
        <div className='overview-des'>
           <p>We're delighted to have you here as part of our dedicated team. Your commitment to providing exceptional care and service to our patients is truly commendable, and this dashboard is designed to support you every step of the way.</p>
           <p>As you navigate through our platform, you'll discover a wealth of tools and resources aimed at simplifying your daily tasks, optimizing workflows, and ultimately, enhancing patient outcomes. From managing appointments to accessing vital patient records, our dashboard is your trusted companion in delivering top-notch healthcare services.</p>
           <p>Thank you for your dedication to excellence in healthcare, and we're excited to embark on this journey together. Should you have any questions or need assistance, don't hesitate to reach out. Here's to making a meaningful difference in the lives of those we serve.</p>
           <h2>Welcome aboard! Lahiru Medical Center</h2> 
           
        </div>
        </div>
        
        <AdminQuickAccess/>
        
    </div>

  )
}

export default AdminOverview