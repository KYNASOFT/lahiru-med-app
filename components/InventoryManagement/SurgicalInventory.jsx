"use client"
import React, { useEffect, useState } from 'react'
import { getItems } from '@/lib/getItems';



function SurgicalInventory() {

    const[tableData,setTableData] = useState([]);
    
    useEffect(()=>{
        async function fetchData(){
            const data = await getItems();
            setTableData(data);
        }
        fetchData();
        
    },[])

    const handleDelete= async(event) =>{

        const btn_id = event.target.id;
        console.log("clicked btn",btn_id);
        try{
            const res = await fetch("http://localhost:3000/api/deleteItems",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    itemName:btn_id
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
            <td key={`cell-${0}`}>{tableData[i].itemName}</td>,
            <td key={`cell-${1}`}>{tableData[i].qty}</td>,
            <td key={`cell-${2}`}>{"blank 2"}</td>,
            <td key={`cell-${3}`}>{<button id={tableData[i].itemName} onClick={handleDelete} className='btn-tb'>Delete</button>}</td>,
        
        );
        }
        rows.push(<tr key={`row-${i}`}>{cells}</tr>);
    }
  return (
    <div className='table-container'>
        <table>
        <thead>
            <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Edit Options</th>
            </tr>
        </thead>
       <tbody>{rows}</tbody>
    </table>
    </div>
  )
}

export default SurgicalInventory