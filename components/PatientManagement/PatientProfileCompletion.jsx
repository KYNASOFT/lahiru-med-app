'use client'
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import React from 'react'
import '@/components/PatientManagement/patient_m.css'
import { QuestionPool } from './QuestionPoolPt';


let answers = [];

function PatientProfileCompletion() {
  
  const [hide,setHide] = useState(false);
  const [answer,setAnswer] = useState();
  const [prompt,setPrompt] = useState("Question 1 ?");
  const [completion,setCompletion] = useState(0);
  const {data:session} = useSession();
  
  
  
  const addAnswer =()=>{    
      //if click add button
      //clear input 
      answers[completion-1] = answer;
      setAnswer("");    
      handlePComp();
      console.log(answers);
  }

  const handleSkip =()=>{
      //later add the skip functionality 
  }

  const handleFinish =async()=>{
      
    //pass the data to the api 
    try{
      const resDataEntry = await fetch("api/patientdetails",
      {
         method:"POST",
         headers:{
            "Content-Type":"application/json"
         },
         body: JSON.stringify({
            email:session?.user?.email,
            username:answers[0],
            age:answers[1],
            address:answers[2],
            tel:answers[3],
            bloodtype:answers[4],
            nic:answers[5],
            profession:answers[6],
         })
      }
    )
    if(resDataEntry.ok){
        console.log("data passed success");
    }
    else{
        console.log("unsuccess data entry");
    }

    }catch(error){
        console.error(error);
    }


  }
  
  const  handlePComp =async ()=>{
     
    setHide(true);
    try{
        setPrompt(QuestionPool[completion]);  
        setCompletion(completion + 1);
    }
    catch(error){
        console.error(error);
    }
  }

  return (
    <div>
        <div className='comp_container'>
            <h1 >Profile Completion</h1>
            <h2>To ensure that you receive the best possible care and 
                personalized attention, we kindly urge you to take a moment
                 to complete your patient profile</h2>
            { !hide &&
                <button className='btn-normal' onClick={handlePComp}>Begin</button> 
            }
            {hide &&
               <div className='flex'>
                <input
                    className='q-input'
                    type = "text"
                    name ="text-input"
                    placeholder={prompt}
                    value ={answer}
                    onChange ={e=>setAnswer(e.target.value)}
                ></input>
                { QuestionPool.length != completion &&
                <div className='flex w-80 justify-evenly'>
                     <button className='btn-prompt' onClick={addAnswer}>Add</button>
                     <button className='btn-prompt'>Skip</button>
                </div>
                }
                {
                  QuestionPool.length == completion &&
                  <button className='btn-prompt' onClick={handleFinish}>Finish</button>
                }
               </div>
            }
                
        </div>
        
    </div>
  )
}

export default PatientProfileCompletion