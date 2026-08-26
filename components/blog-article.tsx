import Link from "next/link"
import { readFile } from "node:fs/promises"
import path from "node:path"
import { ArrowLeft, ArrowUpRight, Download, ShieldCheck } from "lucide-react"

type Section = { heading: string; body: string; bullets?: string[] }

type BlogArticleProps = {
  eyebrow: string
  title: string
  description: string
  readTime: string
  sections: Section[]
  pdfUrl: string
}

export async function BlogArticle({ eyebrow, title, description, readTime, sections, pdfUrl }: BlogArticleProps) {
  const source = await readFile(path.join(process.cwd(), "public", pdfUrl), "utf8").catch(() => "")
  const paragraphs = source.split(/\n\s*\n/).map((item) => item.replace(/\s+/g, " ").trim()).filter(Boolean)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-wide">
            <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" /> DIGITAL ASSET DEFENDERS
          </Link>
          <Link href="/#contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">Get in touch <ArrowUpRight className="ml-1 inline h-4 w-4" aria-hidden="true" /></Link>
        </div>
      </header>

      <article>
        <section className="border-b border-border bg-card/40">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
            <Link href="/#insights" className="mb-12 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to insights</Link>
            <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-end">
              <div>
                <p className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
                <h1 className="max-w-5xl text-balance font-serif text-4xl font-semibold leading-[1.08] md:text-6xl lg:text-7xl">{title}</h1>
                <p className="mt-8 max-w-3xl text-pretty text-lg leading-8 text-muted-foreground">{description}</p>
              </div>
              <div className="border-l border-primary/40 pl-6 font-mono text-xs uppercase leading-6 tracking-[0.16em] text-muted-foreground">
                <p>Digital Asset Defenders</p><p>{readTime}</p><p>Field guide · 2026</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-20">
          <div className="overflow-hidden border border-border bg-card shadow-2xl shadow-black/20">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border bg-background px-6 py-5 md:px-10">
              <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Practical guidance</p><p className="mt-1 text-sm text-muted-foreground">A structured reference for your security team</p></div>
              <a href={pdfUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"><Download className="h-4 w-4" aria-hidden="true" /> View source guide</a>
            </div>
            <div className="px-6 py-12 md:px-16 md:py-16">
              <div className="mb-14 border-b border-border pb-10"><p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Executive briefing</p><h2 className="mt-3 font-serif text-3xl font-semibold md:text-4xl">What this guide covers</h2><p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground">Use this guide as a working document: read it end to end, share it with the owners of each control, and turn each recommendation into evidence your organization can demonstrate.</p></div>
              <div className="space-y-8">
                {paragraphs.length > 0 ? paragraphs.map((paragraph, index) => {
                  const bullet = paragraph.replace(/^[•*-]\s*/, "")
                  const isBullet = bullet !== paragraph
                  return isBullet ? <p key={index} className="pl-8 text-base leading-8 text-muted-foreground before:mr-3 before:text-primary before:content-['•']">{bullet}</p> : <p key={index} className={index === 0 ? "text-lg font-medium leading-8 text-foreground" : "text-base leading-8 text-muted-foreground"}>{paragraph}</p>
                }) : sections.map((section, index) => (
                  <section key={section.heading} className="grid gap-6 md:grid-cols-[72px_1fr]"><div className="font-mono text-sm text-primary">{String(index + 1).padStart(2, "0")}</div><div><h2 className="mb-5 font-serif text-2xl font-semibold md:text-3xl">{section.heading}</h2><p className="max-w-3xl text-base leading-8 text-muted-foreground">{section.body}</p>{section.bullets && <ul className="mt-7 grid gap-3 border-l-2 border-primary/40 pl-6 text-sm leading-7 text-muted-foreground">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</div></section>
                ))}
              </div>
            </div>
            <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-border bg-background px-6 py-5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground md:px-10"><span>Digital Asset Defenders · Security intelligence</span><span>End of guide</span></footer>
          </div>

          <div className="mt-16 border border-primary/30 bg-card p-8 md:p-10"><p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">Need a clear next step?</p><h2 className="mt-3 font-serif text-2xl font-semibold">Turn guidance into an action plan.</h2><p className="mt-3 max-w-2xl leading-7 text-muted-foreground">Our cybersecurity experts can help you assess exposure, prioritize remediation, and prepare for your next audit.</p><Link href="/#contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Start a conversation <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link></div>
        </section>
      </article>
    </main>
  )
}
