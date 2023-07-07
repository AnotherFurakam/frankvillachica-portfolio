"use client"

import { useEffect, type FC, Dispatch, SetStateAction, useRef } from 'react';
import CurriculumBtn from './CurriculumBtn';

import { motion } from 'framer-motion'
import { Link } from 'react-scroll';
import { Parent } from '../Animation/Appear/Parent';
import { Children } from '../Animation/Appear/Children';

interface MobileNavbarProps {
  closeHandler: Dispatch<SetStateAction<boolean>>
}

const MobileNavMenu: FC<MobileNavbarProps> = ({ closeHandler }) => {

  //Capturar click fuera del menu y cambiar el estado a cerrado

  let menuRef = useRef<any>()

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current.contains(e.target)) {
        closeHandler(false)
      }
    }

    document.addEventListener("mousedown", handler)

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  return (
    <Parent delayChildren={.2} staggerChildren={.08}>
      <motion.ul
        initial={{ width: 0 }}
        animate={{ width: 250 }}
        transition={{ duration: 0.1, ease: "easeIn" }}
        exit={{ width: 0, transition: { duration: 0.1, ease: "easeOut" } }}
        className={`text-[18px] md:hidden fixed bg-coolblack right-0 top-0 pt-28 w-[250px] flex flex-col items-center gap-5 overflow-hidden h-screen`}
        ref={menuRef}
      >
        <li className="text-skyblue hover:text-electricblue cursor-default">
          <Children duration={.05} x={20}>
            <Link to='sobremi' smooth delay={200} onClick={() => closeHandler(true)}>
              Sobre mi
            </Link>
          </Children>
        </li>
        <li className="text-skyblue hover:text-electricblue cursor-default">
          <Children duration={.05} x={20}>
            <Link to='habilidades' smooth delay={200} onClick={() => closeHandler(true)}>
              Habilidades
            </Link>
          </Children>
        </li>
        <li className="text-skyblue hover:text-electricblue cursor-default">
          <Children duration={.05} x={20}>
            <Link to='proyectos' smooth delay={200} onClick={() => closeHandler(true)}>
              Proyectos
            </Link>
          </Children>
        </li>
        <li className="text-skyblue hover:text-electricblue cursor-default">
          <Children duration={.05} x={20}>
            <Link to='contacto' smooth delay={200} onClick={() => closeHandler(true)}>
              Contacto
            </Link>
          </Children>
        </li>
        {/* <Children duration={.05} x={20}>
          <div>
            <CurriculumBtn />
          </div>
        </Children> */}
      </motion.ul>
    </Parent>
  );
}
export default MobileNavMenu;