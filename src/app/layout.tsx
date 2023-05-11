import { Navbar } from '@/components/Navbar'
import './globals.css'
import { Sen } from 'next/font/google'

const sen = Sen(
  {
    subsets: ['latin', 'latin-ext'],
    weight: ['400', '700', '800'],
    variable: '--font-sen'
  }
)

export const metadata = {
  title: 'Frank Villachica Gaspar',
  description: 'Hola soy Frank Villachica un desarrollador web FullStack Junior. Actualmente me encuentro en busca de nuevas oportunidades. Espero mi perfil sea lo que estas buscanndo y podamos trabajar juntos.',
  keywords: ["Frank Villachica", "Frank Jordan Villachica Gaspar", "Frank Villachica Gaspar", "Desarrollador web junior", "Desarrollador web fullstack junior", "Desarrollador de software junior", "Desarrollador de software", "Dearrollador web", "Dearrollador web fullstack"],
  creator: 'Frank Villachica Gaspar'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${sen.variable} font-sen bg-oceanblue overflow-x-hidden scrollbar-thin scrollbar-thumb-cornflowerblue`}>
        <Navbar />
        {
        children
        }
      </body>
    </html>
  )
}
