import React from 'react';

interface ArrowIconProps {
	color?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ color }) => (
	<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="16" width="16" height="16" rx="8" transform="rotate(90 16 0)" fill={color} />
		<path
			d="M6.66667 11.3334L10 8.00008L6.66667 4.66675"
			stroke="white"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);

export default ArrowIcon;
