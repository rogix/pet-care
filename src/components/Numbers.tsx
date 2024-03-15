import CountUpComponent from '../shared/CountUp';

export function Numbers() {
	return (
		<section className="bg-teal py-10 lg:h-80 lg:py-0">
			<div className="container grid h-full grid-cols-1 items-center justify-items-center gap-5 text-white md:grid-cols-2 lg:grid-cols-4">
				<div className="flex flex-col items-center">
					<div className="flex items-center gap-2 text-center text-5xl">
						<CountUpComponent start={0} end={300} delay={0.5} duration={1.5} />
						<span className="text-base text-gold">+</span>
					</div>
					<p className="text-xl">Happy Pets</p>
				</div>
				<div className="flex flex-col items-center">
					<div className="flex items-center gap-2 text-center text-5xl">
						<CountUpComponent start={0} end={15} delay={0.5} duration={1.5} />
						<span className="text-5xl text-white">k</span>
						<span className="text-base text-gold">+</span>
					</div>
					<p className="text-xl">Walks Completed</p>
				</div>
				<div className="flex flex-col items-center">
					<div className="flex items-center gap-2 text-center text-5xl">
						<CountUpComponent start={0} end={10} delay={0.5} duration={1.5} />
						<span className="text-5xl text-white">k</span>
						<span className="text-base text-gold">+</span>
					</div>
					<p className="text-xl">Meals Served</p>
				</div>
				<div className="flex flex-col items-center">
					<div className="flex items-center gap-2 text-center text-5xl">
						<CountUpComponent start={0} end={98} delay={0.5} duration={1.5} />
						<span className="text-5xl text-white">%</span>
						<span className="text-base text-gold">+</span>
					</div>
					<p className="text-xl">Trusted Clients</p>
				</div>
			</div>
		</section>
	);
}
