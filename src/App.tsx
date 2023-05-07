import React from 'react';

import NewExpense from './components/NewExpense';
import Expenses from './components/Expenses';

import Expense from './models/expense';

function App(): JSX.Element {
	const expenses = [
		new Expense(new Date(2023, 4, 1), 'el1', 'Chicken', '9.99'),
		new Expense(new Date(2023, 5, 2), 'el2', 'Tea', '1.99'),
		new Expense(new Date(2023, 6, 3), 'el3', 'Juice', '2.99'),
		new Expense(new Date(2023, 7, 4), 'el4', 'Noodles', '0.99'),
	];

	return (
		<>
			<NewExpense
				onAddExpense={(expenseData) => {
					console.log(expenseData, 'in App file');
				}}
			/>
			<Expenses items={expenses} />
		</>
	);
}

export default App;
