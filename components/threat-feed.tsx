"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Shield, Globe, Clock, TrendingUp, ExternalLink } from "lucide-react"

const threatData = [
  {
    id: 1,
    type: "Critical",
    title: "New ransomware variant targeting healthcare systems",
    severity: "Critical",
    time: "2 minutes ago",
    source: "The Hacker News",
    affected: "Healthcare, Financial",
    url: "https://thehackernews.com",
  },
  {
    id: 2,
    type: "High",
    title: "Zero-day vulnerability in popular CMS platform",
    severity: "High",
    time: "15 minutes ago",
    source: "Kaspersky Threat Map",
    affected: "Web Applications",
    url: "https://cybermap.kaspersky.com",
  },
  {
    id: 3,
    type: "Medium",
    title: "Phishing campaign targeting corporate executives",
    severity: "Medium",
    time: "1 hour ago",
    source: "Check Point Threat Map",
    affected: "All Industries",
    url: "https://threatmap.checkpoint.com",
  },
  {
    id: 4,
    type: "High",
    title: "Supply chain attack on software development tools",
    severity: "High",
    time: "2 hours ago",
    source: "The Hacker News",
    affected: "Technology",
    url: "https://thehackernews.com",
  },
  {
    id: 5,
    type: "Low",
    title: "Updated botnet infrastructure detected",
    severity: "Low",
    time: "4 hours ago",
    source: "Kaspersky Threat Map",
    affected: "General",
    url: "https://cybermap.kaspersky.com",
  },
]

const metrics = [
  {
    title: "Active Threats",
    value: "247",
    change: "+12",
    icon: AlertTriangle,
    color: "text-red-600",
  },
  {
    title: "Protected Clients",
    value: "1,340",
    change: "+23",
    icon: Shield,
    color: "text-green-600",
  },
  {
    title: "Global Coverage",
    value: "45",
    change: "+2",
    icon: Globe,
    color: "text-blue-600",
  },
  {
    title: "Avg Response Time",
    value: "8 min",
    change: "-2 min",
    icon: Clock,
    color: "text-purple-600",
  },
]

export default function ThreatFeed() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical":
        return "bg-red-100 text-red-700 border-red-300"
      case "high":
        return "bg-orange-100 text-orange-700 border-orange-300"
      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-300"
      case "low":
        return "bg-blue-100 text-blue-700 border-blue-300"
      default:
        return "bg-gray-100 text-gray-700 border-gray-300"
    }
  }

  return (
    <section id="threat-feed" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Live Threat Intelligence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time cybersecurity alerts from leading threat intelligence sources
          </p>
          <div className="mt-4 text-red-600 font-mono text-sm">Last updated: {currentTime.toLocaleString()}</div>
        </div>

        {/* Metrics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon
            return (
              <Card key={index} className="bg-white border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className={`w-8 h-8 ${metric.color}`} />
                    <Badge variant="outline" className="border-red-300 text-red-600 bg-red-50">
                      {metric.change}
                    </Badge>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-gray-600 text-sm">{metric.title}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Threat Feed */}
          <div className="lg:col-span-2">
            <Card className="bg-white border-red-200 h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-gray-900 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  Recent Threats
                  <Badge className="bg-red-100 text-red-700 border-red-300 animate-pulse">Live</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {threatData.map((threat) => (
                  <div
                    key={threat.id}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-red-300 transition-all cursor-pointer"
                    onClick={() => window.open(threat.url, "_blank")}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Badge className={getSeverityColor(threat.severity)}>{threat.severity}</Badge>
                        <span className="text-gray-500 text-sm">{threat.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-gray-300 text-gray-600 text-xs bg-white">
                          {threat.source}
                        </Badge>
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>

                    <h3 className="text-gray-900 font-medium mb-2">{threat.title}</h3>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">Affected: {threat.affected}</span>
                      <button className="text-red-600 hover:text-red-700 text-sm font-semibold transition-colors">
                        Learn More →
                      </button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Threat Intelligence Sources */}
          <div className="space-y-6">
            <Card className="bg-white border-red-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-gray-900 flex items-center gap-3">
                  <Globe className="w-5 h-5 text-red-600" />
                  Threat Maps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href="https://threatmap.checkpoint.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200 hover:border-red-400 transition-colors"
                >
                  <div>
                    <p className="text-gray-900 font-medium text-sm">Check Point Threat Map</p>
                    <p className="text-gray-600 text-xs">Live cyber attacks worldwide</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-red-600" />
                </a>
                <a
                  href="https://cybermap.kaspersky.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200 hover:border-red-400 transition-colors"
                >
                  <div>
                    <p className="text-gray-900 font-medium text-sm">Kaspersky Cyber Map</p>
                    <p className="text-gray-600 text-xs">Real-time threat intelligence</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-red-600" />
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white border-red-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg text-gray-900 flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-red-600" />
                  Latest News
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://thehackernews.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-200 hover:border-red-400 transition-colors"
                >
                  <div>
                    <p className="text-gray-900 font-medium text-sm">The Hacker News</p>
                    <p className="text-gray-600 text-xs">Cybersecurity news & updates</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-red-600" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
