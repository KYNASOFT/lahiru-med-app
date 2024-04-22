"use client"
import { useState } from 'react';

const PaymentInterface = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');

  const handleCardPayment = async () => {
    // Call server-side API route to process payment
  };

  const handleLatePayment = async()=>{

  }

  return (
    <div>
    <form onSubmit={handleCardPayment} style={styles.form}>
      <h1 className='text-4xl text-center'>Add card payment details</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        style={styles.input}
      />
      <input
        type="text"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        placeholder="Card Number"
        style={styles.input}
      />
      <input
        type="text"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        placeholder="Expiry"
        style={styles.input}
      />
      <input
        type="text"
        value={cvc}
        onChange={(e) => setCvc(e.target.value)}
        placeholder="CVC"
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Pay Now</button>
    </form>
    <form onSubmit={handleLatePayment} style={styles.form}>
      <h1 className='text-4xl text-center'>Pay Later at the center</h1>
      <button type="submit" style={styles.button}>Pay Later</button>
    </form>
    </div>
  );
};
const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '10px auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#3A57A7',

  },
  input: {
    padding: '10px',
    margin: '5px 0',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  button: {
    padding: '12px',
    margin: '10px 0',
    fontSize: '18px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s ease',
  },
};

export default PaymentInterface;