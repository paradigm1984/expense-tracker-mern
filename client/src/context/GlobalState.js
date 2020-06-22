import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


// This file is used to track the state of the transactions, as that information
// will need to be updated and subsequently the users total amount.

// Initial State with some dummy data
const initialState = {
 transactions: []
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
 // Deletes a transaction state using the DELETE_TRANSACTION case in the AppReducer
 function deleteTransaction(id) {
  dispatch({
   type: 'DELETE_TRANSACTION',
   payload: id
  });
 }

 // Adds a transaction state using the ADD_TRANSACTION case in the AppReducer
 function addTransaction(transaction) {
  dispatch({
   type: 'ADD_TRANSACTION',
   payload: transaction
  });
 }

 return (
  <GlobalContext.Provider value={{
   transactions: state.transactions,
   deleteTransaction,
   addTransaction
  }}>
   {children}
  </GlobalContext.Provider>
 );
}