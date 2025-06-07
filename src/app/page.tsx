import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import HowWeHelp from '@/components/sections/HowWeHelp'
import Values from '@/components/sections/Values'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import SpecializedServices from '@/components/sections/SpecializedServices'

export default function Home() {
  return (
    <main className="bg-dark min-h-screen">
      <Hero />
      <Services />
      <SpecializedServices />
      <Process />
      <HowWeHelp />
      <Values />
      <Testimonials />
      <Contact />
    </main>
  )
}
