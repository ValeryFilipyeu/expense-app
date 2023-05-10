import React, { useState } from 'react';

import NewExpense from './components/NewExpense';
import Expenses from './components/Expenses';

import Expense from './models/expense';

const EXPENSES = [
	new Expense(new Date(2023, 4, 1), 'el1', 'Chicken', 9.99),
	new Expense(new Date(2023, 5, 2), 'el2', 'Tea', 1.99),
	new Expense(new Date(2023, 6, 3), 'el3', 'Juice', 2.99),
	new Expense(new Date(2023, 7, 4), 'el4', 'Noodles', 0.99),
];

function App(): JSX.Element {
	const [expenses, setExpenses] = useState(EXPENSES);

	const addExpenseHandler = (expense): void => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	// return React.createElement(
	//   'div',
	//   {},
	//   React.createElement('h2', {}, "Let's get started!"),
	//   React.createElement(Expenses, { items: expenses })
	// );

	return (
		<>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</>
	);
}

export default App;
