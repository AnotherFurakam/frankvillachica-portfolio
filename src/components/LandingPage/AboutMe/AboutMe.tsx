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
		<article className='flex max-w-[1000px] mx-auto h-auto md:h-[calc(100vh-70px)] min-h-[650px] px-4 lg:px-0 pb-[80px] md:pb-0 md:mb-[60px] pt-[40px] md:pt-[100px]'>
			<Reveal y={20} duration={.7} delay={.1}>
				<div className='flex flex-col gap-[20px] md:gap-[40px] my-auto'>
					<h2 className='text-peach text-[32px] capitalize font-normal'>sobre mi</h2>
					<div className='flex flex-col-reverse md:flex-row gap-[30px]'>
						<div className='w-[250px] min-w-[250px] h-[250px] relative mx-auto overflow-hidden rounded-md shadow-[-4px_4px_5px_2px_rgba(205,166,131,0.2)] rotate-1 hover:rotate-0 translate-y-2 hover:translate-y-0 transition-all delay-[100ms_easy-in]'>
							<div className='w-full h-full bg-oceanblue bg-opacity-40 absolute z-10 hover:bg-opacity-0 transition-all delay-[100ms_easy-in]'></div>
							<Image src={'/img/Furakam.jpeg'} fill alt='frankvillachica.png' className='z-0 object-cover' />
						</div>
						<div className='w-full max-w-[650px] flex flex-col gap-[30px]'>
							<div className='flex flex-col gap-2'>
								<p className='text-lavender text-[clamp(16px,2vw,17px)] font-normal'>Soy egresado de la carrera de Desarrollos de Sistemas de la información, con un enfoque especial en el desarrollo web. Me considero una persona autodidacta y apasionada por el mundo de la programación. Mi pasión por aprender constantemente me impulsa a asumir nuevos retos relacionados con mi carrera.</p>
								<p className={`text-lavender text-[clamp(16px,2vw,17px)] font-normal overflow-hidden ${!readMore && 'h-[0] md:h-auto transition-all delay-100'}`}>
									Poseo conocimientos solidos en Html, CSS, Javascript y Typescript, así como en lenguajes backend como Java y C#. Tengo experiencia en el desarrollo de sitios web responsivos y amigables para el usuario. Disfruto enfrentar desafíaos técnicos y encontrar soluciones creativas. Además, cuento con habilidades de trabajo en equipo y comunicación efectiva, lo que me permite colaborar de manera productiva en proyectos de software.<br></br> Estoy abierto a nuevas oportunidades y siempre estoy dispuesto a ampliar mis conocimientos para seguir creciendo como profesional en este campo.<br></br>
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
