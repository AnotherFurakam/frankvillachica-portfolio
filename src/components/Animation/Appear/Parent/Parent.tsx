"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import { Variants, useAnimation, useInView, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { Children } from '../Children';

export interface ParentProps {
	children: React.ReactNode
	delayChildren: number
	staggerChildren: number
	className?: string
}

const Parent: React.FC<ParentProps> = ({ children, delayChildren, staggerChildren, className }) => {
	const variants: Variants = {
		hidden: {
			opacity: 0
		},
		show: {
			opacity: 1,
			transition: {
				delayChildren,
				staggerChildren
			}
		}
	}

	const ref = useRef(null)

	const isInView = useInView(ref, {
		once: true,
	})

	const mainControls = useAnimation()

	useEffect(() => {
		if (isInView) {
			mainControls.start("show")
		}
	}, [isInView])

	return (
		<motion.div
			variants={variants}
			initial="hidden"
			animate={mainControls}
			ref={ref}
			className = {className}
		>
			{
				children
			}
		</motion.div>
	)
};

export default Parent;
