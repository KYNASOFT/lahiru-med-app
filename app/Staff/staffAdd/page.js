"use client" // use client For Client Component

import Link from 'next/link';
import React, { useState } from 'react';

const staffAdd = () => {
    



    const [Staff, setStaff] = useState({
        name: "",
        email: "",
        address: "",
        salary: ""
    });

    // Create Add Staff Detail Function 
    const addStaffDetail = async () => {
        const res = await fetch(`${({}).NEXT_PUBLIC_API_BASE_URL}/api/Staff`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name: Staff.name,
                email: Staff.email,
                address: Staff.address,
                salary: Staff.salary
            })
        })

        // Create Data 
        const data = await res.json();

        // Destructure Data 
        const { message, error } = data;

        // Condition 
        if (error) {
            alert(error) // Error Message
        } else {
            alert(message) // Success Message
            setStaff({
                name: "",
                email: "",
                address: "",
                salary: ""
            })
        }
    }

    return (
        <div className=' container mx-auto flex justify-center items-center h-screen'>
            {/* Main  */}
            <div className="form border shadow-md border-gray-400 rounded-xl py-6 px-9  ">
                {/* Top  */}
                <div className="top">
                    {/* Top-Child  */}
                    <div className="flex gap-[40px] mb-5 items-center">
                        {/* Link  */}
                        <Link href='/'>
                            {/* Svg Icon  */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </Link>
                        {/* Text  */}
                        <h1 className='text-2xl font-semibold'>
                        </h1>
                    </div>
                </div>
                {/* Bottom  */}
                <div className="bottom">
                    {/* Staff Name Input  */}
                    <div className="">
                        <input
                            type="text"
                            name='StaffName'
                            placeholder='Enter name'
                            value={Staff.name}
                            onChange={(e) => setStaff({
                                ...Staff,
                                name: e.target.value
                            })}
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
                        />
                    </div>
                    {/* Staff Email Input  */}
                    <div className="">
                        <input
                            type="email"
                            name='StaffEmail'
                            placeholder='Enter email'
                            value={Staff.email}
                            onChange={(e) => setStaff({
                                ...Staff,
                                email: e.target.value
                            })}
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
                        />
                    </div>
                    {/* Staff Address Input  */}
                    <div className="">
                        <input
                            type="text"
                            name='StaffAddress'
                            placeholder='Enter address'
                            value={Staff.address}
                            onChange={(e) => setStaff({
                                ...Staff,
                                address: e.target.value
                            })}
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-5 placeholder-gray-400'
                        />
                    </div>
                    {/* Staff Salary Input  */}
                    <div className="">
                        <input
                            type="number"
                            name='StaffSalary'
                            placeholder='Enter salary'
                            value={Staff.salary}
                            onChange={(e) => setStaff({
                                ...Staff,
                                salary: e.target.value
                            })}
                            className='border border-gray-400 hover:border-gray-700 w-96 px-1.5 py-1.5 rounded-md outline-none mb-8 placeholder-gray-400'
                        />
                    </div>
                    {/* Add Button  */}
                    <div>
                    <button onClick={addStaffDetail}
                            className=' bg-gray-100 hover:bg-gray-200 w-full py-1.5 border border-gray-400 rounded-md font-medium mb-5'>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default staffAdd