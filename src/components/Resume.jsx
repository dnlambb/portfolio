import { IconResume } from "./Icons";

export const Resume = () => {
	return (
		<a
			href="/assets/Daniel%20Cordero%20CV.pdf"
			className="relative w-fit h-fit mt-6 text-xl flex items-center gap-2 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-color-4 before:transition hover:before:scale-100 transition-all group"
		>
			<IconResume fill="#fff" size={24} />
			Resume
		</a>
	);
};
