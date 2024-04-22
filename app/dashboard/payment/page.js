import React from 'react'
import PaymentInterface from '@/components/PaymentManagement/PaymentInterface'
import PaymentDescription from '@/components/PaymentManagement/PaymentDescription'

function page() {
  return (
    <div className='flex gap-20 mx-40'>
      <PaymentDescription/>
      <PaymentInterface/>
    </div>
  )
}

export default page