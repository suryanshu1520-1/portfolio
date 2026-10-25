import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Credentials from './components/Credentials'
import ProjectCard from './components/ProjectCard'
import Process from './components/Process'
import Skills from './components/Skills'
import Footer from './components/Footer'
import PatentModal from './components/PatentModal'
import { projects } from './data/projects'

function App() {
  const [patentModalOpen, setPatentModalOpen] = useState(false)
  const [selectedPatentId, setSelectedPatentId] = useState<string | undefined>(undefined)

  const handleOpenPatents = (id?: string) => {
    setSelectedPatentId(id)
    setPatentModalOpen(true)
  }

  return (
    <div className="grain relative">
      <Nav onOpenPatents={() => handleOpenPatents()} />
      <main>
        <Hero onOpenPatents={() => handleOpenPatents()} />
        <About onOpenPatents={() => handleOpenPatents()} />
        <Credentials onOpenPatents={(id) => handleOpenPatents(id)} />
        <section id="work" className="relative px-6 sm:px-10">
          <div className="mx-auto max-w-6xl">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenPatents={() => handleOpenPatents()}
              />
            ))}
          </div>
        </section>
        <Process onOpenPatents={() => handleOpenPatents()} />
        <Skills />
        <Footer />
      </main>

      <PatentModal
        isOpen={patentModalOpen}
        onClose={() => setPatentModalOpen(false)}
        initialPatentId={selectedPatentId}
      />
      <Analytics />
    </div>
  )
}

export default App
