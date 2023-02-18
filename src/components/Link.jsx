import { IconArrow } from './Icons'

const Link = ({ href, children, newPage = false, ariaLabel }) => {
  return (
    <a
      href={href}
      className='relative w-fit flex gap-3 items-center before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-color-4 before:transition hover:before:scale-100 transition-all duration-300'
      target={newPage === true ? '_blank' : ''}
      aria-label={ariaLabel}
      rel='noreferrer'
    >
      {children}
    </a>
  )
}

const LinkSocial = ({ href, children, newPage = false, ariaLabel }) => {
  return (
    <a
      href={href}
      className='w-fit hover:scale-110 transition-all cursor-pointer'
      target={newPage === true ? '_blank' : ''}
      aria-label={ariaLabel}
      rel='noreferrer'
    >
      {children}
    </a>
  )
}

const LinkArrow = ({ href, content, newPage = false }) => {
  return (
    <a
      href={href}
      className='relative w-fit m-auto text-2xl text-center flex flex-row-reverse items-center gap-3 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-color-4 before:transition hover:before:scale-100 group'
      target={newPage === true ? '_blank' : ''}
      rel='noreferrer'
    >
      <IconArrow
        fill='#fff'
        classname='w-7 group-hover:translate-x-3 transition-all'
      />
      {content}
    </a>
  )
}

const FooterLink = ({ href, children }) => {
  return (
    <li>
      <a
        href={href}
        target='_blank'
        className='relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-color-4 before:transition hover:before:scale-100 transition-all'
        rel='noreferrer'
      >
        {children}
      </a>
    </li>
  )
}

export { Link, LinkSocial, LinkArrow, FooterLink }
