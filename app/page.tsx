import Hero from '@/components/Hero'
import Grid from '@/components/Grid'
import RecentProjects from '@/components/RecentProjects'
import Clients from '@/components/Clients'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'

import { FloatingNav } from '@/components/ui/floating-navbar'
import { navItems } from '@/data'

export default function Home() {
    return (
        <main className="relative bg-[#020619] flex justify-center items-center flex-col mx-auto sm:px-10 px-5 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] overflow-clip">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#020619] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            <div className='max-w-7xl w-full z-10'>
                <FloatingNav navItems={navItems} />
                {/* Hero Component */}
                <Hero />
                {/* Grid Component */}
                <Grid />
                {/* Recent Projects Component */}
                <section id="projects">
                    <RecentProjects />
                </section>
                {/* Testimonials Component */}
                <section id="testimonials">
                    <Clients />
                </section>
                {/* Experience Component */}
                <section id="experience">
                    <Experience />
                </section>
                {/* Contact Component */}
                <section id="contact">
                    <Footer />
                </section>
            </div>
        </main>
    )
}
