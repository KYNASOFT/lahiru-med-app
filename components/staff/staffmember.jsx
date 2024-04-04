import React from 'react'

function staffmember() {
  return (
    <div>
        <div className='p-4 max-w-3xl '>
        <h1 className='font-semibold text-3xl underline'>REQUEST A LAB TEST</h1>
        <p className='text2'> Please fill the form below</p><br/>
    </div>

    <form className='form'>
    <div className='text-3xl' >

      <label htmlFor='TestType'> Test Type: </label>
          <input type="text" id='TestType' /><br/> <br/>

          <label>Patient Name:</label>
          <input
            type="text"/>
            
      <label>Appointment Number:</label>
                <input
                  type="text"/> <br/> <br/>

      <label>Doctor's Name:</label>
                <input
                  type="text"/> 

      <label>Date:</label>
                <input
                  type="date"/> <br/>


<button  type="submit" >Submit</button>

     </div>

    
     </form>

    </div>
  )
}

export default staffmember