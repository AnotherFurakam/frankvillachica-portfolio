"use client"

import { useEffect, type FC, Dispatch, SetStateAction, useRef } from 'react';
import CurriculumBtn from './CurriculumBtn';

import { motion } from 'framer-motion'
import { Link } from 'react-scroll';

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
    <motion.ul
      initial={{ width: 0 }}
      animate={{ width: 250 }}
      transition={{ duration: 0.1, ease: "easeIn" }}
      exit={{ width: 0, transition: { duration: 0.1, ease: "easeOut" } }}
      className={`text-[18px] md:hidden fixed bg-coolblack right-0 top-0 pt-28 w-[250px] flex flex-col items-center gap-5 overflow-hidden h-screen`}
      ref={menuRef}
    >
      <li className="text-skyblue hover:text-electricblue cursor-default">
        <Link to='sobremi' smooth delay={200} onClick={() => closeHandler(true)}>
          Sobre mi
        </Link>
      </li>
      <li className="text-skyblue hover:text-electricblue cursor-default">
        <Link to=''>
          Habilidades
        </Link>
      </li>
      <li className="text-skyblue hover:text-electricblue cursor-default">
        <Link to=''>
          Proyectos
        </Link>
      </li>
      <li className="text-skyblue hover:text-electricblue cursor-default">
        <Link to=''>
          Contacto
        </Link>
      </li>
      <CurriculumBtn />
    </motion.ul>
  );
}
export default MobileNavMenu;