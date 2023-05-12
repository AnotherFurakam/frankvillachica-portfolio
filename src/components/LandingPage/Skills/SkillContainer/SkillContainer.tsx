/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { Reveal } from '@/components/Animation/Reveal';
import { Parent } from '@/components/Animation/Appear/Parent';

export interface SkillBoxProps {
	title: string
	children: React.ReactNode
}

const SkillContainer: React.FC<SkillBoxProps> = ({ title, children }) => {

	return (
		<div
			className='flex flex-col gap-[20px]'
		>
			<Reveal duration={.7} y={20}>
				<h3 className='text-electricblue text-[22px] font-normal'>{title}</h3>
			</Reveal>
			<Parent delayChildren={.5} staggerChildren={.2}
			>
				<div className='flex flex-col gap-[10px]'>
					{children}
				</div>
			</Parent>
		</div>
	);
};

export default SkillContainer;
