"use client"
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import '@/components/DoctorManagement/doctorm.css'
import { getDoc } from '@/lib/getDoc';


function DoctorProfile() {

const [doctor,setDoctor] = useState();
const {data:session} = useSession();
useEffect(()=>{
    //if doctor available this will fetch the doctor
    async function fetchData(){
        const doc = await getDoc(session?.user?.email);
        setDoctor(doc);
    }
    fetchData();
},[session]);


  return (
  <div>
    {doctor?.username !=null &&
    <div className='q-set-container'>
        <h1 className='sub-title'>Hi Doctor {doctor?.username} </h1>
        <h2>Id : {doctor?._id}</h2>
        <h2>Email : {doctor?.email}</h2>
        <h2>Bio :{doctor?.bio}</h2>
    </div>}
    </div>
  )
}

export default DoctorProfile