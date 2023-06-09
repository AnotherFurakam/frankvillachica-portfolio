"use client"
import React from 'react';
import { SkillContainer } from './SkillContainer';
import { SkillCard } from './SkillCard';
import { SiCsharp, SiJavascript, SiTypescript, SiNestjs, SiSpringboot, SiDotnet, SiAstro, SiTailwindcss, SiBootstrap, SiMysql, SiPostgresql, SiMicrosoftsqlserver, SiMongodb, SiFigma, SiNotion, SiReact, SiNodedotjs, SiNetlify, SiCloudflare } from "react-icons/si";
import { Reveal } from '@/components/Animation/Reveal';
import { FaJava } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { AiOutlineCloudUpload } from 'react-icons/ai';

export type SkillsProps = {
}

const Skills: React.FC<SkillsProps> = () => {
	return (
		<article className='flex max-w-[1000px] mx-auto h-auto lg:h-[calc(100vh-70px)] min-h-[650px] px-4 lg:px-0 pb-[80px] md:pb-0 md:mb-[60px] md:pt-[100px]'>
			<div className='flex flex-col gap-[20px] w-full'>
				<Reveal duration={.7} y={20}>
					<h2 className='text-peach text-[32px] capitalize font-normal'>Habilidades</h2>
				</Reveal>
				<div className='grid grid-cols-[repeat(auto-fill,minmax(min(100%,185px),1fr))] auto-rows-auto w-full gap-8 md:gap-4 mx-auto'>
					<SkillContainer title='Lenguajes' >
						<SkillCard title='Javascript' stars={4} icon={<SiJavascript className='w-full h-full' />} />
						<SkillCard title='Typescript' stars={4} icon={<SiTypescript className='w-full h-full' />} />
						<SkillCard title='Java' stars={3} icon={<FaJava className='w-full h-full' />} />
						<SkillCard title='C#' stars={2} icon={<SiCsharp className='w-full h-full' />} />
					</SkillContainer>
					<SkillContainer title='Frameworks'>
						<SkillCard title='Next.js' stars={3} icon={<TbBrandNextjs className='w-full h-full' />} />
						<SkillCard title='Nestjs' stars={3} icon={<SiNestjs className='w-full h-full' />} />
						<SkillCard title='Springboot' stars={3} icon={<SiSpringboot className='w-full h-full' />} />
						<SkillCard title='.Net' stars={2} icon={<SiDotnet className='w-full h-full' />} />
						{/* <SkillCard title='Astro' stars={3} icon={<SiAstro className='w-full h-full' />} /> */}
						<SkillCard title='Tailwind CSS' stars={3} icon={<SiTailwindcss className='w-full h-full' />} />
						<SkillCard title='Bootstrap' stars={4} icon={<SiBootstrap className='w-full h-full' />} />
					</SkillContainer>
					<SkillContainer title='Bases de datos'>
						<SkillCard title='MySql' stars={3} icon={<SiMysql className='w-full h-full' />} />
						<SkillCard title='PostgreSQL' stars={2} icon={<SiPostgresql className='w-full h-full' />} />
						<SkillCard title='MS SqlServer' stars={3} icon={<SiMicrosoftsqlserver className='w-full h-full' />} />
						<SkillCard title='Mongo DB' stars={1} icon={<SiMongodb className='w-full h-full' />} />
					</SkillContainer>
					<SkillContainer title='Servicios'>
						<SkillCard title='Cloudinary' stars={2} icon={<AiOutlineCloudUpload className='w-full h-full' />} />
						<SkillCard title='Netlify' stars={2} icon={<SiNetlify className='w-full h-full' />} />
						<SkillCard title='Cloudflare' stars={1} icon={<SiCloudflare className='w-full h-full' />} />
					</SkillContainer>
					<SkillContainer title='Otros'>
						<SkillCard title='Figma' stars={3} icon={<SiFigma className='w-full h-full' />} />
						<SkillCard title='Notion' stars={3} icon={<SiNotion className='w-full h-full' />} />
						<SkillCard title='Reactjs' stars={4} icon={<SiReact className='w-full h-full' />} />
						<SkillCard title='Node' stars={4} icon={<SiNodedotjs className='w-full h-full' />} />
					</SkillContainer>

				</div>
			</div>
		</article>
	)
};

export default Skills;
