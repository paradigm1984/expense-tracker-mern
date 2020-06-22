import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({ transaction }) => {

 const { deleteTransaction } = useContext(GlobalContext);

 // If the amount is less than 0, its negative otherwise its positive
 const sign = transaction.amount < 0 ? '-' : '+';

 return (
  <div>
   <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
    {transaction.description}
    <span>{sign}${Math.abs(transaction.amount)}</span>
    <button onClick={()=> deleteTransaction(transaction._id)} className='delete-btn'>x</button>
   </li>
  </div>
 )
}
