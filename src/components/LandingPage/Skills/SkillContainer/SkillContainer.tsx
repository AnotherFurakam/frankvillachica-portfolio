/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { Children, useEffect, useRef } from 'react';
import { Variants, motion, useAnimation, useInView } from "framer-motion";
import { Reveal } from '@/components/Reveal';

export interface SkillBoxProps {
	title: string
	children: React.ReactNode
}

const SkillContainer: React.FC<SkillBoxProps> = ({ title, children }) => {

	const variants: Variants = {
		hidden: {
			opacity: 0
		},
		show: {
			opacity: 1,
			transition: {
				bounce: 0,
				delayChildren: 0.5,
				staggerChildren: 0.2
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
		<div
			className='flex flex-col gap-[20px]'
		>
			<Reveal>
				<h3 className='text-electricblue text-[22px] font-normal'>{title}</h3>
			</Reveal>
			<motion.div
				ref={ref}
				variants={variants}
				initial="hidden"
				animate={mainControls}
				className='flex flex-col gap-[10px]'>
				{children}
			</motion.div>
		</div>
	);
};

export default SkillContainer;
