import { Variants, motion } from 'framer-motion';
import React from 'react';

export interface ChildrenProps {
	children: React.ReactNode
	duration: number
	x?: number
	y?: number
	className?: string
}

const Children: React.FC<ChildrenProps> = ({ children, x, y, duration, className }) => {
	const variants: Variants = {
		hidden: {
			opacity: 0,
			y: y ?? 0,
			x: x ?? 0,
		},
		show: {
			opacity: 1,
			y: 0,
			x: 0,
			transition: {
				duration,
			}
		}
	}
	return (
		<motion.div
			variants={variants}
			className={className}
		>
			{
				children
			}
		</motion.div>
	);
};

export default Children;
