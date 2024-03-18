import { StepCard } from '../shared/StepCard';

export function Steps() {
	return (
		<section className="container my-20 flex flex-col gap-10 lg:px-20">
			<div className="mb-20 flex flex-col items-center justify-center">
				<h2 className="font-readex font-bold text-teal">How to Consultation</h2>
				<h3 className="text-center text-5xl leading-normal text-dark-gray">
					4 Steps How to Consult a Specialist
				</h3>
			</div>
			<div className="grid grid-cols-1 gap-20 md:grid-cols-2 xl:grid-cols-4 xl:gap-10">
				<StepCard
					step="01"
					title="Determine the Need for a Specialist"
					content="Determine the need for a specialist and schedule a consultation."
					color="teal"
				/>
				<StepCard
					step="02"
					title="Research and Find a Specialist"
					content="Research and find a specialist that meets your needs."
					color="orange"
				/>
				<StepCard
					step="03"
					title="Contact the Specialist's Office"
					content="Contact the specialist's office to schedule a consultation."
					color="light-red"
				/>
				<StepCard
					step="04"
					title="Schedule & Prepare for the Appointment"
					content="Schedule and prepare for the appointment with the specialist."
					color="orange"
				/>
			</div>
		</section>
	);
}
