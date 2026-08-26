import Link from "next/link"
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react"

type Section = { heading: string; body: string; bullets?: string[] }

type BlogArticleProps = {
  eyebrow: string
  title: string
  description: string
  readTime: string
  sections: Section[]
  pdfUrl: string
}

export function BlogArticle({ eyebrow, title, description, readTime, sections, pdfUrl }: BlogArticleProps) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-wide">
            <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />
            DIGITAL ASSET DEFENDERS
          </Link>
          <Link href="/#contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
            Get in touch <ArrowUpRight className="ml-1 inline h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </header>

      <article>
        <section className="relative overflow-hidden border-b border-border py-24 md:py-32">
          <div className="absolute inset-0 hero-gradient opacity-30" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-6 md:px-12">
            <Link href="/#insights" className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to insights
            </Link>
            <p className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
            <h1 className="max-w-4xl text-balance text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
            <p className="mt-8 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Digital Asset Defenders · {readTime}</p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16 md:px-12 md:py-24">
          <div className="mb-16 rounded-2xl border border-primary/25 bg-card p-4 md:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">Full guide · original PDF</p>
              <a href={pdfUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-primary hover:underline">Open PDF</a>
            </div>
            <iframe src={pdfUrl} title={`${title} — full guide`} className="h-[75vh] min-h-[640px] w-full rounded-lg border-0 bg-card p-4 text-foreground" />
          </div>

          <div className="space-y-16">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-5 text-2xl font-semibold text-foreground md:text-3xl">{section.heading}</h2>
                <p className="text-base leading-8 text-muted-foreground">{section.body}</p>
                {section.bullets && (
                  <ul className="mt-6 space-y-3 border-l border-primary/40 pl-6 text-sm leading-7 text-muted-foreground">
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-20 rounded-2xl border border-primary/30 bg-card p-8 md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Need a clear next step?</p>
            <h2 className="mt-3 text-2xl font-semibold">Turn guidance into an action plan.</h2>
            <p className="mt-3 leading-7 text-muted-foreground">Our cybersecurity experts can help you assess your exposure, prioritize remediation, and prepare for your next audit.</p>
            <Link href="/#contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Start a conversation <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}
