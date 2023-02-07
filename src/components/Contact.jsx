import { LinkSocial } from "@components/Link";
import { IconLinkedin, IconEmail } from "@components/Icons";
import mockup from "../../public/assets/programming.svg";

export const Contact = () => {
	return (
		<section className="w-fit m-auto my-20 lg:flex lg:flex-row lg:gap-10">
			<div className="w-fit h-fit sm:my-auto sm:text-center lg:text-start">
				<h2 className="text-color-4 text-3xl pb-5 font-medium font-heading sm:text-4xl">
					Let's talk?
				</h2>
				<p>I will try to respond as soon as possible.</p>
				<p>Don't be shy and contact me in the following ways:</p>
				<div className="flex flex-wrap gap-10 w-fit py-5 sm:mx-auto lg:m-0 lg:mt-auto">
					<LinkSocial
						href="https://www.linkedin.com/in/daniel-cordero-meléndez/"
						className="w-fit h-fit hover:scale-110 transition-all"
					>
						<IconLinkedin size={60} fill="#fff" />
					</LinkSocial>
					<LinkSocial
						href="mailto:dnlambb@writeme.com?Subject=Hello"
						className="w-fit h-fit hover:scale-110 transition-all"
					>
						<IconEmail size={60} fill="#fff" />
					</LinkSocial>
				</div>
			</div>
			<img src={mockup} alt="Programming" className="mx-auto w-full h-fit max-w-md mt-10 lg:pt-0" />
		</section>
	);
};
