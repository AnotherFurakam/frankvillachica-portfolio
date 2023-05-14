import React from 'react';
import { BsWhatsapp } from "react-icons/bs";

export type WhatsAppButtonProps = {
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = () => {

	const message = "https://wa.me/+51924407063?text=Hola+Frank"

	return (
		<a href={message} target='_blank' className='mx-auto md:mx-0 text-electricblue rounded-[5px] flex gap-[30px] justify-center items-center border border-electricblue w-full max-w-[180px] h-[45px] text-[18px] cursor-pointer hover:translate-y-[-3px] transition-all delay-[.15ms]'><p>Salúdame</p><BsWhatsapp className='text-[25px]'/></a>
	);
};

export default WhatsAppButton;
