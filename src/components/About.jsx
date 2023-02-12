import { Resume } from "@components/Resume";
import { Skills } from "./Skill";

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
			<Skills />
		</section>
	);
};
