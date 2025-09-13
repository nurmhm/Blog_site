import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PostCard } from "@/components/post-card"
import { User, BookOpen, Heart, MessageCircle, Calendar, Settings } from "lucide-react"

export const metadata: Metadata = {
  title: "ব্যবহারকারী প্রোফাইল - ইসলামিক জ্ঞান ভাগাভাগি",
  description: "আপনার প্রোফাইল, পছন্দের পোস্ট এবং কার্যক্রম দেখুন।",
}

// Dummy user data
const userData = {
  name: "মোহাম্মদ রহিম",
  email: "rahim@example.com",
  joinDate: "জানুয়ারি ২০২৩",
  bio: "ইসলামিক জ্ঞান অর্জনে আগ্রহী। নিয়মিত কুরআন ও হাদিস অধ্যয়ন করি।",
  stats: {
    postsRead: 156,
    bookmarks: 23,
    comments: 45,
    likes: 89,
  },
}

// Dummy bookmarked posts
const bookmarkedPosts = [
  {
    id: 1,
    title: "নামাজের গুরুত্ব ও ফজিলত",
    excerpt: "ইসলামে নামাজের গুরুত্ব অপরিসীম। এটি মুমিনের জন্য আল্লাহর সাথে সরাসরি যোগাযোগের মাধ্যম।",
    author: "আব্দুল্লাহ সাদিক",
    date: "২০২৪-০১-১৫",
    category: "ইবাদত",
    readTime: "৮ মিনিট",
    views: 1250,
    comments: 23,
    image: "/islamic-prayer-mosque.png",
  },
  {
    id: 2,
    title: "কুরআন তিলাওয়াতের আদব",
    excerpt: "পবিত্র কুরআন তিলাওয়াতের সময় যে আদব-কায়দা মেনে চলা উচিত তার বিস্তারিত আলোচনা।",
    author: "আব্দুল্লাহ সাদিক",
    date: "২০২৪-০১-১২",
    category: "কুরআন",
    readTime: "৬ মিনিট",
    views: 980,
    comments: 18,
    image: "/quran-reading-islamic-calligraphy.png",
  },
]

export default function UserProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Profile Header */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
                        <p className="text-muted-foreground mb-2">{userData.email}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>যোগদান: {userData.joinDate}</span>
                        </div>
                      </div>
                      <Button variant="outline">
                        <Settings className="h-4 w-4 mr-2" />
                        প্রোফাইল সম্পাদনা
                      </Button>
                    </div>
                    <p className="text-muted-foreground mb-4">{userData.bio}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <BookOpen className="h-5 w-5 text-primary mx-auto mb-1" />
                        <div className="font-bold text-lg">{userData.stats.postsRead}</div>
                        <div className="text-xs text-muted-foreground">পোস্ট পড়েছেন</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <Heart className="h-5 w-5 text-primary mx-auto mb-1" />
                        <div className="font-bold text-lg">{userData.stats.bookmarks}</div>
                        <div className="text-xs text-muted-foreground">বুকমার্ক</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <MessageCircle className="h-5 w-5 text-primary mx-auto mb-1" />
                        <div className="font-bold text-lg">{userData.stats.comments}</div>
                        <div className="text-xs text-muted-foreground">মন্তব্য</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <Heart className="h-5 w-5 text-primary mx-auto mb-1" />
                        <div className="font-bold text-lg">{userData.stats.likes}</div>
                        <div className="text-xs text-muted-foreground">লাইক</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profile Tabs */}
            <Tabs defaultValue="bookmarks" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="bookmarks">বুকমার্ক</TabsTrigger>
                <TabsTrigger value="history">পড়ার ইতিহাস</TabsTrigger>
                <TabsTrigger value="comments">মন্তব্য</TabsTrigger>
                <TabsTrigger value="activity">কার্যক্রম</TabsTrigger>
              </TabsList>

              <TabsContent value="bookmarks" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>বুকমার্ক করা পোস্ট</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      {bookmarkedPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="history" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>সাম্প্রতিক পড়া পোস্ট</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {bookmarkedPosts.map((post) => (
                        <div key={post.id} className="flex items-center gap-4 p-4 border rounded-lg">
                          <div className="w-16 h-16 bg-muted rounded-lg"></div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1">{post.title}</h3>
                            <p className="text-sm text-muted-foreground">পড়েছেন: ২ দিন আগে</p>
                          </div>
                          <Badge variant="secondary">{post.category}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="comments" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>আপনার মন্তব্য</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <p className="mb-2">খুবই উপকারী পোস্ট। ধন্যবাদ শেয়ার করার জন্য।</p>
                        <div className="text-sm text-muted-foreground">
                          <span>নামাজের গুরুত্ব ও ফজিলত</span> • <span>৩ দিন আগে</span>
                        </div>
                      </div>
                      <div className="border-l-4 border-primary pl-4">
                        <p className="mb-2">এই বিষয়ে আরও বিস্তারিত জানতে চাই। কোনো বই সাজেস্ট করতে পারেন?</p>
                        <div className="text-sm text-muted-foreground">
                          <span>কুরআন তিলাওয়াতের আদব</span> • <span>১ সপ্তাহ আগে</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>সাম্প্রতিক কার্যক্রম</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span className="text-sm">আপনি "নামাজের গুরুত্ব ও ফজিলত" পোস্টটি লাইক করেছেন</span>
                        <span className="text-xs text-muted-foreground ml-auto">২ ঘন্টা আগে</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-4 w-4 text-blue-500" />
                        <span className="text-sm">আপনি "কুরআন তিলাওয়াতের আদব" পোস্টটি বুকমার্ক করেছেন</span>
                        <span className="text-xs text-muted-foreground ml-auto">১ দিন আগে</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <MessageCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">আপনি "রমজানের প্রস্তুতি" পোস্টে মন্তব্য করেছেন</span>
                        <span className="text-xs text-muted-foreground ml-auto">৩ দিন আগে</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
