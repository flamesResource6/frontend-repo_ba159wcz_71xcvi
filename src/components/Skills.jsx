const categories = [
  {
    title: 'Frontend',
    items: ['HTML5 & CSS3', 'JavaScript & TypeScript', 'React & Next.js', 'Tailwind CSS', 'Bootstrap', 'Sass', 'Shadcn', 'Daisy UI', 'Material UI']
  },
  {
    title: 'Backend',
    items: ['Node.js & Express.js', 'REST API', 'Complete Authentication (JWT)']
  },
  {
    title: 'Databases',
    items: ['MongoDB']
  },
  {
    title: 'Mobile',
    items: ['React Native (CLI & Expo)']
  },
  {
    title: 'Gen AI',
    items: ['Gen AI Integration (Gemini)']
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Linux', 'Windows', 'macOS']
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg">{cat.title}</h3>
              <ul className="mt-4 space-y-2 text-gray-700">
                {cat.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
