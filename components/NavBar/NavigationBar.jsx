'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import '@/components/NavBar/Navbar.css'



function NavigationBar() {
   
  const router = useRouter();
  return (
    <div>
    <div className='h-nav-bar'>
        <h1 className='logo-text'>Lahiru Medical Center</h1>
        <div>
           <button className='si-btn' onClick={()=>router.push('/signin')}>Sign In</button>
        </div>
    </div>
    <div className='v-nav-bar'>
        
        <div className='main-nav'>
            <Link href="/">Home</Link> 
            <Link href="/">Sign In</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
        </div>
        



    </div>

    </div>
  )
}

export default NavigationBar