"use client"
import React from 'react'
import { useState } from 'react'
import '@/components/InventoryManagement/maininventory.css'

function AddItemsForm() {

  const[itemName,setItemName] = useState();
  const[qty,setQty] = useState();

  const handleAdd = async(e) =>{
      e.preventDefault();
      console.log(itemName,qty);
    try{
          const res = await fetch('http://localhost:3000/api/additems',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                itemName,
                qty
            })
          })
          if(res.ok){
             console.log("Added succes");
             window.location.reload();
          }
          else{
             console.log("Unsuccess entry");
          }
      }
      catch(error)
      {
         console.error(error);
      }
  }


  return (
    <div className='it-form-container'>
        <h1 className='title'>Add Item</h1>
        <form onSubmit={handleAdd}>
        <div className='form-g'>
        <label htmlFor="itemName">Item Name:</label>
        <input 
           type="text" 
           id="itemName" 
           name="itemName"
           value={itemName}
           onChange={e=>setItemName(e.target.value)} 
           required/>
        </div>
        <br/>
        <div className='form-g'>
        <label htmlFor="itemQuantity">Item Quantity:</label>
        <input 
            type="number" 
            id="itemQuantity" 
            name="itemQuantity" 
            value={qty}
            onChange={e=>setQty(e.target.value)}
            required/>
        </div>
        <br></br>
        <button className="btn-nr"type="submit">Add</button>
        </form>
    </div>
  )
}

export default AddItemsForm