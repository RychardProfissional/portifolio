import { Bree_Serif } from "@next/font/google"

const bree_serif = Bree_Serif({
    subsets: ['latin'],
    weight: '400'
})

export default function Menu()
{
    return (
        <div className={"container-menu "+ bree_serif.className}>
            <main className="info">
                <h1>Rychard Antony Pereira de Arruda</h1>
            </main>
            <nav className="menu">
                <li className="item"><a className="link">Home</a></li>
                <li className="item"><a className="link">Sobre</a></li>
                <li className="item"><a className="link">seilaasdf</a></li>
                <li className="item"><a className="link">seilaa</a></li>
            </nav>
        </div>
    )
}