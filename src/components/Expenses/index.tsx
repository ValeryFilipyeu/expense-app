import React from "react";

import ExpenseItem from "../ExpenseItem";
import Card from "../ui/Card";

import "./index.css";

const Expenses: React.FC<unknown> = () => {
  return (
    <Card className="expenses">
      <ExpenseItem />
      <ExpenseItem />
    </Card>
  );
};
export default Expenses;
