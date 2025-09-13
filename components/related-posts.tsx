import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Eye, MessageCircle, Clock } from "lucide-react"
import Link from "next/link"

// Dummy related posts data
const relatedPosts = [
  {
    id: 5,
    title: "নামাজের গুরুত্ব ও ফজিলত",
    excerpt: "ইসলামের পাঁচটি স্তম্ভের মধ্যে দ্বিতীয় স্তম্ভ নামাজের গুরুত্ব ও ফজিলত সম্পর্কে বিস্তারিত আলোচনা।",
    category: "ইবাদত ও আমল",
    publishDate: "১২ ডিসেম্বর, ২০২৪",
    readTime: "১০ মিনিট",
    views: 890,
    comments: 18,
    image: "/muslims-praying-in-beautiful-mosque.png",
  },
  {
    id: 4,
    title: "দৈনন্দিন জীবনের গুরুত্বপূর্ণ দোয়া",
    excerpt: "প্রতিদিনের জীবনে পড়ার জন্য গুরুত্বপূর্ণ দোয়াসমূহ এবং তার ফজিলত।",
    category: "দোয়া ও যিকির",
    publishDate: "১৫ ডিসেম্বর, ২০২৪",
    readTime: "৬ মিনিট",
    views: 1100,
    comments: 28,
    image: "/islamic-prayer-hands-with-arabic-dua-text.png",
  },
  {
    id: 6,
    title: "হাদিসে কুদসীর সংকলন",
    excerpt: "আল্লাহর পক্ষ থেকে নাজিলকৃত হাদিসে কুদসীর একটি সংকলন এবং এর গুরুত্ব ও শিক্ষা।",
    category: "হাদিস শরীফ",
    publishDate: "১০ ডিসেম্বর, ২০২৪",
    readTime: "১৪ মিনিট",
    views: 675,
    comments: 9,
    image: "/islamic-hadith-book-with-arabic-text.png",
  },
]

interface RelatedPostsProps {
  postId: string
}

export function RelatedPosts({ postId }: RelatedPostsProps) {
  return (
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-balance">সম্পর্কিত নিবন্ধসমূহ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${post.image})` }} />
                  <Badge className="absolute top-3 left-3 bg-secondary text-xs">{post.category}</Badge>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.publishDate}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-balance group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/post/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3 text-balance line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
