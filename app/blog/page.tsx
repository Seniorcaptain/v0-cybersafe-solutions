import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { blogPosts } from "@/lib/content/blog-posts"

export const metadata: Metadata = {
  title: "Insights | Digital Asset Defenders",
  description:
    "Explore our cybersecurity and compliance content for organisations across Kenya and East Africa. Clear context, actionable steps, and the regulatory detail your team needs to make confident decisions.",
}

export default function BlogIndexPage() {
  return (
    <main className="bg-[#08080c] min-h-screen pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <p className="text-xs md:text-sm font-semibold text-[#ff6b81] uppercase tracking-widest mb-4">
          Featured insights
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-balance">
          Practical guidance for a changing threat landscape
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-6">
          Explore our cybersecurity and compliance content for organisations across Kenya and East
          Africa. Clear context, actionable steps, and the regulatory detail your team needs to make
          confident decisions.
        </p>
        
          href="/#contact"
          className="inline-flex items-center gap-2 text-[#ff6b81] font-semibold hover:text-white transition-colors"
        >
          Request the complete content pack
          <ArrowRight className="w-4 h-4" />
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between p-7 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#ff2b4d]/30 transition-all"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#ff2b4d] bg-[#ff2b4d]/10 border border-[#ff2b4d]/20 rounded-full px-3 py-1">
                    {post.tag}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-gray-500">{post.category}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-[#ff8a9c] transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{post.description}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 group-hover:text-[#ff6b81] transition-colors">
                Explore this topic
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
