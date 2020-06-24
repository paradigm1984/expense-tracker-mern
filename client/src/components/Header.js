import React from 'react';
import '../styles/Header.scss';

export const Header = () => {
 return (


  <nav id="navigation" className="stroke">
   <div className="nav-header-container">
    <h2>Expense Tracker</h2>
   </div>
   <ul className="nav-links">
    <li>
     <a href="https://github.com/paradigm1984/expense-tracker-mern">Github</a>
     <span className="underline"></span>
    </li>
    <li>
     <a href="https://danblanco.com">More Projects</a>
     <span className="underline"></span>
    </li>
   </ul>
  </nav>

  
 )
}
