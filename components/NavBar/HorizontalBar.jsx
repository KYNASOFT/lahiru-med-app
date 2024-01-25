'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import '@/components/NavBar/nav.css'

function HorizontalBar() {
   
  const router = useRouter();
  return (
    <div>
       <div className='hor-nav-bar'>
        <h1 className='logo-text'>Lahiru Medical<br/>Center</h1>
        <div className='flex gap-3'>
           <button className='si-btn' onClick={()=>router.push('/signin')}>Sign In</button>
           <button className='si-btn' onClick={()=>router.push('/signup')}>Sign Up</button>
        </div>
       </div>

    </div>
  )
}

export default HorizontalBar