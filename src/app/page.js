'use client'
import Navbar from './Components/navbar'
import HomeSection from './homesection'
import AboutPage from './About/page'
import PengalamanPage from './About/pengalaman'
import ProjectPage from './Project/page'
import ContactPage from './Contact/page'
import Footer from './Components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
        <HomeSection />
        <AboutPage />
        <PengalamanPage />
        <ProjectPage />
        <ContactPage />
        <Footer />
    </main>
  )
}
