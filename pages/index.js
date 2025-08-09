import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import siteData from '../data/siteData'
import { motion } from 'framer-motion'

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
                <Link href="/projects"><a className="px-4 py-2 bg-indigo-600 text-white rounded-md">View Projects</a></Link>
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
              {projects.slice(0,4).map((p, i) => (
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
              <Link href="/projects"><a className="text-indigo-600">See all projects →</a></Link>
            </div>
          </section>

          <section id="contact" className="mt-12">
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className="mt-2">Feel free to connect on <a href="#" className="text-indigo-600">LinkedIn</a> or email me at <span className="font-medium">your-email@example.com</span>.</p>
          </section>
        </section>
      </main>
    </>
  )
}