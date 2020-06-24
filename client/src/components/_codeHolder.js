

<Accordion defaultActiveKey="0">
 <Card className="transaction-list-card">
  <Card.Header>
   <Accordion.Toggle className="history" as={Button} variant="link" eventKey="1">
    <span>History</span>
    <FontAwesomeIcon icon={faCaretDown} color="black" />
   </Accordion.Toggle>
  </Card.Header>
  <div className="transaction-list">
   <Accordion.Collapse eventKey="1">
    <Card.Body>
     {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
    </Card.Body>
   </Accordion.Collapse>
  </div>
 </Card>
</Accordion>





 <form onSubmit={onSubmit}>
  <div className="form-control">
   <label htmlFor="text">Text</label>
   <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
  </div>
  <div className="form-control">
   <label htmlFor="amount">Amount
     <br />
      (negative - expense, positive - income)</label>
   <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
  </div>
  <button className="submit-btn">Add transaction</button>
 </form>