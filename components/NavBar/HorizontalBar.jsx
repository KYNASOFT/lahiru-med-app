'use client'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import React from 'react'
import '@/components/NavBar/nav.css'
import { useSession } from 'next-auth/react'
function HorizontalBar() {
   
  const router = useRouter();
  const {data: session} = useSession();
  let btn_type = "";
  if(session?.user != null){
     btn_type = "Sign Out";
     
  }
  else{
     btn_type = "Sign In";
  }

  const handleLog = () => {

     if(session?.user != null){
        signOut();
     }

     else{
        router.push('/signin');
     }

  }
 

  return (
    <div>
       <div className='hor-nav-bar'>
        <h1 className='logo-text'>Lahiru Medical<br/>Center</h1>
        <div className='flex gap-3'>
           <button className='si-btn' onClick={handleLog}>{btn_type}</button>
           {!session?.user &&
              <button className='si-btn' onClick={()=>router.push('/signup')}>Sign Up</button>
           }
           
          
        </div>
       </div>

    </div>
  )
}

export default HorizontalBar