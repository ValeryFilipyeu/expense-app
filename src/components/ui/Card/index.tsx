import React, { ReactNode } from "react";
import clsx from 'clsx';

import "./index.css";

type CardProps = {
  children: ReactNode;
  className: string;
};

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={clsx("card", className)}>{children}</div>;
};
export default Card;
