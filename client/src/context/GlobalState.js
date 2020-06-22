import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';


// This file is used to track the state of the transactions, as that information
// will need to be updated and subsequently the users total amount.

// Initial State with some dummy data
const initialState = {
 transactions: [],
 error: null,
 loading: true
}

// Create Context using built in React function and passing in the initial state.
// This is exported to be brought into other files to be called
export const GlobalContext = createContext(initialState);

// Provider Component allows this global state to be accessesed by the children of this
// This is exported to be brought into other files to be called
export const GlobalProvider = ({ children }) => {

 // Returns initial state (transactions) using the default case in the AppReducer
 const [state, dispatch] = useReducer(AppReducer, initialState);

 // Actions

 // Get all transactions from the database
 async function getTransactions() {
  try {
   const res = await axios.get('/api/transactions');
   dispatch({
    type: 'GET_TRANSACTIONS',
    payload: res.data.data
   })
   console.log(res.data.data);
  } catch (err) {
   dispatch({
    type: 'TRANSACTION_ERROR',
    payload: err.response.data.error
   })
  }
 }

 // Deletes a transaction state using the DELETE_TRANSACTION case in the AppReducer
 async function deleteTransaction(id) {
  try {
   // dynamically dropping in the id into the mongoose delete function
   await axios.delete(`/api/transactions/${id}`);
   dispatch({
    type: 'DELETE_TRANSACTION',
    payload: id
   });
  } catch (err) {
   dispatch({
    type: 'TRANSACTION_ERROR',
    payload: err.response.data.error
   });
  }  
 }

 // Adds a transaction state using the ADD_TRANSACTION case in the AppReducer
 async function addTransaction(transaction) {
  const config = {
   headers: {
    'Content-Type': 'application/json'
   }
  }
  try {
   const res = await axios.post('/api/transactions', transaction, config);
   dispatch({
    type: 'ADD_TRANSACTION',
    payload: res.data.data
   });
  } catch(err) {
   dispatch({
    type: 'TRANSACTION_ERROR',
    payload: err.response.data.error
   });
  }
  





  dispatch({
   type: 'ADD_TRANSACTION',
   payload: transaction
  });
 }

 return (
  <GlobalContext.Provider value={{
   transactions: state.transactions,
   error: state.error,
   loading: state.loading,
   getTransactions,
   deleteTransaction,
   addTransaction
  }}>
   {children}
  </GlobalContext.Provider>
 );
}