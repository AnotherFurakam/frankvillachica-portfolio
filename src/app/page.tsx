import { AboutMe } from "@/components/LandingPage/AboutMe";
import { Contact } from "@/components/LandingPage/Contact";
import { Hero } from "@/components/LandingPage/Hero";
import { Projects } from "@/components/LandingPage/Projects";
import { Skills } from "@/components/LandingPage/Skills";

export default function Home() {
  return (
    <main className='max-w-[1280px] mx-auto overflow-x-hidden'>
      <section id="hero">
        <Hero />
      </section>
      <section id="sobremi">
        <AboutMe />
      </section>
      <section id="habilidades">
        <Skills />
      </section>
      <section id="proyectos">
        <Projects />
      </section>
      <section id="contacto">
        <Contact />
      </section>
    </main>
  )
}
