// TransactionList.js

import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { Accordion, Card, Button } from 'react-bootstrap';
import { GlobalContext } from '../context/GlobalState';
// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
// Local Stylesheet
import '../styles/TransactionList.scss';

export const TransactionList = () => {
 const { transactions, getTransactions } = useContext(GlobalContext);

 useEffect(() => {
  getTransactions();
 }, []);

 return (
   <Accordion defaultActiveKey="1">
     <Card className="transaction-list-card">
       <Card.Header>
         <Accordion.Toggle className="history" as={Button} variant="link" eventKey="1">
           <span>History</span>
           <FontAwesomeIcon icon={faCaretDown} color="white" />
         </Accordion.Toggle>
       </Card.Header>
       <div className="transaction-list-container">
         <Accordion.Collapse eventKey="1">
           <Card.Body>
             <ul className="transaction-list">
             {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
             </ul>
             </Card.Body>
         </Accordion.Collapse>
       </div>
     </Card>
   </Accordion>
 )
}

