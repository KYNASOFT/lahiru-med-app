import React from 'react'
import Link from 'next/link'

function VerticalBar() {
  return (
    <div>
        <div className='main-nav'>
            <Link href="/">Home</Link> 
            <Link href="/appoinments">Appoinments</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
        </div>
    </div>
  )
}

export default VerticalBar