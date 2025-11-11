import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Chatbot from './components/Chatbot'

function App() {
  return (
    <div className="font-sans text-gray-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Chatbot />
      <footer className="border-t py-8 text-center text-sm text-gray-600 bg-white">
        © {new Date().getFullYear()} Shah Hussain. All rights reserved.
      </footer>
    </div>
  )
}

export default App
