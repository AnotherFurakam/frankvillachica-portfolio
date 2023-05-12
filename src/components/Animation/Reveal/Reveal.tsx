/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';

export interface RevealProps {
	children: React.ReactNode
	delay?: number
	duration?: number
	x?: number
	y?: number
}

const Reveal: React.FC<RevealProps> = ({ children, delay, duration, x, y }) => {

	const ref = useRef(null)

	const variants: Variants = {
		hidden: {
			opacity: 0,
			y: y ? y : 0,
			x: x ? x : 0
		},
		visible: {
			opacity: 1,
			y: 0,
			x: 0
		}
	}

	const isInView = useInView(ref, {
		once: true,
	})

	const mainControls = useAnimation()

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible")
		}
	}, [isInView])

	return (
		<motion.div
			variants={variants}
			ref={ref}
			initial="hidden"
			animate={mainControls}
			transition={{ duration: duration??.7, delay: delay ?? 0, ease: "easeIn" }}
		>
			{
				children
			}
		</motion.div>
	)
};

export default Reveal;
