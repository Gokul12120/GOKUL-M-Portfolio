import Head from 'next/head'
import siteData from '../data/siteData'
export default function About(){
  return (
    <>
      <Head><title>About — {siteData.name}</title></Head>
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <section className="max-w-3xl mx-auto py-20 px-6">
          <h1 className="text-3xl font-semibold">About</h1>
          <p className="mt-4">{siteData.bio}</p>
        </section>
      </main>
    </>
  )
}