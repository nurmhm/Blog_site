import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Eye, MessageCircle, Clock } from "lucide-react"
import Link from "next/link"

const featuredPosts = [
  {
    id: 1,
    title: "রমজানের ফজিলত ও আমল",
    excerpt: "পবিত্র রমজান মাসের বিশেষ ফজিলত এবং এই মাসে করণীয় আমল সম্পর্কে বিস্তারিত আলোচনা...",
    category: "ইবাদত ও আমল",
    author: "মুহাম্মদ আব্দুল্লাহ",
    publishDate: "২৫ ডিসেম্বর, ২০২৪",
    readTime: "৮ মিনিট",
    views: 1250,
    comments: 23,
    image: "/ramadan-crescent-moon-and-mosque-silhouette.png",
    featured: true,
  },
  {
    id: 2,
    title: "সূরা ফাতিহার তাফসীর",
    excerpt: "কুরআনের প্রথম সূরা ফাতিহার বিস্তারিত তাফসীর এবং এর গভীর অর্থ ও শিক্ষা...",
    category: "কুরআন ও তাফসীর",
    author: "মুহাম্মদ আব্দুল্লাহ",
    publishDate: "২০ ডিসেম্বর, ২০২৪",
    readTime: "১২ মিনিট",
    views: 980,
    comments: 15,
    image: "/beautiful-arabic-calligraphy-of-surah-fatiha.png",
    featured: false,
  },
  {
    id: 3,
    title: "হযরত উমর (রা.) এর খিলাফতকাল",
    excerpt: "দ্বিতীয় খলিফা হযরত উমর ইবনুল খাত্তাব (রা.) এর শাসনামল এবং তাঁর অবদান...",
    category: "ইসলামিক ইতিহাস",
    author: "মুহাম্মদ আব্দুল্লাহ",
    publishDate: "১৮ ডিসেম্বর, ২০২৪",
    readTime: "১৫ মিনিট",
    views: 756,
    comments: 12,
    image: "/historic-islamic-architecture-from-umar-era.png",
    featured: false,
  },
  {
    id: 4,
    title: "দৈনন্দিন জীবনের গুরুত্বপূর্ণ দোয়া",
    excerpt: "প্রতিদিনের জীবনে পড়ার জন্য গুরুত্বপূর্ণ দোয়াসমূহ এবং তার ফজিলত...",
    category: "দোয়া ও যিকির",
    author: "মুহাম্মদ আব্দুল্লাহ",
    publishDate: "১৫ ডিসেম্বর, ২০২৪",
    readTime: "৬ মিনিট",
    views: 1100,
    comments: 28,
    image: "/islamic-prayer-hands-with-arabic-dua-text.png",
    featured: false,
  },
]

export function FeaturedPosts() {
  const mainPost = featuredPosts[0]
  const otherPosts = featuredPosts.slice(1)

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">বিশেষ নিবন্ধসমূহ</h2>
          <p className="text-muted-foreground text-lg text-balance max-w-2xl mx-auto">
            সাম্প্রতিক এবং জনপ্রিয় ইসলামিক নিবন্ধগুলি পড়ুন
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Post */}
          <Card className="lg:col-span-1 overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${mainPost.image})` }} />
              <Badge className="absolute top-4 left-4 bg-secondary">ফিচার্ড</Badge>
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Badge variant="outline">{mainPost.category}</Badge>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {mainPost.publishDate}
                </div>
              </div>
              <CardTitle className="text-2xl text-balance group-hover:text-primary transition-colors">
                <Link href={`/post/${mainPost.id}`}>{mainPost.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-balance">{mainPost.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {mainPost.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
                    {mainPost.comments}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {mainPost.readTime}
                  </div>
                </div>
              </div>
              <Link href={`/post/${mainPost.id}`}>
                <Button className="w-full mt-4">সম্পূর্ণ পড়ুন</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Other Posts */}
          <div className="space-y-6">
            {otherPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="flex gap-4 p-4">
                  <div
                    className="w-24 h-24 bg-cover bg-center rounded-lg flex-shrink-0"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <span>•</span>
                      <span>{post.publishDate}</span>
                    </div>
                    <h3 className="font-semibold text-sm mb-2 text-balance group-hover:text-primary transition-colors">
                      <Link href={`/post/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2 text-balance line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
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
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/posts">
            <Button variant="outline" size="lg">
              সব নিবন্ধ দেখুন
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
