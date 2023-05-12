"use client"
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Children } from '@/components/Animation/Appear/Children';

export interface SkillCardProps {
	title: string
	stars: number
	icon: React.ReactElement
}

const SkillCard: React.FC<SkillCardProps> = ({ title, stars, icon }) => {

	const filledStars = Array.from({ length: (stars > 5 ? 5 : stars) }, (_, index) => (
		<AiFillStar size={18} key={index} />
	))

	const unfilledStars = Array.from({ length: 5 - (stars > 5 ? 5 : stars) }, (_, index) => (<AiOutlineStar size={18} key={index} />))

	return (
		<Children
			duration={.3}
			y={20}
		>
			<div className='text-skyblue hover:text-lavender bg-oxfordblue hover:bg-coolblack p-[15px] rounded-[2px] flex items-center justify-center gap-[10px] cursor-default transition-all delay-[100ms_ease-in]'>
				<figure className='w-[37px] flex items-center'>
					{icon}
				</figure>
				<div className='flex flex-col justify-center gap-[5px]'>
					<h4 className='text-[16px]'>{title}</h4>
					<div className='flex gap-[5px]'>
						{
							filledStars
						}
						{
							unfilledStars
						}
					</div>
				</div>
			</div>
		</Children>
	);
};

export default SkillCard;
