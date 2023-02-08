export const ListItemLink = ({ href, content }) => {
	return (
		<li>
			<a href={href} target="_blank" className="hover:underline underline-offset-4 decoration-color-4 transition-all">
				{content}
			</a>
		</li>
	);
};
