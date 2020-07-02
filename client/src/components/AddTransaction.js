// AddTransaction.js

import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Form, Button } from 'react-bootstrap';
import '../styles/AddTransaction.scss';


AddTransaction = () => {
 const [text, setText] = useState('');
 const [amount, setAmount] = useState(0);

 const { addTransaction } = useContext(GlobalContext);

 const onSubmit = e => {
  e.preventDefault();

  const newTransaction = {
   text,
   amount: +amount
  }
  addTransaction(newTransaction);
 }

 return (
  <div className="transaction-form-container">
   <h3>Add new transaction</h3>
   <Form onSubmit={onSubmit}>
    <Form.Group controlId="text">
     <Form.Label>Text</Form.Label>
     <Form.Control type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text" />

    </Form.Group>
    <Form.Group controlId="amount">
     <Form.Label>Amount</Form.Label>
     <Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" />
     <Form.Text className="text-muted">
      (negative: expense | positive: income)
     </Form.Text>
    </Form.Group>
    <Button className="submit-btn" type="submit">Add transaction</Button>
   </Form>
  </div>
 )
}







