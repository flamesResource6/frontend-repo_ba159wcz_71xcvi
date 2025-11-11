const projects = [
  {
    title: 'YoloHealth User App',
    desc: 'A consultation and booking platform with AI integration.',
    tech: 'React Native, Redux Toolkit, Tailwind CSS',
    link: '#',
  },
  {
    title: 'Swiggy App Clone',
    desc: 'A food delivery mobile app.',
    tech: 'React Native, Expo, Redux Toolkit',
    link: '#',
  },
  {
    title: 'EpicEats',
    desc: 'An online food ordering web app.',
    tech: 'React, Context API, Tailwind CSS, Firebase',
    link: '#',
  },
  {
    title: 'Nike E-Store',
    desc: 'An e-commerce platform.',
    tech: 'React, Redux Toolkit, Tailwind CSS',
    link: '#',
  },
  {
    title: 'Quick Search App',
    desc: 'A real-time search application.',
    tech: 'React, Context API, Google Search API',
    link: '#',
  },
  {
    title: 'Complete Authentication System',
    desc: 'A secure backend authentication system.',
    tech: 'Node.js, Express, MongoDB, JWT',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p)=> (
            <div key={p.title} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-700">{p.desc}</p>
              <p className="mt-3 text-sm text-gray-500">{p.tech}</p>
              {p.link && <a href={p.link} className="mt-4 inline-block text-blue-600 hover:underline">View</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
