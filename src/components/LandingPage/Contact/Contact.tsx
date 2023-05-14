"use client"
import { Parent } from '@/components/Animation/Appear/Parent';
import React from 'react';
import { WhatsAppButton } from '../WhatsAppButton';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { Children } from '@/components/Animation/Appear/Children';
import { Social } from '../Social';

export interface ContactProps {
}

const Contact: React.FC<ContactProps> = () => {
	return (
		<article className='flex max-w-[1000px] mx-auto h-[calc(100vh-70px)] min-h-[650px] px-4 lg:px-0 pb-[80px] md:pb-0 md:mb-[60px] pt-[20px] md:pt-[100px] overflow-hidden'>
			<Parent delayChildren={.2} staggerChildren={.2} className='flex flex-col gap-[30px] h-full w-full items-center justify-center'>
				<Children duration={.7} y={30}>
					<h2 className='text-electricblue text-[clamp(35px,6vw,45px)] capitalize font-normal'>Contacta conmigo</h2>
				</Children>
				<div className='flex flex-col justify-center items-center gap-[30px]'>
					<Children duration={.7} y={30}>
						<p className='text-center text-lavender text-[clamp(16px,2vw,18px)] w-full max-w-[585px]'>Actualmente estoy en busca de nuevas oportunidades y experiencias
							relacionadas con el desarrollo de software en general. Puedes
							comunicarte conmigo via correo electrónico o WhatsApp</p>
					</Children>
					<Children duration={.7} y={30} className='w-full flex justify-center'>
						<WhatsAppButton />
					</Children>
					<div className='flex flex-col gap-[15px] items-center'>
						<Children duration={.7} y={30}>
							<Social className='flex gap-[25px] text-[35px] text-lavender' iconsSize={30}/>
						</Children>
						<Children duration={.7} y={30}>
							<h3 title='Click para copiar el correo' className='text-lavender hover:text-electricblue cursor-default text-[clamp(16px,2vw,18px)]'>frankvillachica@outlook.com</h3>
						</Children>
					</div>
				</div>
			</Parent>
		</article>
	);
};

export default Contact;
