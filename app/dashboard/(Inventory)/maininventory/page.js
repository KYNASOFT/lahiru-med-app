import React from 'react'
import AddItemsForm from '@/components/InventoryManagement/AddItemsForm'
import SurgicalInventory from '@/components/InventoryManagement/SurgicalInventory'

function page() {
  return (
    <div>
        <div className='flex'>
            <AddItemsForm/>
            <SurgicalInventory/>
        </div>
    </div>
  )
}

export default page