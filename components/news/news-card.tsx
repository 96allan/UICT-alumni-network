import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight } from "lucide-react"
import type { NewsArticle } from "@/lib/news-data"

interface NewsCardProps {
  article: NewsArticle
  featured?: boolean
}

export function NewsCard({ article, featured = false }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  if (featured) {
    return (
      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-full">
            <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          </div>
          <CardContent className="flex flex-col justify-center p-6">
            <Badge className="w-fit mb-3" variant="secondary">
              {article.category}
            </Badge>
            <h2 className="text-2xl font-bold text-foreground mb-3 text-balance">{article.title}</h2>
            <p className="text-muted-foreground mb-4 text-pretty">{article.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-6 rounded-full overflow-hidden">
                  <Image
                    src={article.authorImage || "/placeholder.svg"}
                    alt={article.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <span>{article.author}</span>
              </div>
              <span>{formatDate(article.publishedDate)}</span>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{article.readTime}</span>
              </div>
            </div>
            <Link
              href={`/news/${article.id}`}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Read More <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary">{article.category}</Badge>
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="relative h-5 w-5 rounded-full overflow-hidden">
              <Image
                src={article.authorImage || "/placeholder.svg"}
                alt={article.author}
                fill
                className="object-cover"
              />
            </div>
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{article.readTime}</span>
          </div>
        </div>
        <Link
          href={`/news/${article.id}`}
          className="mt-4 inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
        >
          Read More <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  )
}
