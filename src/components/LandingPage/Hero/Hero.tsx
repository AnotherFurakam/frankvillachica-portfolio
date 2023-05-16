"use client"
import { Reveal } from '@/components/Animation/Reveal';
import React from 'react';
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Social } from '../Social';

export type HeroProps = {
}

const Hero: React.FC<HeroProps> = () => {
	return (
		<article className='flex-col md:flex-row flex justify-center md:justify-between h-[calc(100vh-70px)] min-h-[650px] px-4 lg:px-0 max-w-[1000px] mx-auto gap-10 md:gap-0 md:pb-[100px]'>
			<Reveal duration={.5} y={20}>
				<div className='flex items-center h-full'>
					<div>
						<span className='text-peach text-[clamp(25px,5vw,30px)] font-normal'>Hola</span>
						<h1 className='text-electricblue text-[clamp(38px,7vw,55px)] font-bold'>Soy Frank Villachica</h1>
						<h2 className='text-lavender text-[clamp(38px,7vw,55px)] font-bold'>Desarrollador Web</h2>
						<h3 className='text-skyblue text-[clamp(30px,5vw,40px)] font-bold'>Lima - Perú</h3>
						<p className='text-lavender text-[clamp(16px,2vw,17px)] font-normal max-w-[620px]'>
							Autodidacta y apasionado, siempre en busca de nuevos desafíos. Me encanta aprender y crecer constantemente. Dispuesto a aportar mi entusiasmo y compromiso en nuevos proyectos.
						</p>
					</div>
				</div>
			</Reveal>
			<Reveal duration={.5} x={20} delay={.5}>
				<div className='flex justify-center items-center h-full'>
					<Social className='flex md:flex-col gap-[25px] text-[35px] text-lavender' iconsSize={35} />
				</div>
			</Reveal>
		</article>
	);
};

export default Hero;
