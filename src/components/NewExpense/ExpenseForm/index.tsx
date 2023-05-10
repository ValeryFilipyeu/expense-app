import React, { useState } from 'react';

import { type Expense } from '../../../types';
import { ExpenseFormValues } from '../../../constants';

import './index.css';

interface ExpenseFormProps {
	onSaveExpenseData: (expenseData: Expense) => void;
	onCancel: () => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({
	onSaveExpenseData,
	onCancel,
}) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState(0);
	const [enteredDate, setEnteredDate] = useState('');
	// const [userInput, setUserInput] = useState({
	//   enteredTitle: '',
	//   enteredAmount: '',
	//   enteredDate: '',
	// });

	const { MIN_STEP_AMOUNT_INPUT, MIN_DATE_PICKER, MAX_DATE_PICKER } =
		ExpenseFormValues;

	const titleChangeHandler = (event): void => {
		setEnteredTitle(event.target.value);
		// setUserInput({
		//   ...userInput,
		//   enteredTitle: event.target.value,
		// });
		// setUserInput((prevState) => {
		//   return { ...prevState, enteredTitle: event.target.value };
		// });
	};

	const amountChangeHandler = (event): void => {
		setEnteredAmount(event.target.value);
		// setUserInput({
		//   ...userInput,
		//   enteredAmount: event.target.value,
		// });
	};

	const dateChangeHandler = (event): void => {
		setEnteredDate(event.target.value);
		// setUserInput({
		//   ...userInput,
		//   enteredDate: event.target.value,
		// });
	};

	const submitHandler = (event): void => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
			id: Math.random().toString(),
		};

		onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount(0);
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min={MIN_STEP_AMOUNT_INPUT}
						step="0.01"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min={MIN_DATE_PICKER}
						max={MAX_DATE_PICKER}
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={onCancel}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
