import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Download, Mail } from "lucide-react"
import { blogPosts } from "@/lib/content/blog-posts"
import ArticleBlocks from "@/components/article-blocks"

export default function BlogPostPage({ slug }: { slug: string }) {
  const post = blogPosts.find((item) => item.slug === slug)
  if (!post) notFound()
  const otherPosts = blogPosts.filter((item) => item.slug !== post.slug)

  return <main className="min-h-screen bg-[#090b10] pb-24 pt-28 text-[#f4f5f7]"><article className="mx-auto max-w-6xl px-6 md:px-12">
    <Link href="/blog" className="mb-10 inline-flex items-center gap-2 text-sm text-[#aab1bc] transition-colors hover:text-[#b48600]"><ArrowLeft className="h-4 w-4" /> Back to Insights</Link>
    <div className="mb-5 flex items-center gap-3"><span className="h-px w-10 bg-primary" /><span className="rounded-full border border-[#b48600]/25 bg-[#b48600]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#8d6900]">{post.tag}</span><span className="text-[11px] uppercase tracking-wider text-[#89837a]">{post.category}</span></div>
    <h1 className="max-w-4xl text-balance font-serif text-4xl font-bold leading-tight tracking-tight md:text-6xl">{post.fullTitle}</h1>
    <p className="mt-6 max-w-3xl text-lg leading-8 text-[#aab1bc] md:text-xl">{post.subtitle}</p>
    <p className="mb-8 mt-5 font-mono text-xs uppercase tracking-[0.16em] text-[#89837a]">A Digital Asset Defenders Deep-Dive Guide · {post.updated}</p>
    <div className="mb-14 flex flex-col gap-3 border-b border-white/10 pb-10 sm:flex-row"><a href={post.pdf} download className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#17191f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b48600]"><Download className="h-4 w-4" /> Download the full PDF guide</a><a href="/#contact" className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#17191f]/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-[#b48600] hover:text-[#8d6900]"><Mail className="h-4 w-4" /> Talk to our team</a></div>
    <ArticleBlocks blocks={post.blocks} />
    <div className="mt-16 rounded-2xl border border-white/10 bg-[#11151d] p-8 text-center"><h3 className="mb-2 text-xl font-bold">Need this assessed against your organisation?</h3><p className="mx-auto mb-6 max-w-lg text-[#aab1bc]">Our team can benchmark where you currently stand and build a prioritised remediation plan.</p><a href="/#contact" className="inline-flex items-center gap-2 rounded-lg bg-[#17191f] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b48600]">Book a consultation</a></div>
    <div className="mt-16"><h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-[#89837a]">More insights</h3><div className="grid grid-cols-1 gap-4 sm:grid-cols-3">{otherPosts.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`} className="block rounded-lg border border-white/10 bg-white/30 p-4 transition-colors hover:border-[#b48600]"><p className="mb-1.5 text-[10px] uppercase tracking-wider text-[#8d6900]">{item.tag}</p><p className="text-sm font-semibold leading-snug">{item.title}</p></Link>)}</div></div>
  </article></main>
}
