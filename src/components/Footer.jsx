import { IconHeart } from "./Icons";
import { ListItem } from "./ListItem";

export const Footer = () => {
	return (
		<footer className="mt-20 px-6">
			<ul className="max-w-fit mx-auto flex flex-wrap gap-5">
				<ListItem href="https://github.com/dnlambb/portfolio" content="Repository" />
				<ListItem href="https://www.linkedin.com/in/daniel-cordero-meléndez/" content="Linkedin" />
				<ListItem href="https://github.com/dnlambb" content="Github" />
				<ListItem href="mailto:dnlambb@writeme.com?Subject=Hello" content="Email" />
			</ul>
			<p className="my-6 text-center">
				Built by Daniel Cordero
			</p>
		</footer>
	);
};
