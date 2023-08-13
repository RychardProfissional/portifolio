import './globals.scss'
import { Inter } from 'next/font/google'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portifolio - Rychard',
  description: 'O intrito é apresentar as habilidades de desenvolvimento de quem o criou, ou seja minhas habilidades',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
