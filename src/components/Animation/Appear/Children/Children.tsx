import { Variants, motion } from 'framer-motion';
import React from 'react';

export interface ChildrenProps {
	children: React.ReactNode
	duration: number
	x?: number
	y?: number
}

const Children: React.FC<ChildrenProps> = ({ children, x, y, duration }) => {
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
		>
			{
				children
			}
		</motion.div>
	);
};

export default Children;
