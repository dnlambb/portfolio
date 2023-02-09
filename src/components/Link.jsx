import { IconArrow } from "./Icons";

const Link = ({ href, children, newPage = false }) => {
	return (
		<a
			href={href}
			className="w-fit flex gap-3 items-center hover:underline underline-offset-2 decoration-color-4 transition-all duration-300"
			target={newPage === true ? "_blank" : ""}
		>
			{children}
		</a>
	);
};

const LinkSocial = ({ href, children, newPage = false }) => {
	return (
		<a
			href={href}
			className="w-fit hover:scale-110 transition-all cursor-pointer"
			target={newPage === true ? "_blank" : ""}
		>
			{children}
		</a>
	);
};

const LinkArrow = ({ href, content, newPage = false }) => {
	return (
		<a
			href={href}
			className="w-fit m-auto text-2xl text-center hover:underline underline-offset-4 decoration-color-4 flex flex-row-reverse items-center gap-3 group"
			target={newPage === true ? "_blank" : ""}
		>
			<IconArrow fill="#fff" classname="w-7 group-hover:translate-x-3 transition-all" />
			{content}
		</a>
	);
};

const FooterLink = ({ href, children }) => {
	return (
		<li>
			<a
				href={href}
				target="_blank"
				className="hover:underline underline-offset-4 decoration-color-4 transition-all"
			>
				{children}
			</a>
		</li>
	);
};

export { Link, LinkSocial, LinkArrow, FooterLink };
