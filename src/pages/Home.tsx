import About from '@components/sections/About/About'
import Banner from '@components/sections/Banner/Banner'
import ContactUs from '@components/sections/ContactUs/ContactUs'
import Hero from '@components/sections/Hero/Hero'
import Marquee from '@components/sections/Marquee/Marquee'
import Plan from '@components/sections/Plan/Plan'
import Process from '@components/sections/Process/Process'
import Services from '@components/sections/Services/Services'
import Testimonials from '@components/sections/Testimonials/Testimonials'
import Works from '@components/sections/Works/Works'
import MarqueeServices from '@components/UI/Marquee/MarqueeServices'
import MarqueeSponsors from '@components/UI/Marquee/MarqueeSponsors'
import { MARQUEESERVICES_DATA } from '@entities/data/MarqueeServices.data'
import { MARQUEESPONSORS_DATA } from '@entities/data/MarqueeSponsors.data'
import Reveal from '@features/Reveal/Reveal'
import ScrollToHash from '@features/Scroll/ScrollToHash'

export default function Home() {
    return (
        <main>
            <ScrollToHash />

            <Hero />
            <Reveal><About /></Reveal>
            <Reveal><Works /></Reveal>
            <Reveal><Services /></Reveal>
            <Reveal><Marquee title='Proudly serving some of the top global companies' group={<MarqueeServices variant='marquee__services' blocks={MARQUEESERVICES_DATA} />} /></Reveal>
            <Reveal><Process /></Reveal>
            <Reveal><Plan /></Reveal>
            <Reveal><ContactUs /></Reveal>
            <Reveal><Testimonials /></Reveal>
            <Reveal><Banner /></Reveal>
            <Reveal><Marquee group={<MarqueeSponsors variant='marquee__sponsors' blocks={MARQUEESPONSORS_DATA} />} /></Reveal>
        </main>
    )
}