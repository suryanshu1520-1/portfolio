import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Credentials from './components/Credentials'
import ProjectCard from './components/ProjectCard'
import Process from './components/Process'
import Skills from './components/Skills'
import Footer from './components/Footer'
import { projects } from './data/projects'

function App() {
  return (
    <div className="grain relative">
      <Nav />
      <main>
        <Hero />
        <About />
        <Credentials />
        <section id="work" className="relative px-6 sm:px-10">
          <div className="mx-auto max-w-6xl">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
        <Process />
        <Skills />
        <Footer />
      </main>
      <Analytics />
    </div>
  )
}

export default App
