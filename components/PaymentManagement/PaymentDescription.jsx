"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import '@/components/PaymentManagement/paymentm.css';
import { getUser } from '@/lib/getUser';

function PaymentDescription() {

   const [amount,setAmount] = useState("");
   const [customer,setCustomer] = useState("");
   const [date,setDate] = useState("");
   const [email,setEmail] = useState("");
   const [des,setDes] = useState("");
   const{data:session} = useSession();
   useEffect(()=>{     
        setEmail(session?.user?.email);

        async function fetchUser(){
            let res = await getUser(email,"http://localhost:3000/api/userExcist");
            setCustomer(res);
            console.log(customer);
        }
        fetchUser();
       
   },[session])

   const handleConfirm =()=>{
       
   } 
  return (
    <div className='des-container'>
        <h1 className='title'>Invoice / Medical Bill</h1>
        <h2 className='sub-tt'>Lahiru Medical Center</h2>

        <h3 className='fields'>Payment Description :{des}</h3>
        <h3 className='fields'>Amount to be paid : {amount} </h3>
        <h3 className='fields'>Date :{date}</h3>
        <h3 className='fields'>Customer /Patient name :{customer?.username}</h3>
        <h3 className='fields'>Email :{email}</h3>
        <button className='cn-btn' onClick={handleConfirm}>Confirm</button>
    </div>
  )
}

export default PaymentDescription