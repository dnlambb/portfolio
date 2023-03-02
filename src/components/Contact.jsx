import { LinkSocial } from '@components/Link'
import { IconLinkedin, IconEmail } from '@components/Icons'
import mockup from '../../public/assets/programming.svg'

export const Contact = () => {
  return (
    <section
      id='contact'
      className='max-w-5xl mx-auto my-20 lg:flex lg:flex-row lg:gap-10'
    >
      <div className='w-fit h-fit mx-auto sm:my-auto sm:text-center lg:mx-0 lg:text-start'>
        <h2 className='text-color-4 text-3xl pb-5 font-medium font-heading sm:text-4xl'>
          ¿Hablemos?
        </h2>
        <p>Intentaré responder lo antes posible.</p>
        <p>No seas tímido y ponte en contacto conmigo de las siguientes maneras:</p>
        <div className='flex flex-wrap gap-6 w-fit py-5 sm:mx-auto lg:m-0 lg:mt-auto'>
          <LinkSocial
            href='mailto:dnlambb@writeme.com?Subject=Hello'
            className='w-fit h-fit hover:scale-110 transition-all'
            ariaLabel='Send me an e-mail'
            newPage
          >
            <IconEmail fill='#fff' classname='w-12' />
          </LinkSocial>
          <LinkSocial
            href='https://www.linkedin.com/in/daniel-cordero-meléndez/'
            className='w-fit h-fit hover:scale-110 transition-all'
            ariaLabel='Visit my Linkedin'
            newPage
          >
            <IconLinkedin fill='#fff' classname='w-12' />
          </LinkSocial>
        </div>
      </div>
      <img
        src={mockup}
        alt='Programming'
        className='mx-auto w-full h-fit max-w-md mt-10 lg:pt-0'
      />
    </section>
  )
}
