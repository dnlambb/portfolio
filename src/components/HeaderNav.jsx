import { IconDelete, IconLogo, IconMenu } from './Icons'
import { Link } from './Link'
import { Resume } from './Resume'
import { useState } from 'react'

export const HeaderNav = () => {
  const links = [
    { label: 'Inicio', href: '/#home' },
    { label: 'Sobre', href: '/#about' },
    { label: 'Proyectos', href: '/works' },
    { label: 'Contacto', href: '/#contact' }
  ]
  const [open, setOpen] = useState(false)
  return (
    <header className='z-10 sticky w-full top-0 bg-navbar border-b border-b-color-1 backdrop-blur-sm'>
      <nav className='max-w-lg m-auto py-1 px-8 flex flex-row-reverse items-center md:px-10 md:flex-row'>
        <div className='z-20 flex items-center cursor-pointer'>
          <a href='/' aria-label='Visit the home page'>
            <IconLogo
              fill='#fff'
              classname='w-12 rounded-full hover:scale-105 hover:bg-color-2 transition-all'
            />
          </a>
        </div>

        <span
          className='z-20 absolute left-8 top-1 cursor-pointer rotate-180 md:hidden'
          onClick={() => setOpen(!open)}
        >
          {!open
            ? (
              <IconMenu fill='#fff' classname='w-12 cursor-pointer md:hidden' />
              )
            : (
              <IconDelete fill='#fff' classname='w-12 cursor-pointer md:hidden' />
              )}
        </span>

        <ul
          className={`z-10 absolute w-full h-screen top-0 left-0 pl-10 pt-20 pb-12 transition-all ease-in-out bg-navbar md:z-auto md:static md:w-auto md:h-auto md:py-0 md:pl-2 md:bg-[transparent] md:flex md:items-center duration-300 ${
            open ? 'left-0' : 'left-[-1000px]'
          }`}
        >
          {links.map(link => (
            <li key={link.label} className='text-base my-7 md:my-0 md:ml-8'>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
          <li className='pt-10 md:hidden'>
            <Resume />
          </li>
        </ul>
      </nav>
    </header>
  )
}
