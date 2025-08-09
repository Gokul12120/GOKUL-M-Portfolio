import Head from 'next/head'
export default function Contact(){
  return (
    <>
      <Head><title>Contact</title></Head>
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <section className="max-w-2xl mx-auto py-20 px-6">
          <h1 className="text-3xl font-semibold">Contact</h1>
          <p className="mt-4">Email: your-email@example.com</p>
        </section>
      </main>
    </>
  )
}