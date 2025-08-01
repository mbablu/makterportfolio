import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Knowing how to design & code is one thing. Knowing how to think with AI? That’s a whole new skill. Driving Ai towards the right human outcome to meet the empathy.',
  description:
    'I believe that great design operations are efficient, scalable, and user-centered. Whether I’m mapping out multi-user journeys in DERMS for Ontario’s energy sector, or reducing billing workflow times from weeks to days at State Farm, I strive to create human experiences that deliver measurable business value.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Knowing how to design & code is one thing. Knowing how to think with AI? That’s a whole new skill. Driving Ai towards the right human outcome to meet the empathy."
      intro="I believe that great design operations are efficient, scalable, and user-centered. Whether I’m mapping out multi-user journeys in DERMS for Ontario’s energy sector, or reducing billing workflow times from weeks to days at State Farm, I strive to create human experiences that deliver measurable business value."
    >

    <div>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        Open to **full-time or contract** roles as a UX Designer, Product Designer, or UX Strategist — hybrid in Toronto or fully remote within Canada. I bring both hands-on design skills and strategic leadership to projects that aim to improve lives, streamline processes, and deliver with purpose.
      </p>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        Whether you’re building something new, modernizing the old, or need to solve for people-first outcomes—I’d love to hear from you. Let’s design something meaningful.
      </p>
      <h5 className='mt-6 mb-3 text-base font-bold text-zinc-600 dark:text-zinc-400'>
        Contact Info:
      </h5>
      <ol>
        <li className='text-base text-zinc-600 dark:text-zinc-400 flex'>
           <Link className='flex' href="mailto:makhter.designer@gmail.com">
            <span className='mr-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
            </span>
            makhter.designer@gmail.com
          </Link>
          </li>
        <li className='text-base text-zinc-600 dark:text-zinc-400 flex'>
           <Link className='flex' href="https://www.linkedin.com/in/mohammad-akhter-713b84101?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          <span className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </span>
          Follow on Linkedin
          </Link>
          </li>
        <li className='text-base text-zinc-600 dark:text-zinc-400 flex'>
          <Link className='flex' href="#">
            <span className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-text-icon lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
          </span>
          Download Resume
          </Link>
          
        </li>
      </ol>
    </div>
      {/* <div className="space-y-20">
        <SpeakingSection title="Conferences">
          <Appearance
            href="#"
            title="In space, no one can watch you stream — until now"
            description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
            event="SysConf 2021"
            cta="Watch video"
          />
          <Appearance
            href="#"
            title="Lessons learned from our first product recall"
            description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
            event="Business of Startups 2020"
            cta="Watch video"
          />
        </SpeakingSection>
        <SpeakingSection title="Podcasts">
          <Appearance
            href="#"
            title="Using design as a competitive advantage"
            description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
            event="Encoding Design, July 2022"
            cta="Listen to podcast"
          />
          <Appearance
            href="#"
            title="Bootstrapping an aerospace company to $17M ARR"
            description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
            event="The Escape Velocity Show, March 2022"
            cta="Listen to podcast"
          />
          <Appearance
            href="#"
            title="Programming your company operating system"
            description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
            event="How They Work Radio, September 2021"
            cta="Listen to podcast"
          />
        </SpeakingSection>
      </div> */}
    </SimpleLayout>
  )
}
