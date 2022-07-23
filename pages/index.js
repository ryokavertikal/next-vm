import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ryoka Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Adios!" />
        <p className="description">
          Welcome, strangers! 👋✨👁️
        </p>
      </main>

      <Footer />
    </div>
  )
}
