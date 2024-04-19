import React from 'react'
import { useState } from 'react';
import CreateAdmin from '@/components/AdminComponents/CreateAdmin'
import CreateDoc from './CreateDoc';
import '@/components/AdminComponents/adminpage.css'
function AdminQuickAccess() {

    const[adcreate,setAdcreate] = useState(false);
    const[addDoc,setAddDoc] = useState(false);

    const handleCreate=()=>{
       if(adcreate == false){
        setAdcreate(true);
       }
       else{
        return;
       }
    }
    const handleAddDoc =() =>{
      if(addDoc == false){
        setAddDoc(true);
      }
      else{
        return;
      }
    }
  return (
    <div className='quick-ac-container'>
        <div className='q-ac-header'>
            <h1 className='my-10'>Quick Access</h1>
            <div className='flex justify-between gap-10'>
            <div className='btn-container'>
            <button className='qa-button'onClick={handleCreate}>Create an admin</button>
            <button className='qa-button'onClick={handleAddDoc}>Add a Doctor</button>
            <button className='qa-button'>Access</button>
            <button className='qa-button'>Access</button>
            <button className='qa-button'>Access</button>
            </div>
            <div className='btn-container'>
            <button className='qa-button'>Access</button>
            <button className='qa-button'>Access</button>
            <button className='qa-button'>Access</button>
            <button className='qa-button'>Access</button>
            <button className='qa-button'>Access</button>
            </div>
            </div>

            {adcreate && <CreateAdmin/>}
            {addDoc && <CreateDoc/>}
        </div>
         
    </div>
  )
}

export default AdminQuickAccess