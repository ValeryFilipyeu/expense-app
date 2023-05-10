import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../ui/Card';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

import { ExpenseYearFilter } from '../../constants';
import { type Expense } from '../../types';

import './index.css';

interface ExpensesProps {
	items: Expense[];
}

const Expenses: React.FC<ExpensesProps> = ({ items }) => {
	const [filteredYear, setFilteredYear] = useState(ExpenseYearFilter.curr);

	const filterChangeHandler = (selectedYear): void => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
			</Card>
		</>
	);
};
export default Expenses;
