import Head from 'next/head'
import siteData from '../data/siteData'

export default function Projects(){
  return (
    <>
      <Head><title>Projects — {siteData.name}</title></Head>
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <section className="max-w-4xl mx-auto py-20 px-6">
          <h1 className="text-3xl font-semibold">Projects</h1>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {siteData.projects.map((p, i) => (
              <article key={i} className="p-4 border rounded-md">
                <h2 className="font-semibold">{p.title}</h2>
                <p className="mt-2">{p.description}</p>
                <div className="mt-3 flex gap-2">
                  {p.live && <a href={p.live} className="text-indigo-600">Live</a>}
                  {p.repo && <a href={p.repo} className="text-indigo-600">Code</a>}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}