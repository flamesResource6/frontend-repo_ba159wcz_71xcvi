export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          <p className="mt-4 text-gray-700">Fill out the form or reach out directly:</p>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li><strong>Email:</strong> <a className="text-blue-600 hover:underline" href="mailto:shahhussaindev@gmail.com">shahhussaindev@gmail.com</a></li>
            <li><strong>Phone:</strong> <a className="text-blue-600 hover:underline" href="tel:7071967998">7071967998</a></li>
            <li><strong>Location:</strong> Lucknow, U.P, India</li>
            <li className="flex gap-4 pt-2">
              <a className="text-blue-600 hover:underline" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
              <a className="text-blue-600 hover:underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>
        <form className="bg-gray-50 rounded-2xl p-6 shadow-sm space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input type="text" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea rows="4" className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="How can I help?" />
          </div>
          <button type="button" onClick={()=>alert('Thanks! Your message has been captured locally for this demo.')} className="w-full rounded-lg bg-blue-600 text-white py-2 font-medium hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </section>
  )
}
