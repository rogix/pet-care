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

	const finalClass = className ? className : defaultClass;

	switch (variant) {
		case 'h1':
			return <h1 className={finalClass}>{children}</h1>;
		case 'h2':
			return <h2 className={finalClass}>{children}</h2>;
		case 'h3':
			return <h3 className={finalClass}>{children}</h3>;
		case 'p':
			return <p className={finalClass}>{children}</p>;
		default:
			return <p className={finalClass}>{children}</p>;
	}
};
