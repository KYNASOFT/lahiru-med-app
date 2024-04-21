"use client"
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import '@/components/DoctorManagement/doctorm.css'
import { getDoc } from '@/lib/getDoc';
import { getUser } from '@/lib/getUser';


function DoctorProfile() {
const [user,setUser] = useState();
const [doctor,setDoctor] = useState();
const {data:session} = useSession();
useEffect(()=>{
    //if doctor available this will fetch the doctor
    async function fetchData(){
        const doc = await getDoc(session?.user?.email);
        setDoctor(doc);
    }
    async function fetchUser(){
        const userRes = await getUser(session?.user?.email,'http://localhost:3000/api/userExcist');
        setUser(userRes?.user);
    }
    fetchData();
    fetchUser();
    console.log(user);
},[session]);


  return (
  <div>
    {user?.username !=null &&
    <div className='q-set-container'>
        <h1 className='sub-title'>Hi Doctor {user?.username} </h1>
        <h2>Id : {user?._id}</h2>
        <h2>Email : {user?.email}</h2>
        <h2>Bio :{user?.bio}</h2>
        <h2>Specialty : {doctor?.specialty}</h2>
        <h2>Contact Number : {user?.telephone}</h2>
    </div>}
    </div>
  )
}

export default DoctorProfile