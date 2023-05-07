import React from 'react';

import { ExpenseYearFilter } from '../../constants';

import './index.css';

interface ExpensesFilterProps {
	onChangeFilter: (value: string) => void;
	selected: string;
}

const ExpensesFilter: React.FC<ExpensesFilterProps> = ({
	onChangeFilter,
	selected,
}) => {
	const dropdownChangeHandler = (event): void => {
		onChangeFilter(event.target.value);
	};

	const years: ExpenseYearFilter[] = [
		ExpenseYearFilter.beforeLast,
		ExpenseYearFilter.last,
		ExpenseYearFilter.curr,
	];

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select value={selected} onChange={dropdownChangeHandler}>
					{years.map((year: ExpenseYearFilter) => (
						<option key={year} value={year}>
							{year}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
