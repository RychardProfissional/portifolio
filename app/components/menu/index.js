import { Bree_Serif } from "@next/font/google"
import './index.scss'

const bree_serif = Bree_Serif({
    subsets: ['latin'],
    weight: '400'
})

export default function Menu()
{
    return (
        <div className={"content-menu "+ bree_serif.className}>
            <main className="info">
                <h1>Rychard Antony Pereira de Arruda</h1>
            </main>
            <nav className="menu">
                <li className="item"><a className="link" href="#">Home</a></li>
                <li className="item"><a className="link" href="#">Sobre</a></li>
                <li className="item"><a className="link" href="#">seilaasdf</a></li>
                <li className="item"><a className="link" href="#">seilaa</a></li>
            </nav>
        </div>
    )
}