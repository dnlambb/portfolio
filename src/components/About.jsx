import { Resume } from '@components/Resume'
import { Skills } from './Skill'

export const About = () => {
  return (
    <section id='about' className='max-w-5xl mx-auto py-20'>
      <h2 className='font-medium font-heading pb-6 text-2xl text-color-4 sm:text-3xl '>
        Sobre mí
      </h2>
      <p className='pb-3 max-w-screen-md'>
        Me apasiona la programación y el mundo de la tecnología. Mi objetivo es
        mejorar como desarrollador, aprender más sobre el desarrollo de software escalable y
        de las buenas prácticas.
        <br />
      </p>
      <p className='pb-3 max-w-screen-md'>
        Actualmente estudio Analista Programador en la universidad Inacap. En mi
        tiempo libre, me gusta seguir aprendiendo como autodidacta.
      </p>
      <p>
        Cuando no estoy desarrollando, me gusta leer, jugar voleibol o videojuegos.
      </p>
      <Resume />
      <Skills />
    </section>
  )
}
