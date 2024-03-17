import { AccordionItem } from '../shared/Accordion';
import { Typography } from '../shared/Typography';

export function Questions() {
	return (
		<section className="bg-teal">
			<div className="h-ful container relative flex flex-col md:gap-10 md:px-20 xl:max-w-screen-2xl xl:flex-row xl:gap-20">
				<div className="my-[104px] flex flex-col gap-5 text-white xl:w-[45%]">
					<Typography variant="h2" className="text-gold">
						FAQs
					</Typography>
					<Typography variant="h3" className="text-5xl text-white">
						Frequently Asked Questions
					</Typography>
					<Typography variant="p" className="font-readex font-extralight">
						We understand that you may have questions about our services. Here are some of the most
						common questions we get asked.
					</Typography>

					<AccordionItem
						title="What is the process for getting a loan?"
						content="The process for getting a loan is simple. You can apply online or in person. Once you have submitted your application, we will review it and get back to you within 24 hours."
						name="my-accordion-3"
						defaultChecked
					/>
					<AccordionItem
						title="What are the interest rates?"
						content="The interest rates vary depending on the type of loan you are applying for. We offer competitive rates that are lower than most banks."
						name="my-accordion-3"
					/>
					<AccordionItem
						title="How long does it take to get a loan?"
						content="The time it takes to get a loan depends on the type of loan you are applying for. Most loans are approved within 24 hours."
						name="my-accordion-3"
					/>
				</div>
				<div className="bottom-0 right-0 h-[607px] rounded-t-lg bg-orange md:right-20 xl:absolute xl:w-[570px]">
					<h2 className="mx-auto max-w-[400px] py-10 text-center text-2xl text-white">
						Have a question? Ask contact support now.
					</h2>
					<form className="mx-auto flex flex-col gap-5 p-10 pt-0 md:w-[570px]">
						<input type="text" placeholder="Name" className="w-full rounded-full px-5 py-5" />
						<input type="email" placeholder="Email" className="w-full rounded-full p-5 px-5" />
						<textarea placeholder="Any Question" rows={6} className="rounded-[30px] p-5" />
						<button className="w-full rounded-full bg-light-red p-4 text-white">
							Send a question
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
