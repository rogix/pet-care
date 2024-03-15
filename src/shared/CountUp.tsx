import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface CountUpComponentProps {
	start: number;
	end: number;
	delay?: number;
	duration?: number;
}

const CountUpComponent: React.FC<CountUpComponentProps> = ({
	start,
	end,
	delay = 0,
	duration = 1.5
}) => {
	const { ref, inView } = useInView({
		triggerOnce: true
	});

	return (
		<div ref={ref}>
			<CountUp start={start} end={end} delay={delay} duration={duration}>
				{({ countUpRef, start }) => {
					if (inView) {
						start();
					}
					return <span ref={countUpRef} />;
				}}
			</CountUp>
		</div>
	);
};

export default CountUpComponent;
