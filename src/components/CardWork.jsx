import { Link } from '@components/Link'
import { IconLink, IconGithub } from '@components/Icons'

const CardWorkToRight = ({
  date,
  title,
  desc,
  tech,
  linkRepo,
  linkWeb,
  img,
  altImg
}) => {
  return (
    <article className='max-w-xl w-full h-fit px-4 py-8 bg-color-3 shadow-sm rounded-md overflow-hidden lg:w-full lg:max-w-5xl lg:h-80 lg:bg-color-2 lg:flex lg:gap-8'>
      <div className='flex flex-col justify-evenly'>
        <header className='flex flex-col-reverse gap-3 lg:flex-row lg:justify-between lg:items-center lg:max-w-md'>
          <h3 className='font-heading text-2xl'>{title}</h3>
          <p className='text-sm opacity-80'>{date}</p>
        </header>
        <p className='py-5 lg:max-w-md lg:my-4 opacity-90'>{desc}</p>
        <p className='pb-8 opacity-90'>{tech}</p>
        <footer className='w-fit flex flex-wrap gap-5 sm:gap-10'>
          <Link href={linkRepo} newPage>
            <IconGithub fill='#fff' classname='w-8' />
            Repositorio
          </Link>
          <Link href={linkWeb} newPage>
            <IconLink fill='#fff' classname='w-6' />
            Sitio Web
          </Link>
        </footer>
      </div>
      <div className='hidden lg:block w-1/2 h-full my-auto'>
        <img
          className='w-full h-full object-cover rounded-md'
          src={`/assets/works/${img}`}
          alt={altImg}
        />
      </div>
    </article>
  )
}

const CardWorkToLeft = ({
  date,
  title,
  desc,
  tech,
  linkRepo,
  linkWeb,
  img,
  altImg
}) => {
  return (
    <article className='max-w-xl w-full h-fit px-4 py-8 bg-color-3 shadow-sm rounded-md overflow-hidden lg:w-full lg:max-w-5xl lg:h-80 lg:bg-color-2 lg:flex lg:flex-row-reverse lg:text-end lg:gap-8'>
      <div className='flex flex-col justify-evenly'>
        <header className='flex flex-col-reverse gap-3 lg:flex-row-reverse lg:justify-between lg:items-center lg:max-w-md'>
          <h3 className='font-heading font-medium text-2xl'>{title}</h3>
          <p className='text-sm opacity-80'>{date}</p>
        </header>
        <p className='py-5 lg:max-w-md lg:my-4 opacity-90'>{desc}</p>
        <p className='pb-8 opacity-90'>{tech}</p>
        <footer className='w-fit flex flex-wrap gap-5 sm:gap-10 lg:ml-auto'>
          <Link href={linkRepo} newPage>
            <IconGithub fill='#fff' classname='w-8' />
            Repositorio
          </Link>
          <Link href={linkWeb} newPage>
            <IconLink fill='#fff' classname='w-6' />
            Sitio Web
          </Link>
        </footer>
      </div>
      <div className='hidden lg:block w-1/2 h-full my-auto'>
        <img
          className='w-full h-full object-cover rounded-md'
          src={`/assets/works/${img}`}
          alt={altImg}
        />
      </div>
    </article>
  )
}

const CardWorkSimple = ({ date, title, desc, tech, linkRepo, linkWeb }) => {
  return (
    <article className='min-w-[232px] max-w-xl w-full h-fit mx-auto my-auto mb-4 px-4 py-8 bg-color-3 shadow-sm rounded-md overflow-hidden sm:min-w-[300px] sm:px-6'>
      <div className='flex flex-col justify-evenly'>
        <header className='flex flex-col-reverse gap-3'>
          <h3 className='font-heading text-2xl'>{title}</h3>
          <p className='text-sm opacity-80'>{date}</p>
        </header>
        <p className='py-5 opacity-90'>{desc}</p>
        <p className='pb-8 opacity-90'>{tech}</p>
        <footer className='w-fit flex flex-wrap gap-5 sm:gap-10'>
          <Link href={linkRepo} newPage>
            <IconGithub fill='#fff' classname='w-8' />
            Repositorio
          </Link>
          <Link href={linkWeb} newPage>
            <IconLink fill='#fff' classname='w-6' />
            Sitio Web
          </Link>
        </footer>
      </div>
    </article>
  )
}

export { CardWorkToRight, CardWorkToLeft, CardWorkSimple }
