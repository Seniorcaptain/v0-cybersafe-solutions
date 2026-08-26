import type { BlogBlock } from "@/lib/content/blog-posts"
import { Info } from "lucide-react"

// Renders a very small, trusted set of inline tags (<b>, &mdash; already
// resolved to real characters at content-build time). Content is authored
// in-repo, not user input.
function Inline({ html }: { html: string }) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />
}

export default function ArticleBlocks({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="article-content">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="text-2xl md:text-3xl font-bold text-white mt-14 mb-4 pb-3 border-b border-white/10 first:mt-0"
              >
                <Inline html={b.text || ""} />
              </h2>
            )
          case "h3":
            return (
              <h3 key={i} className="text-lg md:text-xl font-semibold text-[#ff8a9c] mt-8 mb-3">
                <Inline html={b.text || ""} />
              </h3>
            )
          case "p":
            return (
              <p key={i} className="text-gray-300 leading-relaxed mb-5 text-[15px] md:text-base">
                <Inline html={b.text || ""} />
              </p>
            )
          case "ul":
            return (
              <ul key={i} className="space-y-2.5 mb-6 pl-1">
                {(b.items || []).map((it, j) => (
                  <li key={j} className="flex gap-3 text-gray-300 leading-relaxed text-[15px] md:text-base">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#ff2b4d] shrink-0" />
                    <span>
                      <Inline html={it} />
                    </span>
                  </li>
                ))}
              </ul>
            )
          case "ol":
            return (
              <ol key={i} className="space-y-2.5 mb-6 pl-1 counter-reset-list">
                {(b.items || []).map((it, j) => (
                  <li key={j} className="flex gap-3 text-gray-300 leading-relaxed text-[15px] md:text-base">
                    <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-[#ff2b4d]/15 text-[#ff8a9c] text-xs font-semibold flex items-center justify-center">
                      {j + 1}
                    </span>
                    <span className="pt-0.5">
                      <Inline html={it} />
                    </span>
                  </li>
                ))}
              </ol>
            )
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-2 border-[#ff2b4d] pl-5 py-1 my-6 italic text-gray-400 text-[15px] leading-relaxed"
              >
                &ldquo;<Inline html={b.text || ""} />&rdquo;
              </blockquote>
            )
          case "callout":
            return (
              <div
                key={i}
                className="my-7 rounded-xl border border-[#ff2b4d]/25 bg-[#ff2b4d]/[0.06] p-5 md:p-6 flex gap-4"
              >
                <Info className="w-5 h-5 text-[#ff2b4d] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold mb-1.5">
                    <Inline html={b.head || ""} />
                  </p>
                  <p className="text-gray-300 leading-relaxed text-[15px]">
                    <Inline html={b.body || ""} />
                  </p>
                </div>
              </div>
            )
          case "table":
            return (
              <div key={i} className="my-7 overflow-x-auto rounded-lg border border-white/10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-white/[0.04]">
                      {(b.header || []).map((h, j) => (
                        <th
                          key={j}
                          className="text-left font-semibold text-white px-4 py-3 border-b border-white/10 whitespace-nowrap"
                        >
                          <Inline html={h} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(b.rows || []).map((row, ri) => (
                      <tr key={ri} className={ri % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"}>
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-4 py-3 text-gray-300 align-top border-b border-white/5">
                            <Inline html={String(cell)} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          case "sources":
            return (
              <div key={i} className="mt-14 pt-8 border-t border-white/10">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">
                  Sources &amp; Further Reading
                </h3>
                <ul className="space-y-1.5">
                  {(b.items || []).map((s, j) => (
                    <li key={j} className="text-gray-500 text-xs leading-relaxed flex gap-2">
                      <span className="text-[#ff2b4d]">&bull;</span>
                      <Inline html={s} />
                    </li>
                  ))}
                </ul>
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
