import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User, ArrowRight, BookOpen } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Rise of AI-Powered Cyberattacks: What Organizations Need to Know",
    excerpt:
      "As artificial intelligence becomes more accessible, cybercriminals are leveraging these tools to create more sophisticated attacks. Learn how to defend against this emerging threat.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Threat Intelligence",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Zero Trust Architecture: Implementation Guide for Enterprise",
    excerpt:
      "A comprehensive guide to implementing zero trust security principles in your organization, including practical steps and common pitfalls to avoid.",
    author: "Marcus Rodriguez",
    date: "2024-01-12",
    readTime: "12 min read",
    category: "Security Architecture",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "GDPR Compliance in 2024: New Requirements and Best Practices",
    excerpt:
      "Recent updates to GDPR enforcement and what they mean for your organization. Stay compliant with these updated guidelines and implementation strategies.",
    author: "Dr. Emily Watson",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Compliance",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Cloud Security Misconfigurations: The Hidden Vulnerabilities",
    excerpt:
      "Common cloud security misconfigurations that leave organizations vulnerable and how to identify and fix them before they become security incidents.",
    author: "James Park",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Cloud Security",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            Security Insights
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Stay informed with the latest cybersecurity trends, threats, and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-slate-800 border-slate-700 group hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-slate-300 text-sm mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-sm">{new Date(post.date).toLocaleDateString()}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10 p-0 h-auto"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
