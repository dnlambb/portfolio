import {
  Html5,
  CssThree,
  Javascript,
  ReactJs,
  Tailwindcss,
  Sass,
  Nodedotjs,
  Express,
  Mongodb,
  Mysql,
  Git,
  Cypress,
  Vite
} from '@icons-pack/react-simple-icons'

export const Skills = () => {
  return (
    <section className='w-full mt-16'>
      <h3 className='font-heading font-medium text-xl sm:text-2xl text-color-4 pb-10'>
        Conocimientos
      </h3>
      <div className='max-w-max flex flex-col gap-6 sm:flex-row group'>
        <h4 className='font-heading font-medium opacity-90 sm:m-auto'>
          Frontend
        </h4>
        <div className='flex flex-wrap gap-6 justify-start items-center'>
          <Html5
            size={50}
            title='HTML'
            className='active:fill-[#E34F26] hover:fill-[#E34F26] transition-all'
          />
          <CssThree
            size={50}
            title='CSS'
            className='active:fill-[#1572B6] hover:fill-[#1572B6] transition-all'
          />
          <Javascript
            size={50}
            title='JavaScript'
            className='active:fill-[#F7DF1E] hover:fill-[#F7DF1E] transition-all'
          />
          <ReactJs
            size={50}
            title='React.js'
            className='active:fill-[#61DAFB] hover:fill-[#61DAFB] transition-all'
          />
          <Tailwindcss
            size={50}
            title='Tailwind.css'
            className='active:fill-[#06B6D4] hover:fill-[#06B6D4] transition-all'
          />
          <Sass
            size={50}
            title='Sass'
            className='active:fill-[#CC6699] hover:fill-[#CC6699] transition-all'
          />
        </div>
      </div>
      <div className='max-w-max my-10 flex flex-col gap-6 sm:flex-row'>
        <h4 className='font-heading font-medium opacity-80 sm:m-auto sm:pl-10'>
          Backend
        </h4>
        <div className='flex flex-wrap gap-6 justify-start items-center'>
          <Nodedotjs
            size={50}
            title='Node.js'
            className='active:fill-[#339933] hover:fill-[#339933] transition-all'
          />
          <Express
            size={50}
            title='Express'
            className='active:fill-[#259dff] hover:fill-[#259dff] transition-all'
          />
          <Mysql
            size={50}
            title='MySQL'
            className='active:fill-[#4479A1] hover:fill-[#4479A1] transition-all'
          />
          <Mongodb
            size={50}
            title='MongoDB'
            className='active:fill-[#47A248] hover:fill-[#47A248] transition-all'
          />
        </div>
      </div>
      <div className='max-w-max flex flex-col gap-6 sm:flex-row'>
        <h4 className='font-heading font-medium opacity-80 sm:m-auto sm:pl-20'>
          Otros
        </h4>
        <div className='flex flex-wrap gap-6 justify-start items-center'>
          <Git
            size={50}
            title='Git'
            className='active:fill-[#F05032] hover:fill-[#F05032] transition-all'
          />
          <Vite
            size={50}
            title='Vite'
            className='active:fill-[#646CFF] hover:fill-[#646CFF] transition-all'
          />
          <Cypress
            size={50}
            title='Cypress'
            className='active:fill-[#007780] hover:fill-[#007780] transition-all'
          />
        </div>
      </div>
    </section>
  )
}
