"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsCard } from "@/components/news/news-card"
import { newsData } from "@/lib/news-data"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Newspaper } from "lucide-react"

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [category, setCategory] = useState("All Categories")

  const categories = ["All Categories", ...new Set(newsData.map((n) => n.category))]

  const filteredNews = useMemo(() => {
    return newsData.filter((article) => {
      const matchesSearch =
        searchQuery === "" ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = category === "All Categories" || article.category === category
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, category])

  const featuredArticle = filteredNews[0]
  const otherArticles = filteredNews.slice(1)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance">
                Alumni News
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
                Stay updated with the latest news, success stories, and announcements from the UICT alumni community.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                <Newspaper className="inline-block h-4 w-4 mr-1" />
                {filteredNews.length} {filteredNews.length === 1 ? "article" : "articles"}
              </p>
            </div>

            {featuredArticle && (
              <div className="mb-8">
                <NewsCard article={featuredArticle} featured />
              </div>
            )}

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>

            {filteredNews.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No news articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
