"use client"
import React, { useState } from 'react';
import { FaGithub, FaRocket } from 'react-icons/fa';
import { BiRocket } from 'react-icons/bi';
import { Children } from '@/components/Animation/Appear/Children';
import { IProject } from '@/interface/project.interface';

export interface ProjectCardProps {
	project: IProject
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

	const [isHovered, setIsHovered] = useState(false)

	const handleHoverIn = () => setIsHovered(true)
	const handleHoverOut = () => setIsHovered(false)

	return (
		<div className='w-full h-auto min-h-[260px] bg-coolblack p-[15px] rounded-[5px] flex flex-col gap-[15px] hover:translate-y-[-5px] transition-all delay-[100ms_ease-in] cursor-pointer z-20' onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>
			<div className={`flex gap-[10px] items-center w-full`}>
				<span className={`${isHovered ? 'bg-electricblue' : 'bg-lavender'} w-full h-[2px] my-[14px]`}></span>
				{
					project.github_link ?
						<a href={project.github_link} target='_blank' className='w-[30px] h-[30px]'>
							<FaGithub size={30} className='text-lavender hover:text-electricblue' />
						</a>
						: null
				}
				{
					project.deploy_link ?
						<a href={project.deploy_link} target='_blank' className='w-[30px] h-[30px]'>
							<BiRocket size={35} className='text-lavender hover:text-electricblue' />
						</a>
						: null
				}
			</div>
			<div className='flex flex-col gap-[15px]'>
				<h3 className={`${isHovered ? 'text-electricblue' : 'text-lavender'} text-[24px] font-bold`}>{project.title}</h3>
				<p className='text-lavender w-full h-[93px] md:h-[100px] overflow-hidden line-clamp-4'>{project.description}</p>
			</div>
			<div className='flex gap-[10px] justify-end w-full'>
				{
					project.technologies.map(
						(t, i) => <span key={i} className={`text-[14px] ${isHovered ? 'text-electricblue' : 'text-skyblue'}`}>{t}</span>
					)
				}
			</div>
		</div>
	)
};

export default ProjectCard;
