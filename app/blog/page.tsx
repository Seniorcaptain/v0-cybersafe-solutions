import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { blogPosts } from "@/lib/content/blog-posts"

export const metadata: Metadata = {
  title: "Insights | Digital Asset Defenders",
  description:
    "Practical cybersecurity and compliance guidance for organisations across Kenya and East Africa.",
}

const cardTones = [
  "from-[#ffd84a] via-[#f2b82e] to-[#161616]",
  "from-[#22252c] via-[#0b0d12] to-[#e5b62e]",
  "from-[#d9e4e8] via-[#87939b] to-[#1a1c21]",
  "from-[#f1d2b2] via-[#c37c4b] to-[#17191f]",
]

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[#090b10] text-[#f4f5f7] pt-24 md:pt-28 pb-24">
      <header className="border-y border-white/10 bg-[#0d1016]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-10 md:py-7">
          <Link href="/" className="flex items-center gap-3" aria-label="Digital Asset Defenders home">
            <span className="relative h-10 w-10 overflow-hidden rounded-full bg-[#17191f]">
              <Image src="/security-shield.png" alt="" fill className="object-cover" sizes="40px" />
            </span>
            <span className="hidden text-sm font-bold uppercase tracking-[0.18em] sm:inline">DAD / Insights</span>
          </Link>
          <nav className="flex items-center gap-5 text-sm md:gap-10 md:text-base" aria-label="Blog navigation">
            <Link href="/#trust" className="hover:underline">About</Link>
            <Link href="/blog" className="underline underline-offset-4">Insights</Link>
            <Link href="/#contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-[1440px] px-6 pb-10 pt-14 md:px-10 md:pb-14 md:pt-20">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#b48600]">Security field notes</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
            Practical guidance for a changing threat landscape
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#aab1bc] md:text-lg">
            Full-length guides on the laws, standards, and controls shaping security across Kenya and East Africa.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-6 md:grid-cols-2 md:px-10 xl:grid-cols-3" aria-label="Featured articles">
        {blogPosts.map((post, index) => (
          <article key={post.slug} className="group flex min-h-[700px] flex-col bg-[#11151d] shadow-[0_1px_0_rgba(0,0,0,.4)] transition-transform duration-300 hover:-translate-y-1">
            <Link href={`/blog/${post.slug}`} className="relative block h-[300px] overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b48600] md:h-[340px]" aria-label={`Read ${post.title}`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${cardTones[index % cardTones.length]}`} />
              <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(135deg, transparent 0 40%, rgba(255,255,255,.75) 40% 42%, transparent 42% 100%)" }} />
              <Image src="/security-shield.png" alt="" fill className="object-contain p-16 opacity-90 mix-blend-multiply transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
              <span className="absolute left-5 top-5 rounded-full border border-white/50 bg-black/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">{post.tag}</span>
            </Link>
            <div className="flex flex-1 flex-col p-7 md:p-8">
              <div className="flex items-center justify-between border-b border-[#17191f]/15 pb-5 text-xs text-[#aab1bc]">
                <span>{post.updated.replace("Updated ", "")}</span>
                <ChevronDown className="h-4 w-4 rotate-[-45deg]" aria-hidden="true" />
              </div>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-[#f4f5f7]">{post.category}</p>
              <h2 className="mt-4 text-[2rem] font-medium leading-[1.08] tracking-[-0.04em]">{post.title}</h2>
              <p className="mt-5 line-clamp-4 text-[15px] leading-7 text-[#b8bec8]">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-2 pt-10 text-sm font-bold underline underline-offset-4 transition-colors hover:text-[#a97a00]">
                Read the full guide <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
