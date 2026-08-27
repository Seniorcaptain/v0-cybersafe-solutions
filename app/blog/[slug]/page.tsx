import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Download, Mail } from "lucide-react"
import { blogPosts } from "@/lib/content/blog-posts"
import ArticleBlocks from "@/components/article-blocks"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Digital Asset Defenders`,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug)

  return (
    <main className="bg-[#08080c] min-h-screen pt-32 pb-24">
      <article className="max-w-3xl mx-auto px-6 md:px-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Insights
        </Link>

        <div className="flex items-center gap-2 mb-5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ff2b4d] bg-[#ff2b4d]/10 border border-[#ff2b4d]/20 rounded-full px-3 py-1">
            {post.tag}
          </span>
          <span className="text-[11px] uppercase tracking-wider text-gray-500">{post.category}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5 text-balance">
          {post.fullTitle}
        </h1>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-5">{post.subtitle}</p>
        <p className="text-sm text-gray-500 italic mb-8">
          A Digital Asset Defenders Deep-Dive Guide &middot; {post.updated}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-14 pb-10 border-b border-white/10">
          <a
            href={post.pdf}
            download
            className="inline-flex items-center justify-center gap-2 bg-[#ff2b4d] hover:bg-[#d4173a] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all"
          >
            <Download className="w-4 h-4" />
            Download the full PDF guide
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/5 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all"
          >
            <Mail className="w-4 h-4" />
            Talk to our team
          </a>
        </div>

        <ArticleBlocks blocks={post.blocks} />

        <div className="mt-16 p-8 rounded-2xl border border-white/10 bg-white/[0.02] text-center">
          <h3 className="text-xl font-bold text-white mb-2">Need this assessed against your organisation?</h3>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Our team can benchmark where you currently stand and build a prioritised remediation plan.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#ff2b4d] hover:bg-[#d4173a] text-white px-7 py-3 rounded-lg font-semibold text-sm transition-all"
          >
            Book a consultation
          </a>
        </div>

        {otherPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-5">
              More insights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block p-4 rounded-lg border border-white/10 hover:border-[#ff2b4d]/30 hover:bg-white/[0.03] transition-all"
                >
                  <p className="text-[10px] uppercase tracking-wider text-[#ff2b4d] mb-1.5">{p.tag}</p>
                  <p className="text-sm font-semibold text-white leading-snug">{p.title}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  )
}
