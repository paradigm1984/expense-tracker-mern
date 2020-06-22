// A Reducer is a pure function that takes the previous state and an action,
// and returns the next state.

export default (state, action) => {
  switch (action.type) {
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        loading: false,
        transactions: action.payload
      }
      break;
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
      break;
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      }
      break;
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload
      }
      break;
  // default returns all transactions
  default:
   return state;
 }
}