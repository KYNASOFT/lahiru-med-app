"use client";

import React, { useState } from 'react'
import './LabRequest.css'



function LabRequest() {

    const [TestType, setTestType] = useState("");
    const [Pname, setPname] = useState("");
    const [number, setnumber] = useState("");
    const [DrName, setDrName] = useState("");
    const [Date, setDate] = useState("");

    


    const handleSubmit = async(event) => {


        event.preventDefault();

        console.log("TestType: ", TestType)
        console.log("Pname: ", Pname)
        console.log("number: ", number)
        console.log("DrName: ", DrName)
        console.log("Date: ", Date ) 

        if (!TestType || !Pname || !number || !DrName || !Date){
            setError("All fields are necessary !");
            return;
        }

        try {
           const res = await fetch('http://localhost:3000/api/sendLabData' ,{
                method: "POST",
                headers: {
                    "Content-Type": "applicatoin/json"
                },
                body: JSON.stringify({
                    TestType, 
                    Pname,
                    number,
                    DrName,
                    Date,
                }),
            });

            if(res.ok) {
                const from = event.target;
                from.reset();
            }else {
                console.log("form submition failed. ");
            }
        } catch (error) {
            console.log ("Error during submition", error);
        }

      
    };
    
  return (
  <div>
       <div className='p-4 max-w-3xl '>
        <h1 className='font-semibold text-3xl underline'>REQUEST A LAB TEST</h1>
        <p className='text2'> Please fill the form below</p><br/>
    </div>

    <form onSubmit= {handleSubmit} className='form'>
    <div className='text-3xl' >

      <label htmlFor='TestType'> Test Type: </label>
          <input 
          type="text" 
          name='TestType' 
          value={TestType}
          onChange={x=>setTestType(x.target.value)} /><br/> <br/>

          <label>Patient Name:</label>
          <input
          type="text"
          name='Pname'
          value={Pname}
          onChange={x=>setPname(x.target.value)}/>
            
      <label>Appointment Number:</label>
         <input
          type="text"
          name='number'
          value={number}
          onChange={x=>setnumber(x.target.value)}/> <br/> <br/>

      <label>Doctor's Name:</label> 
          <input
          type="text"
          name = 'DrName'
          value={DrName}
          onChange={x=>setDrName(x.target.value)}/> 

      <label>Date:</label>
          <input
          type="date"
          name ='Date'
          value={Date}
          onChange={x=>setDate(x.target.value)}/> <br/>


    <button  
    type= "submit" >Submit
    </button>

     </div>

    

     </form>
      
  </div>
  )
}

export default LabRequest