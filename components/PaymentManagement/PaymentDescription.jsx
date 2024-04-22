import React from 'react'
import '@/components/PaymentManagement/paymentm.css';

function PaymentDescription() {
  return (
    <div className='des-container'>
        <h1 className='title'>Invoice / Medical Bill</h1>
        <h2 className='sub-tt'>Lahiru Medical Center</h2>

        <h3 className='fields'>Payment Description :</h3>
        <h3 className='fields'>Amount to be paid : </h3>
        <h3 className='fields'>Date : </h3>
        <h3 className='fields'>Customer /Patient name :</h3>
        <h3 className='fields'>Email : </h3>
    </div>
  )
}

export default PaymentDescription