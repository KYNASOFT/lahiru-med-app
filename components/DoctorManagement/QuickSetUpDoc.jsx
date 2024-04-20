'use client'
import React from 'react'
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import '@/components/DoctorManagement/doctorm.css';

let answers =[];

function QuickSetUpDoc() {
  const Questions =[
      "What is your name ?",
      "Contact number ?",
      "Tell us something about your self - a short description (50 words max)"
  ]
  const [completion,setCompletion] = useState(0);
  const [prompt,setPrompt] = useState();
  const [answer,setAnswer] =useState();
  const [hide,setHide] =useState(false);
  const {data:session} = useSession();
 
  let email = session?.user?.email;
  const addAnswer =() =>{

    answers[completion-1] = answer;
    setAnswer("");
    handleBegin();
    console.log(answers);

  }
  const handleBegin = async()=>{
      setHide(true);
      try{
        setPrompt(Questions[completion]);
        setCompletion(completion+1)
      }catch(error)
      {
        console.error(error);
      }
  }
  const handleFinish =async() =>
  {
       try{
          addAnswer();
          const res = await fetch('http://localhost:3000/api/doctordetails',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
              email,
              name : answers[0],
              contactNo : answers[1],
              bio : answers[2]
            })
          })
          if(res.ok){
             console.log("Save details");
          }
          else{
            console.log("Unsuccess entry");
          }
       }
       catch(error){
           console.error(error);
       }
  }

  return (
    <div>
        <div className='q-set-container'>
        <h1>Get Started</h1>
        <h2>Hello Doctor, Help us set up your profile by answering some questions</h2>
        {!hide &&
          <button className='begin-btn' onClick={handleBegin}>Begin</button>}
        </div>
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
                { Questions.length != completion &&
                <div className='flex w-80 justify-evenly'>
                     <button className='btn-prompt' onClick={addAnswer}>Add</button>
                     <button className='btn-prompt'>Skip</button>
                </div>
                }
                {
                  Questions.length == completion &&
                  <button className='btn-prompt' onClick={handleFinish}>Finish</button>
                }
               </div>
        }
    </div>
  )
}

export default QuickSetUpDoc