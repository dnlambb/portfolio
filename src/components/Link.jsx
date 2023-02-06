export const Link = ({ href, children }) => {
	return (
		<a
			href={href}
			className='w-fit flex gap-3 items-center hover:underline underline-offset-2 decoration-color-4 transition-all duration-300'
			target={'_blank'}
		>
			{children}
		</a>
	);
};
