import { IconResume } from "./Icons";

export const Resume = () => {
	return (
		<a
			href="/assets/Daniel%20Cordero%20CV.pdf"
			className="w-fit h-fit mt-6 text-xl flex items-center gap-2 transition-all rounded-lg group hover:underline decoration-color-4 underline-offset-4"
		>
			<IconResume fill="#fff" size={24} />
			Resume
		</a>
	);
};
