export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1200&auto=format&fit=crop" alt="Shah Hussain" className="w-full h-80 object-cover rounded-2xl shadow-lg" />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Hello, I'm Shah Hussain. I'm a technology partner, not just a developer. With over 3 years of professional experience spanning from internal tools at Hindustan Aeronautics Limited to cutting-edge AI features at Yolo Health, I've built a reputation for tackling any challenge, regardless of the tech stack. My passion lies at the intersection of powerful code and intelligent automation. I don't just build apps; I build systems that think, learn, and automate. My strength is my adaptability—I can quickly master any new technology to deliver the best possible solution for your business.
          </p>
        </div>
      </div>
    </section>
  )
}
