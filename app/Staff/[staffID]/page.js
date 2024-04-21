"use client" // use client
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

const EditStaff = ({ params }) => {
    // Crreate Router 
    const router = useRouter()

    //Creat Staff State 
    const [Staff, setStaff] = useState({
        name: "",
        email: "",
        address: "",
        salary: ""
    });

    // Destructure StaffID from params
    const { StaffID } = params

    // Create Get Staff By Id Function
    const getStaffById = async () => {
        const res = await fetch(`${({}).NEXT_PUBLIC_API_BASE_URL}/api/Staff/${StaffID}`, {
            method: 'GET',
        })

        // Create Data
        const data = await res.json();
        // console.log(data.getSingleEmployee)

        // Set Employee Data
        setStaff({
            name: data.getSingleStaff?.name,
            email: data.getSingleStaff?.email,
            address: data.getSingleStaff?.address,
            salary: data.getSingleStaff?.salary
        })
    }


    // Create Update Staff Function
    const updateStaff = async () => {

        const res = await
            fetch(`${({}).NEXT_PUBLIC_API_BASE_URL}/api/Staff/${StaffID}`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json",
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
        // console.log(data)

        // Destructure Data 
        const { message, error } = data;

        // Condition
        if (error) {
            alert(error) // Error Message
        }
        else {
            alert(message) // Success Message
            router.push('/Staff/StaffList') // navigate (/Staff/StaffList) route
        }
    }

    useEffect(() => {
        // Call getStaffID Function 
        getStaffID();
    }, [StaffID]);
    return (
        <div className=' container mx-auto flex justify-center items-center h-screen'>
            {/* Main  */}
            <div className="form shadow-md border border-gray-400 rounded-xl py-6 px-9  ">
                {/* Top  */}
                <div className="top">
                    {/* Top-Child  */}
                    <div className="flex gap-[40px] mb-5 items-center">
                        {/* link  */}
                        <Link href='/'>
                            {/* Svg icon  */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </Link>

                        {/* text  */}
                        <h1 className='text-2xl font-semibold'>Edit Staff Detail</h1>
                    </div>
                </div>

                {/* Bottom  */}
                <div className="bottom">
                    {/* Staff Name Input   */}
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

                    {/* Update Button  */}
                    <div>
                        <button onClick={updateStaff} className=' bg-gray-100 hover:bg-gray-200 w-full py-1.5 border border-gray-400 rounded-md font-medium mb-5'>Edit Detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditStaff;