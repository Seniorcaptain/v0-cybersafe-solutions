import { NextResponse } from "next/server"
import { XMLParser } from "fast-xml-parser"

export const runtime = "nodejs"
export const revalidate = 900 // 15 minutes

const FEED_URL = "https://feeds.feedburner.com/TheHackersNews"

interface FeedItem {
  id: string
  title: string
  link: string
  pubDate: string
  source: string
  severity: "Critical" | "High" | "Medium" | "Low"
  categories: string[]
}

const CRITICAL_KEYWORDS = ["ransomware", "zero-day", "zero day", "actively exploited", "critical vulnerability", "rce"]
const HIGH_KEYWORDS = ["vulnerability", "exploit", "breach", "backdoor", "malware", "flaw", "hack"]
const MEDIUM_KEYWORDS = ["phishing", "scam", "leak", "data exposure", "misconfiguration"]

function classifySeverity(title: string, categories: string[]): FeedItem["severity"] {
  const haystack = `${title} ${categories.join(" ")}`.toLowerCase()
  if (CRITICAL_KEYWORDS.some((k) => haystack.includes(k))) return "Critical"
  if (HIGH_KEYWORDS.some((k) => haystack.includes(k))) return "High"
  if (MEDIUM_KEYWORDS.some((k) => haystack.includes(k))) return "Medium"
  return "Low"
}

function toArray<T>(value: T | T[] | undefined): T[] {
  if (!value) return []
  return Array.isArray(value) ? value : [value]
}

export async function GET() {
  try {
    const res = await fetch(FEED_URL, {
      headers: { "User-Agent": "DigitalAssetDefenders-Site/1.0 (+https://digitalassetdefenders.com)" },
      next: { revalidate },
    })

    if (!res.ok) {
      throw new Error(`Upstream feed returned ${res.status}`)
    }

    const xml = await res.text()
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: "@_" })
    const parsed = parser.parse(xml)

    const rawItems = toArray(parsed?.rss?.channel?.item)

    const items: FeedItem[] = rawItems.slice(0, 12).map((item: any, idx: number) => {
      const categories = toArray(item.category).map((c: any) => (typeof c === "string" ? c : c?.["#text"] ?? ""))
      const title: string = typeof item.title === "string" ? item.title : (item.title?.["#text"] ?? "Untitled")
      const link: string = typeof item.link === "string" ? item.link : (item.link?.["#text"] ?? "https://thehackernews.com/")

      return {
        id: `${idx}-${link}`,
        title,
        link,
        pubDate: item.pubDate || "",
        source: "The Hacker News",
        severity: classifySeverity(title, categories),
        categories: categories.filter(Boolean).slice(0, 3),
      }
    })

    return NextResponse.json(
      {
        success: true,
        fetchedAt: new Date().toISOString(),
        items,
      },
      { headers: { "Cache-Control": "s-maxage=900, stale-while-revalidate=1800" } },
    )
  } catch (error) {
    console.error("Threat feed fetch failed:", error)
    return NextResponse.json(
      { success: false, message: "Unable to reach the live feed right now.", items: [] },
      { status: 502 },
    )
  }
}
