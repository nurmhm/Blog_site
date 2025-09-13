import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Eye, MessageCircle, Clock, User } from "lucide-react"
import Link from "next/link"

interface Post {
  id: number
  title: string
  excerpt: string
  category: string
  categoryId: string
  author: string
  publishDate: string
  readTime: string
  views: number
  comments: number
  image: string
  tags: string[]
}

interface PostCardProps {
  post: Post
  viewMode: "grid" | "list"
}

export function PostCard({ post, viewMode }: PostCardProps) {
  if (viewMode === "list") {
    return (
      <Card className="group hover:shadow-lg transition-all duration-300">
        <div className="flex gap-6 p-6">
          <div
            className="w-48 h-32 bg-cover bg-center rounded-lg flex-shrink-0"
            style={{ backgroundImage: `url(${post.image})` }}
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Badge variant="outline">{post.category}</Badge>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {post.publishDate}
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                {post.author}
              </div>
            </div>
            <CardTitle className="text-xl mb-3 text-balance group-hover:text-primary transition-colors">
              <Link href={`/post/${post.id}`}>{post.title}</Link>
            </CardTitle>
            <p className="text-muted-foreground mb-4 text-balance line-clamp-2">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  {post.views}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-3 w-3" />
                  {post.comments}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
              </div>
              <Link href={`/post/${post.id}`}>
                <Button variant="outline" size="sm">
                  পড়ুন
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative">
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
        <Badge className="absolute top-4 left-4 bg-secondary">{post.category}</Badge>
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {post.publishDate}
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {post.author}
          </div>
        </div>
        <CardTitle className="text-xl text-balance group-hover:text-primary transition-colors">
          <Link href={`/post/${post.id}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 text-balance line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              {post.views}
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="h-3 w-3" />
              {post.comments}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Link href={`/post/${post.id}`}>
          <Button className="w-full">সম্পূর্ণ পড়ুন</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
