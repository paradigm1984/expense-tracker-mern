// A Reducer is a pure function that takes the previous state and an action,
// and returns the next state.

export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
      break;
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
      break;
  // default returns all transactions
  default:
   return state;
 }
}