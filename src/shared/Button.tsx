import React from 'react';
import Arrow from '../assets/arrow-right.png';
import { motion } from 'framer-motion';

interface ButtonProps {
	text: string;
}

const CustomButton: React.FC<ButtonProps> = ({ text }) => {
	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{ duration: 0.3 }}
			className="mt-6 flex h-[52px] w-[210px] items-center justify-center rounded-full bg-light-red px-6 py-2 font-readex text-base text-white"
		>
			{text}
			<img src={Arrow} alt={text} className="ml-2" />
		</motion.button>
	);
};

export default CustomButton;
