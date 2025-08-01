import { Container } from '@/components/Container'

export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children?: React.ReactNode
}) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {title}
        </h1>
        {/* <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I am a Designer & Product Strategist with years of experience designing inclusive, data-informed, and AI-enhanced digital experiences across the energy, insurance, utility, and public sectors. I specialize in solving complex user and business problems through service design, accessibility-first thinking, and rapid iteration using AI and no-code tools. I believe that great design operations are efficient, scalable, and user-centered. Whether he is mapping out multi-user journeys for any sector, or reducing billing workflow times from weeks to days. He strive to create human experiences that deliver measurable business value.
        </p> */}
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}
