import React from 'react'
import './inventory.css'

function ItemRequestForm() {
  return (
    <form className='form'>
      <div>
      <h1>Item Request Form</h1>
      <h2>Department details</h2>
          <label>
            <input type="radio" 
              name = 'channelling' />
            Channeling
          </label>

          <label>
            <input type="radio" 
            name = 'opd' />
            OPD
          </label>

          <h2>Staff Member Details</h2>

          <label>
          <input type="text" 
          name = 'staffID'/>
            Staff ID
          </label>

          <label>
          <input type="text"
          name = 'staffName'/>
            Name
          </label>

          <h2>Item Details</h2>
          <p>You can only request for 3 items.</p>

          <label>
          <input type="text" 
          name = 'item01'/>
            Item 01
          </label>

          <label>
            <input type="number"
            name='qty' />
            Quantity 
          </label> <br/><br/>

          <label>
          <input type="text" 
          name = 'item02'/>
            Item 02
          </label>

          <label>
            <input type="number"
            name='qty' />
            Quantity 
          </label> <br/><br/>

          <label>
          <input type="text" 
          name = 'item03'/>
            Item 03
          </label>

          <label>
            <input type="number"
            name='qty' />
            Quantity 
          </label> <br/><br/>
          
          <h2>Reason for the request ?</h2>

          <label>
            <input type="radio" 
              name = 'channelling' />
            Lack of items
          </label>

          <label>
            <input type="radio" 
            name = 'opd' />
            Need/Purpose for this item
          </label><br/><br/>

          <label>Date:</label>
          <input
          type="date" />

        <button  
        type= "submit" >Submit
        </button>

      </div>
   </form>
  )
}

export default ItemRequestForm