import { IconDelete, IconLogo, IconMenu } from "./Icons";
import { Link } from "./Link";
import { Resume } from "./Resume";
import { useState } from "react";

export const HeaderNav = () => {
	let links = [
		{ name: "Home", href: "/#home" },
		{ name: "About", href: "/#about" },
		{ name: "Works", href: "/works" },
		{ name: "Contact", href: "/#contact" },
	];
	let [open, setOpen] = useState(false);
	return (
		<header className="z-10 sticky w-full top-0">
			<nav className="py-2 px-8 flex items-center md:px-10 bg-navbar border-b border-b-color-1 backdrop-blur-sm">
				<div className="z-20 flex items-center cursor-pointer">
					<a href="/" aria-label="Visit the home page">
						<IconLogo fill="#fff" classname="w-12 rounded-full hover:scale-105 hover:bg-color-2 transition-all" />
					</a>
				</div>

				<span
					className="z-20 absolute right-8 top-3 cursor-pointer md:hidden"
					onClick={() => setOpen(!open)}
				>
					{!open ? (
						<IconMenu fill="#fff" classname="w-12 cursor-pointer md:hidden" />
					) : (
						<IconDelete fill="#fff" classname="w-12 cursor-pointer md:hidden" />
					)}
				</span>

				<ul
					className={`z-10 absolute w-full h-screen top-0 left-0 pl-10 pt-20 pb-12 transition-all ease-in-out bg-navbar md:z-auto md:static md:w-auto md:h-auto md:py-0 md:pl-2 md:bg-[transparent] md:flex md:items-center duration-300 ${
						open ? "left-0" : "left-[-1000px]"
					}`}
				>
					{links.map((link) => (
						<li key={link.name} className="text-xl my-7 md:my-0 md:ml-8">
							<Link href={link.href}>{link.name}</Link>
						</li>
					))}
					<li className="pt-10 md:hidden">
						<Resume />
					</li>
				</ul>
			</nav>
		</header>
	);
};
