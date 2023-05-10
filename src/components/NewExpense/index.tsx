import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';

import { type Expense } from '../../types';

import './index.css';

interface NewExpenseProps {
	onAddExpense: (expenseData: Expense) => void;
}

const NewExpense: React.FC<NewExpenseProps> = ({ onAddExpense }) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData): void => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		onAddExpense(expenseData);
		setIsEditing(false);
	};

	const startEditingHandler = (): void => {
		setIsEditing(true);
	};

	const stopEditingHandler = (): void => {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={startEditingHandler}>Add New Expense</button>
			)}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
