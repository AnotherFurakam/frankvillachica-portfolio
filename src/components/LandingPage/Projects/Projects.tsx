/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { Parent } from '@/components/Animation/Appear/Parent';
import React, { useEffect, useRef, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { Reveal } from '@/components/Animation/Reveal';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css"
import "swiper/css/grid"

import { Grid, Swiper as SwiperType } from "swiper";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Children } from '@/components/Animation/Appear/Children';

export type ProjectsProps = {
}

const Projects: React.FC<ProjectsProps> = () => {

	const swiperRef = useRef<SwiperType>();

	const [prevButtonDisable, setPrevButtonDisable] = useState<boolean | null>(true)
	const [nextButtonDisable, setNextButtonDisable] = useState<boolean | null>(true)

	const handlePrevSlide = () => {
		swiperRef.current?.slidePrev()
	}

	const handleNextSlide = () => {
		swiperRef.current?.slideNext()
	}

	useEffect(() => {
		if (swiperRef.current) {
			//Detectando si hay mas de 6 slides para desabilitar o habilitar el boton
			if (swiperRef.current.slides.length > 6) {
				setPrevButtonDisable(swiperRef.current.isBeginning);
				setNextButtonDisable(false)
			}

			//Detectando si hay slides fuera del borde
			swiperRef.current.on('fromEdge', () => {
				setPrevButtonDisable(false);
				setNextButtonDisable(false);
			})

			//Detectando cuando la transición ya termino y modificando el estado de los botones
			swiperRef.current.on('slideChangeTransitionEnd', () => {
				setPrevButtonDisable(swiperRef.current?.isBeginning ?? true);
				setNextButtonDisable(swiperRef.current?.isEnd ?? false);
			})

			//Detectando el evento de cada cada breakpoint, si recivimos el paramentro event podremos saber tambien en que numero de breackpoint nos encontramos (ese número es de tipo string)
			swiperRef.current.on('breakpoint', () => {

				//Detectamos el evento cuando se termina la transición de los slides, es decir que esto se ejecuta cuando termina de acomodarse los slides despues de que un breackpoint se ejecute
				swiperRef.current?.on('transitionEnd', () => {
					setPrevButtonDisable(swiperRef.current?.isBeginning ?? true);
					setNextButtonDisable(swiperRef.current?.isEnd ?? true);
				})
			})
		}
	}, [])

	return (
		<article className='flex max-w-[1000px] mx-auto h-auto md:h-[calc(100vh-70px)] min-h-[650px] px-4 lg:px-0 pb-[80px] md:pb-0 md:mb-[60px] md:pt-[100px] overflow-hidden'>
			<Parent delayChildren={.2} staggerChildren={.2} className='w-full flex flex-col'>
				<Reveal y={20} duration={.7}>
					<div className='flex justify-between'>
						<h2 className='text-peach text-[32px] capitalize font-normal'>Proyectos</h2>
						<div className='flex items-center gap-5'>
							<div className={`cursor-pointer ${prevButtonDisable || prevButtonDisable === null ? 'text-metalicblue' : 'text-skyblue'}`} onClick={handlePrevSlide}>
								<BsChevronLeft size={20} />
							</div>
							<div className={`cursor-pointer ${nextButtonDisable || prevButtonDisable === null ? 'text-metalicblue' : 'text-skyblue'}`} onClick={() => handleNextSlide()}>
								<BsChevronRight size={20} />
							</div>
						</div>
					</div>
				</Reveal>
				<Swiper
					onBeforeInit={(swiper) => {
						swiperRef.current = swiper
					}}
					allowTouchMove={false}
					breakpoints={{
						0: {
							slidesPerView: 1,
							slidesPerGroup: 1,
							spaceBetween: 50,
							grid: {
								rows: 2,
								fill: "row"
							}
						},
						750: {
							slidesPerView: 2,
							slidesPerGroup: 2,
							spaceBetween: 50,
							grid: {
								rows: 2,
								fill: "row"
							}
						},
						1120: {
							slidesPerView: 3,
							slidesPerGroup: 3,
							spaceBetween: 50,
							grid: {
								rows: 2,
								fill: "row"
							}
						}
					}}
					modules={[Grid]}
					className='mySwiper w-full max-w-[1000px] h-auto pt-[30px_!important]'
				>
					<SwiperSlide>
						<Children duration={.2} y={5}>
							<ProjectCard />
						</Children>
					</SwiperSlide>
					<SwiperSlide>
						<Children duration={.2} y={5}>
							<ProjectCard />
						</Children>
					</SwiperSlide>
					<SwiperSlide>
						<Children duration={.2} y={5}>
							<ProjectCard />
						</Children>
					</SwiperSlide>
					<SwiperSlide>
						<Children duration={.2} y={5}>
							<ProjectCard />
						</Children>
					</SwiperSlide>
					<SwiperSlide>
						<Children duration={.2} y={5}>
							<ProjectCard />
						</Children>
					</SwiperSlide>
					<SwiperSlide>
						<Children duration={.2} y={5}>
							<ProjectCard />
						</Children>
					</SwiperSlide>
					<SwiperSlide>
						<Children duration={.2} y={5}>
							<ProjectCard />
						</Children>
					</SwiperSlide>
					<SwiperSlide>
						<Children duration={.2} y={5}>
							<ProjectCard />
						</Children>
					</SwiperSlide>
					<SwiperSlide>
						<Children duration={.2} y={5}>
							<ProjectCard />
						</Children>
					</SwiperSlide>
					<SwiperSlide>
						<Children duration={.2} y={5}>
							<ProjectCard />
						</Children>
					</SwiperSlide>
					<SwiperSlide>
						<Children duration={.2} y={5}>
							<ProjectCard />
						</Children>
					</SwiperSlide>
					<SwiperSlide>
						<Children duration={.2} y={5}>
							<ProjectCard />
						</Children>
					</SwiperSlide>
				</Swiper>
			</Parent>

		</article>
	)
};

export default Projects;
