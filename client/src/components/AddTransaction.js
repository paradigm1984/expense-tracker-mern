import React, { useState, useContext }  from 'react';
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {

 const [description, setDescription] = useState('');
 const [amount, setAmount] = useState(0);

 const { addTransaction } = useContext(GlobalContext);

 const onSubmit = e => {
  e.preventDefault();

  const newTransaction = {
   amount: +amount,
   description
   
  }
  addTransaction(newTransaction);
 }

 return (
  <div>
   <h3>Add new transaction</h3>
   <form onSubmit={onSubmit} id='form'>
    <div className='form-control'>
     <label htmlFor='amount'>Amount <br /></label>
     <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} id='amount' placeholder='Enter amount...' />
    </div>
    <div className='form-control'>
     <label htmlFor='text'>Description</label>
     <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} id='text' placeholder='Enter text...' />
    </div>
    <button className='btn'>Add transaction</button>
   </form>
  </div>
 )
}
