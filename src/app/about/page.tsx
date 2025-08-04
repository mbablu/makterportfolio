import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/about.png'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Mohammad Akter. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Mohammad Akter. I live in Toronto, Canada, where I design the
            future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’m Mohammad Akhter, a Senior UX/Product Designer and UX Strategist with over 14 years of experience crafting intuitive, accessible, and data-driven digital experiences. I specialize in human-centered design, service design thinking, and the strategic use of AI and no-code tools to accelerate the design process while ensuring quality and user alignment. From public sector innovations like DERMS in Ontario to insurance and utility solutions across North America, I’ve led design efforts that streamline complex systems, reduce operational friction, and empower users to do their best work. My mission is to deliver design that’s not only elegant — but transformative.
            </p>
            {/* <p>
              My approach blends research-driven insights with collaborative problem-solving, aligning user needs with business goals to deliver measurable outcomes. Whether I’m mapping a journey, building a component library, or running design sprints within a SAFe Agile framework—I work to ensure the solution is inclusive, scalable, and user-validated. 
            </p> */}
            {/* <p>
              I spent the next few summers indoors working on a rocket design,
              while I recovered from the multiple surgeries it took to fix my
              badly broken legs. It took nine iterations, but when I was 15 I
              sent my dad’s Blackberry into orbit and was able to transmit a
              photo back down to our family computer from space.
            </p>
            <p>
              Today, I’m the founder of Planetaria, where we’re working on
              civilian space suits and manned shuttle kits you can assemble at
              home so that the next generation of kids really <em>can</em> make
              it to orbit — from the comfort of their own backyards.
            </p> */}
            <h4 className='mt-10 text-xl font-bold text-zinc-600 dark:text-zinc-400'>Some of the areas I thrive in: </h4>
            <ul className='mt-6 space-y-2 text-base text-zinc-600 dark:text-zinc-400 list-disc pl-6'>
              <li>Cross-functional team leadership (UX, product, dev, QA) </li>
              <li>Agile design systems and scalable UI patterns </li>
              <li>Prototyping and testing in complex data-heavy environments </li>
              <li>Service and interaction design for large public-facing applications </li>
              <li>Human-centered design (HCD) & service design thinking</li>
              <li>Scalable design systems & component libraries</li>
              <li>AI-enhanced UX tools (UX Pilot, Figma AI, Visily)</li>
              <li>No-code prototyping to accelerate user feedback loops </li>
              <li>Accessibility (WCAG) and inclusive digital practices</li>
              <li>Cross-functional Agile delivery (SAFe, Scrum, Kanban)</li>
              <li>Research, journey maps, user flows, and data visualizations</li>
              <li>Tools: Figma, Adobe XD, Axure, UXPin, Mural, Smaply</li>
            </ul>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink> */}
            <SocialLink href="https://www.linkedin.com/in/mohammad-akhter-713b84101?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="makhter.designer@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              makhter.designer@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
