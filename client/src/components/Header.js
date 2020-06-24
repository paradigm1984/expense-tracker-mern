// Header.js

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import '../styles/Header.scss';

export const Header = () => {
 return (
  <div className="container">
   <Navbar expand="sm">
    <Navbar.Brand href="#home">Expense Tracker</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
   <Nav className="ml-auto">
      <Nav.Link href="ttps://github.com/paradigm1984/expense-tracker-mern">Github Repo</Nav.Link>
      <Nav.Link href="https://danblanco.com">Portfolio</Nav.Link>
   </Nav>
  </Navbar.Collapse>
  </Navbar >
  </div>
 )
}
