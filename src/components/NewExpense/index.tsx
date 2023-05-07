import React from 'react';

import ExpenseForm from '../ExpenseForm';

import { type Expense } from '../../types';

import './index.css';

interface NewExpenseProps {
	onAddExpense: (expenseData: Expense) => void;
}

const NewExpense: React.FC<NewExpenseProps> = ({ onAddExpense }) => {
	const saveExpenseDataHandler = (enteredExpenseData): void => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		onAddExpense(expenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
