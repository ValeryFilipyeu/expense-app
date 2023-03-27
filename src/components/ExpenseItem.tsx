import React from "react";
import ExpenseDate from "./ExpenseDate";

import { priceFormatter } from "../utils/formatters";

import "./styles.css";

const ExpenseItem: React.FC<unknown> = () => {
  const price = priceFormatter(294.67);

  return (
    <div className="expense-item">
      <ExpenseDate />
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">{price}</div>
      </div>
    </div>
  );
};
export default ExpenseItem;
