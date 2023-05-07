import React, { useState } from 'react';

import ExpenseItem from '../ExpenseItem';
import ExpensesFilter from '../ExpensesFilter';
import Card from '../ui/Card';

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

	return (
		<>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{items.map((item) => (
					<ExpenseItem
						key={item.id}
						date={item.date}
						id={item.id}
						amount={item.amount}
						title={item.title}
					/>
				))}
			</Card>
		</>
	);
};
export default Expenses;
