import { BookingSection } from '../components/Booking';
import { Experts } from '../components/Experts';
import { Feline } from '../components/Feline';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Numbers } from '../components/Numbers';
import { ProductsList } from '../components/ProductsList';
import { ServicesSection } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
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
			<Testimonials />
			<Numbers />
			<Experts />
			<Feline />
		</div>
	);
}
