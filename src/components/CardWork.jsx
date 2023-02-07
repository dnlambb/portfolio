import { Link } from "@components/Link";
import { IconLink, IconGithub } from "@components/Icons";

const CardWorkToRight = ({ date, title, desc, tech, linkRepo, linkWeb, img, altImg }) => {
	return (
		<article className="max-w-xl w-full h-fit px-4 py-8 bg-color-3 shadow-sm rounded-md overflow-hidden lg:w-full lg:max-w-5xl lg:h-80 lg:bg-color-2 lg:flex lg:gap-8">
			<div className="flex flex-col justify-evenly">
				<header className="flex flex-col-reverse gap-3 lg:flex-row lg:justify-between lg:items-center lg:max-w-md">
					<h3 className="font-heading text-2xl">{title}</h3>
					<p className="text-sm">{date}</p>
				</header>
				<p className="py-5 lg:max-w-md lg:my-4">{desc}</p>
				<p className="pb-8">{tech}</p>
				<footer className="flex flex-col sm:flex-row gap-10">
					<Link href={linkRepo}>
						<IconGithub fill="#fff" size={30} />
						Repository
					</Link>
					<Link href={linkWeb}>
						<IconLink fill="#fff" size={24} />
						Website
					</Link>
				</footer>
			</div>
			<div className="hidden lg:block w-1/2 h-full my-auto">
				<img className="w-full h-full object-cover rounded-md" src={`/assets/works/${img}`} alt={altImg} />
			</div>
		</article>
	);
};

const CardWorkToLeft = ({ date, title, desc, tech, linkRepo, linkWeb, img, altImg }) => {
	return (
		<article className="max-w-xl w-full h-fit px-4 py-8 bg-color-3 shadow-sm rounded-md overflow-hidden lg:w-full lg:max-w-5xl lg:h-80 lg:bg-color-2 lg:flex lg:flex-row-reverse lg:text-end lg:gap-8">
			<div className="flex flex-col justify-evenly">
				<header className="flex flex-col-reverse gap-3 lg:flex-row-reverse lg:justify-between lg:items-center lg:max-w-md">
					<h3 className="font-heading text-2xl">{title}</h3>
					<p className="text-sm">{date}</p>
				</header>
				<p className="py-5 lg:max-w-md lg:my-4">{desc}</p>
				<p className="pb-8">{tech}</p>
				<footer className="flex flex-col sm:flex-row lg:justify-end gap-10">
					<Link href={linkRepo}>
						<IconGithub fill="#fff" size={30} />
						Repository
					</Link>
					<Link href={linkWeb}>
						<IconLink fill="#fff" size={24} />
						Website
					</Link>
				</footer>
			</div>
			<div className="hidden lg:block w-1/2 h-full my-auto">
				<img
					className="w-full h-full object-cover rounded-md"
					src={`/assets/works/${img}`}
					alt={altImg}
				/>
			</div>
		</article>
	);
};

export { CardWorkToRight, CardWorkToLeft };
