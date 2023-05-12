"use client"
import { Reveal } from '@/components/Animation/Reveal';
import React from 'react';
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

export type IntroductionProps = {
}

const Introduction: React.FC<IntroductionProps> = () => {
	return (
		<article className='flex-col md:flex-row flex justify-center md:justify-between h-[calc(100vh-70px)] min-h-[650px] px-4 lg:px-0 max-w-[1000px] mx-auto gap-10 md:gap-0 md:pb-[100px]'>
			<Reveal duration={.5} y={20}>
				<div className='flex items-center h-full'>
					<div>
						<span className='text-peach text-[clamp(25px,5vw,30px)] font-normal'>Hola</span>
						<h1 className='text-electricblue text-[clamp(38px,7vw,55px)] font-bold'>Soy Frank Villachica.</h1>
						<h2 className='text-lavender text-[clamp(38px,7vw,55px)] font-bold'>Desarrollador Web Junior.</h2>
						<h3 className='text-skyblue text-[clamp(30px,5vw,40px)] font-bold'>Lima - Perú</h3>
						<p className='text-lavender text-[clamp(16px,2vw,17px)] font-normal max-w-[620px]'>
							Mi meta es convertirme en un desarrollador web <span className='text-electricblue'>fullstack</span> capas de construir soluciones web de calidad. Espero que mi perfil sea lo que buscas y podamos trabajar juntos.
						</p>
					</div>
				</div>
			</Reveal>
			<Reveal duration={.5} x={20} delay={.5}>
				<div className='flex justify-center items-center h-full'>
					<div className='flex md:flex-col gap-[25px] text-[35px] text-lavender'>
						<a href="" className='hover:translate-y-[-4px] transition-all delay-75'><BsInstagram className='hover:text-electricblue' /></a>
						<a href="" className='hover:translate-y-[-4px] transition-all delay-75'><BsGithub className='hover:text-electricblue' /></a>
						<a href="" className='hover:translate-y-[-4px] transition-all delay-75'><FaLinkedinIn className='hover:text-electricblue' /></a>
					</div>
				</div>
			</Reveal>
		</article>
	);
};

export default Introduction;
