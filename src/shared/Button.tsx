import React from 'react';
import Arrow from '../assets/arrow-right.png';

interface ButtonProps {
	text: string;
}

const CustomButton: React.FC<ButtonProps> = ({ text }) => {
	return (
		<button className="bg-light-red font-readex mt-6 flex h-[52px] w-[210px] items-center justify-center rounded-full px-6 py-2 text-base text-white">
			{text}
			<img src={Arrow} alt={text} className="ml-2" />
		</button>
	);
};

export default CustomButton;
