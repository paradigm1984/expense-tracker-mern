// App.js

import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import './styles/Responsive.scss'

function App() {
  return (
			<GlobalProvider>
				<Header />
				<div className='main'>
						<Balance />
					<IncomeExpenses />
					<TransactionList />
					<AddTransaction />
				</div>
			</GlobalProvider>
		);
}

export default App;
