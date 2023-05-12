"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { WhatsAppButton } from '../WhatsAppButton';
import { Reveal } from '@/components/Animation/Reveal';

export type AboutMeProps = {
}

const AboutMe: React.FC<AboutMeProps> = () => {

	const [readMore, setReadMore] = useState(false)

	const toggleReadMore = () => setReadMore(!readMore)

	return (
		<article className='flex max-w-[1000px] mx-auto h-auto md:h-[calc(100vh-70px)] min-h-[650px] px-4 lg:px-0 pb-[80px] md:pb-0 md:mb-[60px] md:pt-[100px]'>
			<Reveal y={20} duration={.7} delay={.1}>
				<div className='flex flex-col gap-[20px] md:gap-[40px] my-auto'>
					<h2 className='text-peach text-[32px] capitalize font-normal'>sobre mi</h2>
					<div className='flex flex-col-reverse md:flex-row gap-[30px]'>
						<div className='w-[250px] min-w-[250px] h-[250px] relative mx-auto overflow-hidden rounded-md shadow-[-4px_4px_5px_2px_rgba(205,166,131,0.2)] rotate-1 hover:rotate-0 translate-y-2 hover:translate-y-0 transition-all delay-[100ms_easy-in]'>
							<div className='w-full h-full bg-oceanblue bg-opacity-40 absolute z-10 hover:bg-opacity-0 transition-all delay-[100ms_easy-in]'></div>
							<Image src={'https://res.cloudinary.com/furakam/image/upload/v1675621495/furafolio/profile/conejo_cirfwy.jpg'} fill alt='frankvillachica.png' className='z-0' />
						</div>
						<div className='w-full max-w-[650px] flex flex-col gap-[30px]'>
							<div className='flex flex-col gap-2'>
								<p className='text-lavender text-[clamp(16px,2vw,17px)] font-normal'>Egresado  de  la  carrera  de Desarrollo de Sistemas de la información en Idat. Me encanta la programación  y  el  desarrollo de software en general. Actualmente me dedico al desarrollo web pero también tengo interés aprender  desarrollo  móvil.  Soy  una  persona autodidacta que aprende constantemente las nuevas tecnologías que van surgiendo. Mi meta actual es formar parte de un equipo desarrollo  profesional  de  software,  poner  en práctica mis conocimientos y aprender mucho de mis compañeros.</p>
								<p className={`text-lavender text-[clamp(16px,2vw,17px)] font-normal overflow-hidden ${!readMore && 'h-[0] md:h-auto transition-all delay-100'}`}>
									Actualmente me llama más la atención el desarrollo backend aunque tambien he aprendido desarrollo front-end.
									La mayoría de mis proyectos son de nivel académico pero he tenido la oportunidad de trabajar para la empresa <a className='text-electricblue hover:underline cursor-pointer'>Baza</a> como desarrollador front-end FreeLancer en la creación de su página web utilizando el framework Nextjs. Aunque tengo conocimientos en diferentes tecnologías últimamente le he dado mas énfasis al lenguaje java con el framework springboot y a typescript con el famework nestjs utilizando MySQL y PostgreSQL como base de datos.
									Si desea contacta conmigo de una forma mas directa, puede enviarme un mensaje via WhatsApp.</p>
								<span className='text-skyblue underline hover:text-electricblue cursor-default md:hidden' onClick={toggleReadMore}>
									{
										readMore ? 'Leer menos' : 'Leer más'
									}
								</span>
							</div>
							<WhatsAppButton />
						</div>
					</div>
				</div>
			</Reveal>
		</article>
	);
};

export default AboutMe;
