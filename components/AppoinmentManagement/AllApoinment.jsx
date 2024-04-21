"use client"
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import '@/components/LaboratoryManagement/requestInterface.css';
import { getAllAppoinments } from '@/lib/getAllAppoinments';

function AllAppoinments() {

    const[tableData,setTableData] = useState([]);
    
    useEffect(()=>{
        async function fetchData(){
            const data = await getAllAppoinments();
            setTableData(data);
        }
        fetchData();
        
    },[])

    const handleDelete= async(event) =>{

        const btn_id = event.target.id;
        console.log("clicked btn",btn_id);
        try{
            const res = await fetch("http://localhost:3000/api/deleteapts",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    id:btn_id
                })
            })
            if(res.ok)
            {
                console.log("Deletion success");
                window.location.reload();
            }
            else
            {
                console.log("Deletion unsuccess");
            }
        }catch(error){
            console.error(error);
        }
    }

    const numRows = tableData.length;
    const rows = [];
    for (let i = 0; i < numRows; i++) {
        const cells = [];
        for (let j = 0; j < 1; j++) {
            cells.push(
            <td key={`cell-${0}`}>{tableData[i].patientName}</td>,
            <td key={`cell-${1}`}>{tableData[i].symptoms}</td>,
            <td key={`cell-${2}`}>{"-"}</td>,
            <td key={`cell-${3}`}>{"-"}</td>,
            <td key={`cell-${4}`}>{"-"}</td>,
            <td key={`cell-${5}`}>{"-"}</td>,
            <td key={`cell-${6}`}>{<button id={tableData[i]._id} className='btn-tb' onClick={handleDelete}>Delete</button>}</td>,
        
        );
        }
        rows.push(<tr key={`row-${i}`}>{cells}</tr>);
    }


  return (
    <div className='table-container'>
        <h1 className='text-4xl'>Appoinment Manager</h1>
        <table>
            <thead>
                <tr>
                    <th>Patient Name</th>
                    <th>Symptoms</th>
                    <th>Date</th>
                    <th>Payment ID</th>
                    <th>Doctor ID</th>
                    <th>Status</th>
                    <th>Edit Options</th>
                </tr>
            </thead>
        <tbody>{rows}</tbody>
        </table>
    </div>
  )
}

export default AllAppoinments