import { priceFormatter } from '../utils/formatters';

class Expense {
	date: Date;
	id: string;
	title: string;
	amount: string;
	constructor(date: Date, id: string, title: string, amount: string) {
		this.date = date;
		this.id = id;
		this.title = title;
		this.amount = priceFormatter(amount);
	}
}

export default Expense;
