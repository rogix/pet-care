import { BookingSection } from '../components/Booking';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ProductsList } from '../components/ProductsList';
import { ServicesSection } from '../components/Services';
import { Welcome } from '../components/Welcome';

export function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<ProductsList />
			<Welcome />
			<BookingSection />
			<ServicesSection />
		</div>
	);
}
