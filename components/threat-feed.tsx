"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Shield, Globe, Clock, ExternalLink, RefreshCw } from "lucide-react"

interface FeedItem {
  id: string
  title: string
  link: string
  pubDate: string
  source: string
  severity: "Critical" | "High" | "Medium" | "Low"
  categories: string[]
}

function timeAgo(pubDate: string): string {
  if (!pubDate) return ""
  const date = new Date(pubDate)
  const diffMs = Date.now() - date.getTime()
  const diffMin = Math.round(diffMs / 60000)
  if (diffMin < 1) return "just now"
  if (diffMin < 60) return `${diffMin} min ago`
  const diffHrs = Math.round(diffMin / 60)
  if (diffHrs < 24) return `${diffHrs} hr${diffHrs > 1 ? "s" : ""} ago`
  const diffDays = Math.round(diffHrs / 24)
  return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`
}

const getSeverityColor = (severity: string) => {
  switch (severity.toLowerCase()) {
    case "critical":
      return "bg-red-500/15 text-red-400 border-red-500/30"
    case "high":
      return "bg-orange-500/15 text-orange-400 border-orange-500/30"
    case "medium":
      return "bg-yellow-500/15 text-yellow-400 border-yellow-500/30"
    default:
      return "bg-blue-500/15 text-blue-400 border-blue-500/30"
  }
}

export default function ThreatFeed() {
  const [items, setItems] = useState<FeedItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [lastFetched, setLastFetched] = useState<Date | null>(null)

  const loadFeed = useCallback(async () => {
    try {
      const res = await fetch("/api/threat-feed", { cache: "no-store" })
      const data = await res.json()
      if (data.success) {
        setItems(data.items)
        setError(false)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
      setLastFetched(new Date())
    }
  }, [])

  useEffect(() => {
    loadFeed()
    const interval = setInterval(loadFeed, 5 * 60 * 1000) // refresh every 5 minutes
    return () => clearInterval(interval)
  }, [loadFeed])

  const criticalCount = items.filter((i) => i.severity === "Critical" || i.severity === "High").length

  const metrics = [
    {
      title: "Headlines Tracked",
      value: loading ? "—" : String(items.length),
      icon: Globe,
      color: "text-blue-400",
    },
    {
      title: "Critical / High Alerts",
      value: loading ? "—" : String(criticalCount),
      icon: AlertTriangle,
      color: "text-red-400",
    },
    {
      title: "Source",
      value: "The Hacker News",
      icon: Shield,
      color: "text-violet-400",
    },
    {
      title: "Last Synced",
      value: lastFetched ? lastFetched.toLocaleTimeString() : "—",
      icon: Clock,
      color: "text-gray-300",
    },
  ]

  return (
    <section id="threat-feed" className="py-20 bg-[#0b0b10]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 brand-gradient-text">Live Threat Intelligence</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Live headlines pulled directly from The Hacker News, refreshed automatically every few minutes.
          </p>
        </div>

        {/* Metrics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <Card key={index} className="bg-[#111117] border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className={`w-8 h-8 ${metric.color}`} />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-gray-500 text-sm">{metric.title}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="bg-[#111117] border-white/10">
          <CardHeader className="pb-4 flex flex-row items-center justify-between">
            <CardTitle className="text-xl text-white flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-[#ff2b4d]" />
              Latest Headlines
              {!loading && !error && (
                <Badge className="bg-green-500/15 text-green-400 border-green-500/30 animate-pulse">Live</Badge>
              )}
            </CardTitle>
            <button
              onClick={() => {
                setLoading(true)
                loadFeed()
              }}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-gray-400 text-sm">
                Couldn&apos;t reach the live feed right now — try refreshing, or visit{" "}
                <a
                  href="https://thehackernews.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff6b81] underline"
                >
                  The Hacker News
                </a>{" "}
                directly.
              </div>
            )}

            {loading &&
              !error &&
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="p-4 bg-white/5 rounded-lg border border-white/10 animate-pulse h-20" />
              ))}

            {!loading &&
              items.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white/[0.03] rounded-lg border border-white/10 hover:border-[#ff2b4d]/40 transition-all"
                >
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge className={getSeverityColor(item.severity)}>{item.severity}</Badge>
                      <span className="text-gray-500 text-sm">{timeAgo(item.pubDate)}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Badge variant="outline" className="border-white/15 text-gray-400 text-xs bg-transparent">
                        {item.source}
                      </Badge>
                      <ExternalLink className="w-4 h-4 text-gray-500" />
                    </div>
                  </div>

                  <h3 className="text-white font-medium mb-2">{item.title}</h3>

                  {item.categories.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                      {item.categories.map((c) => (
                        <span key={c} className="text-xs text-gray-500">
                          #{c.replace(/\s+/g, "")}
                        </span>
                      ))}
                    </div>
                  )}
                </a>
              ))}
          </CardContent>
        </Card>

        <p className="text-center text-gray-600 text-xs mt-6">
          Headlines and links are sourced from{" "}
          <a href="https://thehackernews.com/" target="_blank" rel="noopener noreferrer" className="underline">
            thehackernews.com
          </a>
          . Severity labels are an automated estimate, not an official rating.
        </p>
      </div>
    </section>
  )
}
