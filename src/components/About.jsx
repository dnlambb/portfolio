import { Resume } from "@components/Resume";
import {
	Html5,
	CssThree,
	Javascript,
	ReactJs,
	Tailwindcss,
	Sass,
	Nodedotjs,
	Express,
	Mongodb,
	Mysql,
	Git,
	Cypress,
	Vite,
} from "@icons-pack/react-simple-icons";

export const About = () => {
	return (
		<section id="about" className="max-w-5xl mx-auto py-20">
			<h2 className="font-medium font-heading pb-6 text-2xl text-color-4 sm:text-3xl ">About Me</h2>
			<p className="pb-3 max-w-screen-md">
				I'm passionate about programming and the world of technology. My goal is to improve and
				learn more about scalable and impactful software development.
				<br />
			</p>
			<p className="pb-3 max-w-screen-md">
				I'm currently studying programming analyst at Inacap university. In my spare time, I like to
				continue learning as an autodidact.
			</p>
			<p>When I'm not developing, I like to read, play video games or volleyball.</p>
			<Resume />
			<section className="w-full mt-16">
				<h3 className="font-heading font-medium text-xl sm:text-2xl text-color-4 pb-10">Skills</h3>
				<div className="max-w-max flex flex-col gap-6 sm:flex-row group">
					<h4 className="font-heading font-medium underline underline-offset-4 decoration-color-2 opacity-80 group-hover:opacity-100 group-hover:decoration-color-4 transition-all duration-300 sm:m-auto">
						Frontend
					</h4>
					<div className="flex flex-wrap gap-6 justify-start items-center">
						<Html5 size={50} title="HTML" className="hover:fill-[#E34F26] transition-all" />
						<CssThree size={50} title="CSS" className="hover:fill-[#1572B6] transition-all" />
						<Javascript
							size={50}
							title="JavaScript"
							className="hover:fill-[#F7DF1E] transition-all"
						/>
						<ReactJs size={50} title="React.js" className="hover:fill-[#61DAFB] transition-all" />
						<Tailwindcss
							size={50}
							title="Tailwind.css"
							className="hover:fill-[#06B6D4] transition-all"
						/>
						<Sass size={50} title="Sass" className="hover:fill-[#CC6699] transition-all" />
					</div>
				</div>
				<div className="max-w-max my-10 flex flex-col gap-6 sm:flex-row group">
					<h4 className="font-heading font-medium underline underline-offset-4 decoration-color-2 opacity-80 group-hover:opacity-100 group-hover:decoration-color-4 transition-all duration-300 sm:m-auto sm:pl-10">
						Backend
					</h4>
					<div className="flex flex-wrap gap-6 justify-start items-center">
						<Nodedotjs size={50} title="Node.js" className="hover:fill-[#339933] transition-all" />
						<Express size={50} title="Express" className="hover:fill-[#259dff] transition-all" />
						<Mysql size={50} title="MySQL" className="hover:fill-[#4479A1] transition-all" />
						<Mongodb size={50} title="MongoDB" className="hover:fill-[#47A248] transition-all" />
					</div>
				</div>
				<div className="max-w-max flex flex-col gap-6 sm:flex-row group">
					<h4 className="font-heading font-medium underline underline-offset-4 decoration-color-2 opacity-80 group-hover:opacity-100 group-hover:decoration-color-4 transition-all duration-300 sm:m-auto sm:pl-20">
						Others
					</h4>
					<div className="flex flex-wrap gap-6 justify-start items-center">
						<Git size={50} title="Git" className="hover:fill-[#F05032] transition-all" />
						<Vite size={50} title="Vite" className="hover:fill-[#646CFF] transition-all" />
						<Cypress size={50} title="Cypress" className="hover:fill-[#007780] transition-all" />
					</div>
				</div>
			</section>
		</section>
	);
};
