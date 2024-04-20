"use client"
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
const SpecialitySelection = () => {
  const [specialty, setSpecialty] = useState('');
  const {data: session} = useSession();

  const handleSpecialtyChange = (e) => {
    setSpecialty(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    try
    {
        const res = await fetch('http://localhost:3000/api/doctormain',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                email:session?.user?.email,specialty
            })
        })
        if(res.ok)
        {
            console.log(res.statusText);
        }
        else
        {
            console.error(res.statusText);
        }
    }catch(error){
        console.error(error);
    }

    console.log('Selected Specialty:', specialty,session?.user?.email);
  };

  return (
    <div className='q-set-container'>
      <h1>Please help us select your specialty</h1>
      <form onSubmit={handleSubmit}>
        <div className='opt-ctrl'>
          <label className='form-q-title' htmlFor="specialty">Select Doctor's Specialty:</label>
          <select className='input-sel' id="specialty" value={specialty} onChange={handleSpecialtyChange}>
            <option value="">Select Specialty</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Physician">Physician</option>
            <option value="Surgeon">Surgeon</option>
            <option value="Eye Surgeon">Eye Surgeon</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Obstetrician/Gynocologist">Obstetrician/Gynocologist</option>
            <option value="Psychiatrist">Psychiatrist</option>
            <option value="ENT">ENT</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Therapist">Occupational Therapist</option>
            <option value="Physiotherapist">Physiotherapist</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <button className='begin-btn' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SpecialitySelection;