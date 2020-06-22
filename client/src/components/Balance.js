import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

 const { transactions } = useContext(GlobalContext);
 // maps transaction.amount into an array called amounts
 const amounts = transactions.map(transaction => transaction.amount);
 // reduce function brings all values in the array to 1 value by whateever method
 //  specificed in the method. the 0 is the starting value of the accumulator.
 // toFixed is a function for how many decimal places it goes to
 const total = amounts.reduce((accumulator, curVal) => (accumulator += curVal), 0).toFixed(2);
 return (
  <div>
   <h4>Your Balance</h4>
   <h1>${total}</h1>
  </div>
 )
}
