import React from "react";

import "./index.css";

const ExpenseDate: React.FC<unknown> = () => {
  const month = new Date().toLocaleString("en-US", { month: "long" });
  const year = new Date().getFullYear();
  const day = new Date().toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};
export default ExpenseDate;
