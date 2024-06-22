import HomePage from '@/components/HomePage'
import Section from '@/components/Section'
import ServicesPage from '@/components/ServicesPage'
import Process from '@/components/Process'
import Feature from '@/components/Feature'
import Contact from '@/components/Contact'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <HomePage/>
      <Section/>
      <ServicesPage/>
      <Process/>
      <Feature/>
      <Contact />
    </main>
  )
}
