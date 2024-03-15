import React from 'react';

type TypographyProps = {
	variant: 'h1' | 'h2' | 'h3' | 'p';
	className?: string;
	children: React.ReactNode;
};

export const Typography: React.FC<TypographyProps> = ({ variant, className, children }) => {
	let defaultClass = '';

	switch (variant) {
		case 'h1':
			defaultClass = 'default-h1-class';
			break;
		case 'h2':
			defaultClass = 'text-teal';
			break;
		case 'h3':
			defaultClass = 'text-dark-gray text-5xl';
			break;
		case 'p':
			defaultClass = 'font-readex text-base';
			break;
		default:
			defaultClass = 'default-p-class';
			break;
	}

	const combinedClass = `${defaultClass} ${className}`;

	switch (variant) {
		case 'h1':
			return <h1 className={combinedClass}>{children}</h1>;
		case 'h2':
			return <h2 className={combinedClass}>{children}</h2>;
		case 'h3':
			return <h3 className={combinedClass}>{children}</h3>;
		case 'p':
			return <p className={combinedClass}>{children}</p>;
		default:
			return <p className={combinedClass}>{children}</p>;
	}
};
