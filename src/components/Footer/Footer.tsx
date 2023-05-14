"use client"
import React from 'react';
import { BiUpArrow } from 'react-icons/bi';
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

export type FooterProps = {
}

const Footer: React.FC<FooterProps> = () => {
	return (
		<footer className='mx-auto flex justify-between p-[15px] items-center w-full max-w-[1000px]'>
			<h2 className='text-lavender text-[17px]'>Desarrollado por <span className='text-electricblue'>furakam</span></h2>
			<Link to='hero' offset={-70} smooth className='flex w-[50px] h-[50px] rounded-[5px] p-[10px] border border-electricblue justify-center items-center hover:translate-y-[-5px] transition-all delay-[100ms_ease-in] cursor-pointer'>
				<FaArrowUp className='text-electricblue' />
			</Link>
		</footer>
	)
};

export default Footer;
