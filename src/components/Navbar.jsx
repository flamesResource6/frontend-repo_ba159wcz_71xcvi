import { useEffect, useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (href) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold text-lg" onClick={(e)=>{e.preventDefault();handleClick('#home')}}>
            Shah<span className="text-blue-600">Hussain</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={(e)=>{e.preventDefault();handleClick(l.href)}} className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:shahhussaindev@gmail.com" className="p-2 rounded-full hover:bg-gray-100" aria-label="Email"><Mail size={18} /></a>
            <a href="https://github.com/" target="_blank" className="p-2 rounded-full hover:bg-gray-100" aria-label="GitHub" rel="noreferrer"><Github size={18} /></a>
            <a href="https://www.linkedin.com/" target="_blank" className="p-2 rounded-full hover:bg-gray-100" aria-label="LinkedIn" rel="noreferrer"><Linkedin size={18} /></a>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={()=>setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-gray-200 py-3 animate-slide-down">
            <div className="flex flex-col gap-2">
              {links.map((l)=> (
                <a key={l.href} href={l.href} onClick={(e)=>{e.preventDefault();handleClick(l.href)}} className="py-2 text-gray-700 hover:text-blue-600">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
