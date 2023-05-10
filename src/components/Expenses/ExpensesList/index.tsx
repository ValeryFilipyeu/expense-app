import React from 'react';

import ExpenseItem from '../ExpenseItem';

import { type Expense } from '../../../types';

import './index.css';

interface ExpensesListProps {
	items: Expense[];
}

const ExpensesList: React.FC<ExpensesListProps> = ({ items }) => {
	if (items.length === 0) {
		return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
	}

	return (
		<ul className="expenses-list">
			{items.map((expense) => (
				<ExpenseItem
					key={expense.id}
					id={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</ul>
	);
};

export default ExpensesList;
