import './page.scss'
import Menu from './components/menu'
import TypingEffect from './components/typingEffect'
import {Noticia_Text, Bree_Serif, Roboto} from 'next/font/google'
const noticia_text = Noticia_Text({subsets: ['latin'], weight: ['400', '700']})
const bree_serif = Bree_Serif({subsets: ['latin'], weight: ['400']})
const roboto = Roboto({subsets: ['latin'], weight: ['400']})

export default function Home()
{
  return (
    <div className="page">
      <div className={"content " + noticia_text.className} >
        <div className='presentation'>
            <div>
              <Menu />
            </div>
            <section className='information'>
              <h2 className={bree_serif.className}>Qualificações</h2>
              <div>
                
              </div>
            </section>
        </div>
        <div className="intermediary">
          <p className={roboto.className}>Olá, meu nome é Rychard e eu sou um <TypingEffect texts={["Programador", "Estudante", "Desenvolvedor"]}/></p>
        </div>
        <section className="about">
          Olá, meu nome é Rychard e agora vou contar um pouquinho mais sobre mim.
          Sou uma pesssoa introvertida, mas que não tem problemas com lidar com muitas pessoas, sempre busco adquirir mais conhecimento e 
        </section>
      </div>
    </div>
  )
}