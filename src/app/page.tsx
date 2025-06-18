import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Achievements from "@/components/Achievements"
import Contact from "@/components/Contact"
import Navbar from "@/components/Navbar"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
    </main>
  )
}
