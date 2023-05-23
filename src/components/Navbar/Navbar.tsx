"use client"
import { useEffect, useState } from "react";
import CurriculumBtn from "./CurriculumBtn";
import { HiBars3, HiOutlineXMark } from 'react-icons/hi2'
import MobileNavMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Parent } from "../Animation/Appear/Parent";
import { Children } from "../Animation/Appear/Children";
import Image from "next/image";
import NextLink from "next/link";

export interface NavbarProps {
}

const Navbar: React.FC<NavbarProps> = () => {
	//Navbar scroll
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const [withShadow, setWithShadow] = useState(false) //Habilitar sombra del navbar

	const handleScroll = () => {
		const currentScrollPos = window.scrollY

		if (currentScrollPos > prevScrollPos) {
			setVisible(false)
		} else {
			setVisible(true)
		}

		if (currentScrollPos !== 0) {
			setWithShadow(true)
		} else {
			setWithShadow(false)
		}

		setPrevScrollPos(currentScrollPos)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll)
	})

	//Open mobile menu
	const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)


	const handleToggleMobileMenu = () => {
		setIsOpenMobileMenu(!isOpenMobileMenu)
		//Ocultando el scrollbar del body
		if (!isOpenMobileMenu) {
			document.body.classList.add("overflow-hidden")
		} else {
			document.body.classList.remove("overflow-hidden")
		}
	}

	return (
		<header className={`w-full bg-oceanblue bg-opacity-75 backdrop-blur-md sticky ${visible ? 'top-0' : 'top-[-70px]'} transition-all delay-100 ${withShadow ? 'shadow-xl' : ''} z-10 relative`}>
			<Parent delayChildren={.2} staggerChildren={.2}>
				<nav className="flex w-full justify-between p-[15px] h-[70px] items-center relative">
					<Children duration={.7} x={10}>
						<NextLink href={'/'}>
							<Image src={'/img/logo.svg'} className="hover:-translate-y-[3px] transition-[100ms_easeinout]" alt="logo.svg" width={50} height={50} />
						</NextLink>
					</Children>
					{
						!isOpenMobileMenu ?
							<HiBars3 className="md:hidden text-skyblue text-[35px] hover:text-electricblue cursor-pointer z-20" onClick={handleToggleMobileMenu} />
							:
							<HiOutlineXMark className="md:hidden text-skyblue text-[35px] hover:text-electricblue cursor-pointer z-20" onClick={handleToggleMobileMenu} />
					}
					<ul className="hidden md:flex gap-[20px] items-center text-[15px]">
						<li className="text-skyblue hover:text-electricblue cursor-default">
							<Children duration={.7} x={10}>
								<Link to="sobremi" smooth duration={500}>Sobre mi</Link>
							</Children>
						</li>
						<li className="text-skyblue hover:text-electricblue cursor-default">
							<Children duration={.7} x={10}>
								<Link to="habilidades" smooth duration={500}>Habilidades</Link>
							</Children>
						</li>
						<li className="text-skyblue hover:text-electricblue cursor-default">
							<Children duration={.7} x={10}>
								<Link to="proyectos" smooth duration={500}>Proyectos</Link>
							</Children>
						</li>
						<li className="text-skyblue hover:text-electricblue cursor-default">
							<Children duration={.7} x={10}>
								<Link to="contacto" smooth duration={500} offset={100}>Contacto</Link>
							</Children>
						</li>
						<li>
							<Children duration={.7} x={10}>
								<CurriculumBtn />
							</Children>
						</li>
					</ul>
				</nav>
			</Parent>
			<AnimatePresence>
				{
					isOpenMobileMenu ?
						<MobileNavMenu closeHandler={handleToggleMobileMenu} /> : null
				}
			</AnimatePresence>
		</header>
	);
};

export default Navbar;
