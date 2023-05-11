import Image from 'next/image';
import React from 'react';
import { WhatsAppButton } from '../WhatsAppButton';
import { ViewAnimationContainer } from '@/components/ViewAnimationContainer';

export type AboutMeProps = {
}

const AboutMe: React.FC<AboutMeProps> = () => {
	return (
		<article className='flex max-w-[1000px] mx-auto h-[calc(100vh-70px)] min-h-[650px] px-4 lg:px-0 pb-[100px]'>
			<div className='flex flex-col gap-[20px] md:gap-[40px] my-auto'>
				<ViewAnimationContainer>
					<h2 className='text-peach text-[32px] capitalize font-normal'>sobre mi</h2>
				</ViewAnimationContainer>
				<div className='flex flex-col-reverse md:flex-row gap-[30px]'>
					<ViewAnimationContainer>
						<div className='w-[250px] h-[250px] relative mx-auto'>
							<Image src={'https://res.cloudinary.com/furakam/image/upload/v1675621495/furafolio/profile/conejo_cirfwy.jpg'} fill alt='frankvillachica.png' />
						</div>
					</ViewAnimationContainer>
					<ViewAnimationContainer delay={.1}>
						<div className='w-full max-w-[650px] flex flex-col gap-[30px]'>
							<p className='text-lavender text-[clamp(16px,2vw,17px)] font-normal'>Egresado  de  la  carrera  de Desarrollo de Sistemas de la información en Idat. Me encanta la programación  y  el  desarrollo de software en general. Actualmente me dedico al desarrollo web pero también tengo interés aprender  desarrollo  móvil.  Soy  una  persona autodidacta que aprende constantemente las nuevas tecnologías que van surgiendo. Mi meta actual es formar parte de un equipo desarrollo  profesional  de  software,  poner  en práctica mis conocimientos y aprender mucho de mis compañeros.
								Actualmente me llama más la atención el desarrollo backend aunque tambien he aprendido desarrollo front-end.
								La mayoría de mis proyectos son de nivel académico pero he tenido la oportunidad de trabajar para la empresa <a className='text-electricblue hover:underline cursor-pointer'>Baza</a> como desarrollador front-end FreeLancer en la creación de su página web utilizando el framework Nextjs. Aunque tengo conocimientos en diferentes tecnologías últimamente le he dado mas énfasis al lenguaje java con el framework springboot y a typescript con el famework nestjs utilizando MySQL y PostgreSQL como base de datos.
								Si desea contacta conmigo de una forma mas directa, puede enviarme un mensaje via WhatsApp.</p>
							<ViewAnimationContainer delay={.2}>
								<WhatsAppButton />
							</ViewAnimationContainer>
						</div>
					</ViewAnimationContainer>
				</div>
			</div>
		</article>
	);
};

export default AboutMe;
