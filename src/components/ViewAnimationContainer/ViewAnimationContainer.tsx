"use client"
import React from 'react';
import { motion } from 'framer-motion';

export interface ViewAnimationContainerProps {
	children: React.ReactNode,
	delay?: number
}

const ViewAnimationContainer: React.FC<ViewAnimationContainerProps> = ({ children, delay }) => {
	return (
		<motion.div
			initial = {{
				opacity: 0,
				y: 50
			}}
			whileInView={{
				opacity: 1,
				y: 0
			}}
			viewport={{once: true, amount: 0.8}}
			transition={{duration: .8, staggerChildren: .8, delay: delay??0 }}
		>
			{
				children
			}
		</motion.div>
	)
};

export default ViewAnimationContainer;
