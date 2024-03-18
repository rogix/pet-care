import Paw from '../assets/paw.png';

export function PageCall({ pageTitle }: { pageTitle: string }) {
	return (
		<section className="mb-28 flex h-[500px] items-center justify-center bg-teal">
			<div className="relative flex w-[400px] flex-col items-center justify-center">
				<img src={Paw} alt="paw" className="absolute mx-auto" />
				<h1 className="absolute text-7xl text-white">{pageTitle}</h1>
			</div>
		</section>
	);
}
