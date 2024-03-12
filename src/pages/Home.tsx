import { Header } from '../components/Header';

export function Home() {
	return (
		<div>
			<Header />
			<section className="bg-off-white h-[calc(100vh-112px)]">
				<h1 className="text-4xl font-bold">Home</h1>
				<p>Welcome to the home page. You can use the links above to navigate to other pages.</p>
			</section>
		</div>
	);
}
