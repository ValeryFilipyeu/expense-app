class Expense {
	date: Date;
	id: string;
	title: string;
	amount: number;
	constructor(date: Date, id: string, title: string, amount: number) {
		this.date = date;
		this.id = id;
		this.title = title;
		this.amount = amount;
	}
}

export default Expense;
