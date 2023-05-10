import React from 'react';

import Chart from '../Chart';

import { Months } from '../../constants';
import { type Expense } from '../../types';

interface ExpensesChartProps {
	expenses: Expense[];
}

const ExpensesChart: React.FC<ExpensesChartProps> = ({ expenses }) => {
	const chartDataPoints = [
		{ label: Months.jan, value: 0 },
		{ label: Months.feb, value: 0 },
		{ label: Months.mar, value: 0 },
		{ label: Months.apr, value: 0 },
		{ label: Months.may, value: 0 },
		{ label: Months.jun, value: 0 },
		{ label: Months.jul, value: 0 },
		{ label: Months.aug, value: 0 },
		{ label: Months.sep, value: 0 },
		{ label: Months.oct, value: 0 },
		{ label: Months.nov, value: 0 },
		{ label: Months.dec, value: 0 },
	];

	for (const expense of expenses) {
		const expenseMonth = expense.date.getMonth();
		chartDataPoints[expenseMonth].value += expense.amount;
	}

	return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
