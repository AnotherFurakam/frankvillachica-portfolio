import React from 'react';
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

export interface SocialProps {
	iconsSize: number
	className: string
}

const Social: React.FC<SocialProps> = ({className, iconsSize}) => {
	return (
		<div className={className}>
			<a href="https://www.instagram.com/frankvillachica/" target='_blank' className='hover:translate-y-[-4px] transition-all delay-75'>
				<BsInstagram size={iconsSize} className='hover:text-electricblue' />
			</a>
			<a href="https://github.com/AnotherFurakam" target='_blank' className='hover:translate-y-[-4px] transition-all delay-75'>
				<BsGithub size={iconsSize} className='hover:text-electricblue' />
			</a>
			<a href="https://www.linkedin.com/in/frank-villachica-gaspar-3b773722a/" target='_blank' className='hover:translate-y-[-4px] transition-all delay-75'>
				<FaLinkedinIn size={iconsSize} className='hover:text-electricblue' />
			</a>
		</div>
	);
};

export default Social;
