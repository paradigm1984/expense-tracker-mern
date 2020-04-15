import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


// This file is used to track the state of the transactions, as that information
// will need to be updated and subsequently the users total amount.

// Initial State with some dummy data
const initialState = {
 transactions: []
}

// Create Context using built in React function and passing in the initial state
export const GlobalContext = createContext(initialState);

// Provider Component allows this global state to be accessesed by the children of this
// provider component
export const GlobalProvider = ({children}) => {
 const [state, dispatch] = useReducer(AppReducer, initialState);

 // Actions
 function deleteTransaction(id) {
  dispatch({
   type: 'DELETE_TRANSACTION',
   payload: id
  });
 }

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