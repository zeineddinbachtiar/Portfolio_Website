import Head from 'next/head'
import Navbar from '../components/Navbar'
import Masthead from '../components/Masthead'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Leadership from '../components/Leadership'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zeineddin Ahmad Bachtiar</title>
        <meta name="description" content="Business Ops & Data Analyst — ITS Surabaya" />
      </Head>
      <Navbar />
      <Masthead />
      <Experience />
      <Projects />
      <Skills />
      <Leadership />
      <Footer />
    </div>
  )
}