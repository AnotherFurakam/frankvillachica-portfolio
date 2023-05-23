import { Navbar } from '@/components/Navbar'
import './globals.css'
import { Sen } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { Metadata } from 'next'

const sen = Sen(
  {
    subsets: ['latin', 'latin-ext'],
    weight: ['400', '700', '800'],
    variable: '--font-sen'
  }
)

export const metadata: Metadata = {
  metadataBase: new URL('https://frankvillachica.netlify.app/'),
  title: 'Frank Villachica',
  description: '¡Hola! Soy Frank Villachica, un apasionado desarrollador web en busca de emocionantes oportunidades laborales. Si estás buscando a alguien dedicado y creativo para unirse a tu equipo, ¡estás en el lugar correcto! Explora mi portfolio y descubre cómo mis habilidades y experiencia pueden contribuir a tu proyecto. ¡Trabajemos juntos para alcanzar grandes resultados!',
  keywords: ["Frank Villachica", "Frank Jordan Villachica Gaspar", "Frank Villachica Gaspar", "Desarrollador web junior", "Desarrollador web fullstack junior", "Desarrollador de software junior", "Desarrollador de software", "Dearrollador web", "Dearrollador web fullstack"],
  creator: 'Frank Villachica',
  icons: {
    icon: "/favicon.ico",
    other: [
      {
        rel: "icon",
        url: "/icons/icon-16.png",
        type: "image/png",
        sizes: "16x16"
      },
      {
        rel: "icon",
        url: "/icons/icon-32.png",
        type: "image/png",
        sizes: "32x32"
      },
      {
        rel: "icon",
        url: "/icons/icon-96.png",
        type: "image/png",
        sizes: "96x96"
      }
    ],
    shortcut: "/icons/icon-96.png",
    apple: "/icons/icon-16.png",
  },
  openGraph: {
    title: "Portafolio Web - Frank Villachica",
    description: "¡Hola! Soy un apasionado desarrollador web en busca de emocionantes oportunidades laborales. Explora mi portfolio y descubre cómo mis habilidades y experiencia pueden contribuir a tu proyecto.",
    authors: ["Frank Villachica"],
    gender: "Masculino",
    emails: ["frankvillachica@outlook.com"],
    url: "https://frankvillachica.netlify.app",
    countryName: "Perú",
    siteName:"Frank Villachica - Portfolio",
    tags: ["Web developer","Desarrollador Web", "Junior Web developer","Junior programmer", "Frontend developer","Backend developer", "Desarrollador Web Junior"],
    images: [
      {
        url: "/opengraph-image.png",
      }
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${sen.variable} font-sen bg-oceanblue scrollbar-thin scrollbar-thumb-cornflowerblue`} suppressHydrationWarning ={true}>
        <Navbar />
        {
        children
        }
        <Footer />
      </body>
    </html>
  )
}
