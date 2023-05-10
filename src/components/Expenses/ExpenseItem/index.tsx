import React from 'react';
import ExpenseDate from '../ExpenseDate';
import Card from '../../ui/Card';

import { type Expense } from '../../../types';

import { priceFormatter } from '../../../utils/formatters';

import './index.css';

const ExpenseItem: React.FC<Expense> = ({ date, title, amount }) => {
	return (
		<Card className="expense-item">
			<ExpenseDate date={date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">{priceFormatter(amount)}</div>
			</div>
		</Card>
	);
};
export default ExpenseItem;
