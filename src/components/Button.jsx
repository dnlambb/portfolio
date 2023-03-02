export const BtnPrimary = ({ href, content }) => {
  return (
    <a
      href={href}
      class='w-fit h-fit inline-block px-5 py-3 text-sm font-heading font-bold bg-color-4 text-color-3 rounded hover:bg-opacity-80 focus:outline-none focus:ring'
    >
      {content}
    </a>
  )
}
