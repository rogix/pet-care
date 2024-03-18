import { BookingSection } from '../components/Booking';
import { Feline } from '../components/Feline';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Numbers } from '../components/Numbers';
import { PageCall } from '../components/PageCall';
import { ServicesSection } from '../components/Services';
import { Testimonials } from '../components/Testimonials';

export function Services() {
	return (
		<div>
			<Header />
			<PageCall pageTitle="Services" />
			<ServicesSection />
			<BookingSection />
			<Testimonials />
			<Numbers />
			<Feline />
			<Footer />
		</div>
	);
}
