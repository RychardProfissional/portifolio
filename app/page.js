import './page.scss'
import Menu from './components/menu'
import TypingEffect from './components/typingEffect'
import {Noticia_Text} from 'next/font/google'
const noticia_text = Noticia_Text({subsets: ['latin'], weight: ['400', '700']})

export default function Home()
{
  return (
    <div className="page">
      <Menu />

      <div className={"content " + noticia_text.className} >
        <section className='presentation'>
          <p>Olá, meu nome é Rychard e eu sou um <TypingEffect size={0} texts={["Programador", "Estudante", "Desenvolvedor"]}/></p>
        </section>
        <section className="about">
          <h2>Sobre mim</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </section>
        <section className="skills"></section>
        <section className="projects"></section>
      </div>
    </div>
  )
}