const experiences = [
  {
    role: 'Full Stack Developer (Mobile & Web)',
    company: 'HealthATM India Private Limited (Yolo Health)',
    points: [
      'Spearheaded the development of the YoloHealth User App from scratch.',
      'Utilized modern frameworks to deliver a robust and intuitive mobile application.',
      'Enhanced the Lucknow Smart City Web Panel, optimizing navigation and usability.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Z1Tech',
    points: [
      'Contributed to the development of Product VDO.AI.',
      'Built engaging landing pages using React.',
      'Designed and optimized the VDO.AI Dashboard.',
    ],
  },
  {
    role: 'IBM Internship',
    company: 'IBM',
    points: [
      'Led a team of 5 in designing and developing a top-3 selected project.',
      'Contributed to both frontend and backend development.',
      'Successfully deployed the project.',
    ],
  },
  {
    role: 'Hindustan Aeronautics Limited Apprenticeship',
    company: 'Hindustan Aeronautics Limited',
    points: [
      'Developed internal websites using HTML, CSS, JavaScript, and Bootstrap.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
        <ol className="relative border-s mt-10 border-gray-200">
          {experiences.map((exp, idx) => (
            <li key={idx} className="mb-10 ms-6">
              <span className="absolute -start-2.5 mt-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 ring-8 ring-white" />
              <h3 className="text-lg font-semibold">{exp.role} <span className="text-gray-500">• {exp.company}</span></h3>
              <ul className="mt-2 list-disc ms-5 text-gray-700 space-y-1">
                {exp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
