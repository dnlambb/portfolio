import { FooterLink } from './Link'

export const Footer = () => {
  return (
    <footer className='mt-20 px-6'>
      <ul className='max-w-fit mx-auto grid grid-cols-2 gap-5 sm:flex'>
        <FooterLink href='https://github.com/dnlambb/portfolio'>
          Repository
        </FooterLink>
        <FooterLink href='https://www.linkedin.com/in/daniel-cordero-meléndez/'>
          Linkedin
        </FooterLink>
        <FooterLink href='https://github.com/dnlambb'>GitHub</FooterLink>
        <FooterLink href='mailto:dnlambb@writeme.com?Subject=Hello'>
          Email
        </FooterLink>
      </ul>
      <p className='my-6 text-center pt-6'>Built by Daniel Cordero</p>
    </footer>
  )
}
