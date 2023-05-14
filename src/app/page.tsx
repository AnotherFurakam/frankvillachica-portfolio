import { AboutMe } from "@/components/LandingPage/AboutMe";
import { Introduction } from "@/components/LandingPage/Introduction";
import { Projects } from "@/components/LandingPage/Projects";
import { Skills } from "@/components/LandingPage/Skills";

export default function Home() {
  return (
    <main className='max-w-[1280px] mx-auto overflow-x-hidden'>
      <section>
        <Introduction />
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
    </main>
  )
}
