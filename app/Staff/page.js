import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        {/*main*/}
        <div className=''>
            {/*view Staff details button*/}
            <Link href='Staff/StaffList'>
                <button className='border border-grey-400 rounded-lg font-medium px-3 py-1.5 mx-2'>
                    View Staff member list
                </button>
            </Link>
            {/*Add staff details button*/}
            <Link href='Staff/staffAdd'>
                <button className='border border-grey-400 rounded-lg font-medium px-3 py-1.5 mx-2'>
                    Add Staff member 
                </button>
            </Link>

        </div>
        Home
    </div>
  )
}

export default Home