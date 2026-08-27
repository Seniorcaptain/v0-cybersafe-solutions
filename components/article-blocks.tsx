import type { BlogBlock } from "@/lib/content/blog-posts"
import { Info, ListTree } from "lucide-react"

function Inline({ html }: { html: string }) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />
}

export default function ArticleBlocks({ blocks }: { blocks: BlogBlock[] }) {
  const topics = blocks.filter((block): block is BlogBlock & { type: "h2"; text: string } => block.type === "h2" && Boolean(block.text))

  return (
    <div className="space-y-10">
      {topics.length > 0 && (
        <nav aria-label="Article contents" className="rounded-2xl border border-primary/20 bg-primary/[0.06] p-6 md:p-8">
          <div className="mb-5 flex items-center gap-3">
            <ListTree className="h-5 w-5 text-primary" aria-hidden="true" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">In this guide</p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {topics.map((topic, index) => (
              <li key={`${topic.text}-${index}`}>
                <a href={`#topic-${index}`} className="group flex gap-3 text-sm leading-6 text-muted-foreground hover:text-foreground">
                  <span className="font-mono text-primary">{String(index + 1).padStart(2, "0")}</span>
                  <span><Inline html={topic.text} /></span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div className="article-content">
        {blocks.map((b, i) => {
          switch (b.type) {
            case "h2":
              return <h2 id={`topic-${topics.findIndex((topic) => topic === b)}`} key={i} className="mt-16 scroll-mt-28 border-b border-border pb-4 font-serif text-3xl font-bold tracking-tight text-foreground first:mt-0 md:text-4xl"><span className="mr-3 font-mono text-sm font-normal text-primary">{String(topics.findIndex((topic) => topic === b) + 1).padStart(2, "0")}</span><Inline html={b.text || ""} /></h2>
            case "h3":
              return <h3 key={i} className="mt-10 mb-4 scroll-mt-28 font-serif text-xl font-bold text-primary md:text-2xl"><Inline html={b.text || ""} /></h3>
            case "p":
              return <p key={i} className="mb-6 text-base leading-8 text-muted-foreground md:text-[17px]"><Inline html={b.text || ""} /></p>
            case "ul":
              return <ul key={i} className="mb-8 space-y-3 rounded-xl border-l-2 border-primary/50 bg-card/50 py-5 pl-7 pr-5 text-base leading-7 text-muted-foreground">{(b.items || []).map((it, j) => <li key={j} className="relative before:absolute before:-left-4 before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"><Inline html={it} /></li>)}</ul>
            case "ol":
              return <ol key={i} className="mb-8 space-y-4 text-base leading-7 text-muted-foreground">{(b.items || []).map((it, j) => <li key={j} className="flex gap-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-xs text-primary">{j + 1}</span><span><Inline html={it} /></span></li>)}</ol>
            case "quote":
              return <blockquote key={i} className="my-10 border-y border-primary/25 py-7 font-serif text-xl italic leading-8 text-foreground md:text-2xl">“<Inline html={b.text || ""} />”</blockquote>
            case "callout":
              return <div key={i} className="my-10 flex gap-4 rounded-2xl border border-primary/25 bg-primary/[0.07] p-6 md:p-8"><Info className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><div><p className="mb-2 font-semibold text-foreground"><Inline html={b.head || ""} /></p><p className="leading-7 text-muted-foreground"><Inline html={b.body || ""} /></p></div></div>
            case "table":
              return <div key={i} className="my-10 overflow-x-auto rounded-2xl border border-border"><table className="w-full text-left text-sm"><thead className="bg-primary/10 text-foreground"><tr>{(b.header || []).map((h, j) => <th key={j} className="whitespace-nowrap px-5 py-4 font-semibold"><Inline html={h} /></th>)}</tr></thead><tbody>{(b.rows || []).map((row, ri) => <tr key={ri} className="border-t border-border even:bg-card/50">{row.map((cell, ci) => <td key={ci} className="px-5 py-4 align-top leading-6 text-muted-foreground"><Inline html={String(cell)} /></td>)}</tr>)}</tbody></table></div>
            case "sources":
              return <section key={i} className="mt-16 border-t border-border pt-8"><h3 className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">Sources &amp; further reading</h3><ul className="space-y-2 text-sm leading-6 text-muted-foreground">{(b.items || []).map((s, j) => <li key={j}><span className="mr-2 text-primary">→</span><Inline html={s} /></li>)}</ul></section>
            default:
              return null
          }
        })}
      </div>
    </div>
  )
}
