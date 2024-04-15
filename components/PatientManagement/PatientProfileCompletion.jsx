'use client'
import { useState } from 'react';
import React from 'react'
import '@/components/PatientManagement/patient_m.css'
import { QuestionPool } from './QuestionPoolPt';

function PatientProfileCompletion() {
  let answers = {};
  const [hide,setHide] = useState(false);
  const [answer,setAnswer] = useState();
  const [prompt,setPrompt] = useState("Question 1 ?");
  const [completion,setCompletion] = useState(0);
  
  const addAnswer =()=>{
      
      //clear input 
      answers[completion] = answer;
      setAnswer("");
      setCompletion(completion + 1);
      console.log(completion);
      handlePComp();
      console.log(answers);
  }

  const  handlePComp =async ()=>{
     
    setHide(true);
    try{
        setPrompt(QuestionPool[completion]);  
    
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
                <button className='btn-prompt' onClick={addAnswer}>Add</button>
                <button className='btn-prompt'>Skip</button>
                <button className='btn-prompt'>Later</button>
               </div>
            }
                
        </div>
        
    </div>
  )
}

export default PatientProfileCompletion