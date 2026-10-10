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
    <main className="min-h-screen bg-[#f5f1ea] text-[#17191f] pt-24 md:pt-28 pb-24">
      <header className="border-y border-[#17191f]/15 bg-[#f5f1ea]">
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
          <p className="mt-7 max-w-2xl text-base leading-7 text-[#4e5155] md:text-lg">
            Full-length guides on the laws, standards, and controls shaping security across Kenya and East Africa.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-5 px-6 md:grid-cols-2 md:px-10 xl:grid-cols-4" aria-label="Featured articles">
        {blogPosts.map((post, index) => (
          <article key={post.slug} className="group flex min-h-[560px] flex-col bg-[#ebe6de] transition-transform duration-300 hover:-translate-y-1">
            <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${cardTones[index % cardTones.length]}`}>
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(135deg, transparent 0 40%, rgba(255,255,255,.75) 40% 42%, transparent 42% 100%)" }} />
              <Image src="/security-shield.png" alt="" fill className="object-contain p-12 opacity-90 mix-blend-multiply transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 25vw" />
              <span className="absolute left-5 top-5 rounded-full border border-white/50 bg-black/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">{post.tag}</span>
            </div>
            <div className="flex flex-1 flex-col p-6 md:p-7">
              <div className="flex items-center justify-between text-xs text-[#66615a]">
                <span>{post.updated.replace("Updated ", "")}</span>
                <span aria-hidden="true"><ChevronDown className="h-4 w-4 rotate-[-45deg]" /></span>
              </div>
              <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-[#17191f]">{post.category}</p>
              <h2 className="mt-4 text-2xl font-medium leading-[1.1] tracking-[-0.03em]">{post.title}</h2>
              <p className="mt-5 line-clamp-4 text-sm leading-6 text-[#55524e]">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold underline underline-offset-4 transition-colors hover:text-[#a97a00]">
                Read the full guide <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
