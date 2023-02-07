import { IconArrow } from "./Icons";

const Link = ({ href, children }) => {
	return (
		<a
			href={href}
			className="w-fit flex gap-3 items-center hover:underline underline-offset-2 decoration-color-4 transition-all duration-300"
			target={"_blank"}
		>
			{children}
		</a>
	);
};

const LinkSocial = ({ href, children }) => {
	return (
		<a href={href} className="w-fit hover:scale-110 transition-all cursor-pointer">
			{children}
		</a>
	);
};

const LinkArrow = ({ href, content }) => {
	return (
		<a
			class="w-fit m-auto text-2xl text-center hover:underline underline-offset-4 decoration-color-4 flex flex-row-reverse items-center gap-3 group"
			href={href}
		>
			<IconArrow fill="#fff" size={30} classname="group-hover:translate-x-3 transition-all" />
			{content}
		</a>
	);
};

export { Link, LinkSocial, LinkArrow };
