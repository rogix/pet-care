import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ProductsList } from '../components/ProductsList';

export function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<ProductsList />
		</div>
	);
}
