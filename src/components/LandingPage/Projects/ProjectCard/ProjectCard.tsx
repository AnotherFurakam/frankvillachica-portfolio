"use client"
import React, { useState } from 'react';
import { FaGithub, FaRocket } from 'react-icons/fa';
import { BiRocket } from 'react-icons/bi';
import { Children } from '@/components/Animation/Appear/Children';

export interface ProjectCardProps {
}

const ProjectCard: React.FC<ProjectCardProps> = () => {

	const [isHovered, setIsHovered] = useState(false)

	const handleHoverIn = () => setIsHovered(true)
	const handleHoverOut = () => setIsHovered(false)

	return (
		<div className='w-full h-auto min-h-[260px] bg-coolblack p-[15px] rounded-[5px] flex flex-col gap-[15px] hover:translate-y-[-5px] transition-all delay-[100ms_ease-in] cursor-pointer z-20' onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
			<div className={`flex gap-[10px] items-center w-full`}>
				<span className={`${isHovered ? 'bg-electricblue' : 'bg-lavender'} w-full h-[2px]`}></span>
				<FaGithub size={30} className='text-lavender hover:text-electricblue' />
				<BiRocket size={35} className='text-lavender hover:text-electricblue' />
			</div>
			<div>
				<h3 className={`${isHovered ? 'text-electricblue' : 'text-lavender'} text-[24px] font-bold`}>Título</h3>
				<p className='text-lavender w-full h-[93px] md:h-[100px] overflow-hidden line-clamp-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquam hic amet enim error nobis dolor? Amet laborum possimus nesciunt repellat doloremque, commodi maiores. Tempora voluptates perferendis harum aliquam iure?</p>
			</div>
			<div className='flex gap-[5px] justify-end w-full'>
				<span className={`${isHovered ? 'text-electricblue' : 'text-skyblue'}`}>Next.js</span>
				<span className={`${isHovered ? 'text-electricblue' : 'text-skyblue'}`}>Next.js</span>
			</div>
		</div>
	)
};

export default ProjectCard;
