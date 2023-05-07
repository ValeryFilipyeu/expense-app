import React, { type ReactNode } from 'react';
import clsx from 'clsx';

import './index.css';

interface CardProps {
	children: ReactNode;
	className: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
	return <div className={clsx('card', className)}>{children}</div>;
};
export default Card;
