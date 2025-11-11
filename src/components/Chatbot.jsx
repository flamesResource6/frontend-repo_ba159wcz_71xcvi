import { useEffect, useMemo, useRef, useState } from 'react'

// Simple client-side chatbot grounded on portfolio content
export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Shah's portfolio assistant. Ask me about skills, experience, or projects." },
  ])
  const inputRef = useRef(null)

  const knowledge = useMemo(() => ({
    name: 'Shah Hussain',
    headline: 'Full-Stack Developer',
    skills: {
      frontend: ['HTML5 & CSS3', 'JavaScript & TypeScript', 'React & Next.js', 'Tailwind CSS', 'Bootstrap', 'Sass', 'Shadcn', 'Daisy UI', 'Material UI'],
      backend: ['Node.js & Express.js', 'REST API', 'Authentication (JWT)'],
      db: ['MongoDB'],
      mobile: ['React Native (CLI & Expo)'],
      ai: ['Gen AI Integration (Gemini)'],
      tools: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Linux', 'Windows', 'macOS'],
    },
    experience: [
      'Full Stack Developer at Yolo Health: Built YoloHealth User App; improved Lucknow Smart City Web Panel.',
      'Frontend Developer at Z1Tech: Worked on VDO.AI product, landing pages, and dashboard.',
      'IBM Internship: Led a team, shipped a top-3 project across both frontend and backend.',
      'Hindustan Aeronautics Limited Apprenticeship: Built internal websites using HTML, CSS, JavaScript, Bootstrap.',
    ],
    projects: [
      'YoloHealth User App (React Native, Redux Toolkit, Tailwind CSS)',
      'Swiggy App Clone (React Native, Expo, Redux Toolkit)',
      'EpicEats (React, Context API, Tailwind CSS, Firebase)',
      'Nike E-Store (React, Redux Toolkit, Tailwind CSS)',
      'Quick Search App (React, Context API, Google Search API)',
      'Complete Authentication System (Node.js, Express, MongoDB, JWT)',
    ],
    contact: {
      email: 'shahhussaindev@gmail.com',
      phone: '7071967998',
      location: 'Lucknow, U.P, India',
    },
  }), [])

  const respond = (q) => {
    const lower = q.toLowerCase()
    if (lower.includes('skill') || lower.includes('tech')) {
      return `Key skills include: Frontend (${knowledge.skills.frontend.join(', ')}); Backend (${knowledge.skills.backend.join(', ')}); Databases (${knowledge.skills.db.join(', ')}); Mobile (${knowledge.skills.mobile.join(', ')}); Gen AI (${knowledge.skills.ai.join(', ')}); Tools (${knowledge.skills.tools.join(', ')}).`
    }
    if (lower.includes('experience') || lower.includes('work')) {
      return knowledge.experience.join(' ')
    }
    if (lower.includes('project')) {
      return `Highlighted projects: ${knowledge.projects.join('; ')}`
    }
    if (lower.includes('contact') || lower.includes('email') || lower.includes('phone')) {
      return `You can reach Shah at ${knowledge.contact.email}, phone ${knowledge.contact.phone}, located in ${knowledge.contact.location}.`
    }
    if (lower.includes('hello') || lower.includes('hi')) {
      return "Hello! Ask me about Shah's skills, experience, or projects."
    }
    return "I'm trained on this portfolio's content. Ask about skills, experience, projects, or how to contact Shah."
  }

  const onSend = () => {
    const value = inputRef.current?.value?.trim()
    if (!value) return
    setMessages((m) => [...m, { role: 'user', content: value }])
    const answer = respond(value)
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'assistant', content: answer }])
    }, 300)
    inputRef.current.value = ''
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Enter') onSend()
    }
    const input = inputRef.current
    input?.addEventListener('keydown', onKey)
    return () => input?.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {open && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl border bg-white shadow-xl overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-3 font-semibold">Ask Shah's AI Assistant</div>
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block px-3 py-2 rounded-xl ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>{m.content}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 border-t p-3">
            <input ref={inputRef} type="text" placeholder="Type your question..." className="flex-1 rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <button onClick={onSend} className="rounded-lg bg-blue-600 text-white px-3 py-2 hover:bg-blue-700">Send</button>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="rounded-full bg-blue-600 text-white px-5 py-3 shadow-lg hover:bg-blue-700">
        {open ? 'Close Chat' : 'Chat with AI'}
      </button>
    </div>
  )
}
