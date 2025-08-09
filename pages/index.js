import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import siteData from '../data/siteData'
import { motion } from 'framer-motion'
import { useState } from 'react'  // import useState here

// ContactSection component
function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus('Message sent!');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="p-6 bg-gray-100 rounded-lg mt-12">
      <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
      <p>📞 Phone: <a href="phone No:+1234567890" className="text-indigo-600">+91 9042651104</a></p>
      <p>📧 Email: <a href="mailto:youremail@gmail.com" className="text-indigo-600">gokul2006ml@gmail.com</a></p>

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </form>

      {status && <p className="mt-2">{status}</p>}
    </section>
  );
}

export default function Home() {
  const { name, role, tagline, bio, skills, projects } = siteData
  return (
    <>
      <Head>
        <title>{name} — {role}</title>
        <meta name="description" content={tagline} />
      </Head>
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <section className="max-w-4xl mx-auto py-20 px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-40 h-40 relative rounded-full overflow-hidden shadow-lg">
              <Image src="/images/profile.jpg" alt="profile" fill style={{objectFit:'cover'}} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold">{name}</h1>
              <p className="text-indigo-600 mt-1">{role}</p>
              <p className="mt-4 max-w-xl">{tagline}</p>
              <div className="mt-6 flex gap-3">
                <Link href="/projects" className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                  View Projects
                </Link>
                <a href="#contact" className="px-4 py-2 border rounded-md">Contact</a>
              </div>
            </div>
          </div>

          <motion.section initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className="mt-12">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="mt-3 max-w-2xl">{bio}</p>
          </motion.section>

          <section className="mt-8">
            <h3 className="text-xl font-semibold">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
              {skills.map((s, i) => (
                <div key={i} className="p-3 border rounded-md">{s}</div>
              ))}
            </div>
          </section>

          <section className="mt-10">
  <h3 className="text-xl font-semibold">Featured Projects</h3>
  <div className="grid md:grid-cols-2 gap-6 mt-4">
    {projects
      .filter((p) => p.title !== "DevSecOps Pipeline") // exclude by title
      .slice(0, 4)
      .map((p, i) => (
        <div key={i} className="p-4 border rounded-md">
          <h4 className="font-semibold">{p.title}</h4>
          <p className="mt-2">{p.description}</p>
          <div className="mt-3 flex gap-2">
            {p.live && <a href={p.live} className="text-indigo-600">Live</a>}
            {p.repo && <a href={p.repo} className="text-indigo-600">Code</a>}
          </div>
        </div>
      ))}
  </div>
  <div className="mt-4">
    <Link href="/projects" className="text-indigo-600">
      See all projects →
    </Link>
  </div>
</section>


          {/* Replaced old contact section with ContactSection component */}
          <ContactSection />
        </section>
      </main>
    </>
  )
}
