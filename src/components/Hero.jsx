import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Shah Hussain - <span className="text-blue-600">Full-Stack Developer</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              I build intelligent web applications and AI-powered solutions that drive business growth. Let's turn your ideas into reality.
            </p>
            <div className="mt-8">
              <a href="#contact" onClick={(e)=>{e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'})}} className="inline-block rounded-md bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />
    </section>
  )
}
