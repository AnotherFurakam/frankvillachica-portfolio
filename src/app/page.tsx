import { AboutMe } from "@/components/LandingPage/AboutMe";
import { Introduction } from "@/components/LandingPage/Introduction";

export default function Home() {
  return (
    <main className='max-w-[1280px] mx-auto'>
      <section>
        <Introduction />
      </section>
      <section id="sobremi">
        <AboutMe />
      </section>
    </main>
  )
}
