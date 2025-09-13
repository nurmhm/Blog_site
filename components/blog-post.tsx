"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Calendar,
  Eye,
  MessageCircle,
  Clock,
  Share2,
  Bookmark,
  Heart,
  Facebook,
  Twitter,
  Copy,
  ChevronUp,
} from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Dummy blog post data
const blogPosts = {
  "1": {
    id: 1,
    title: "রমজানের ফজিলত ও আমল",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="lead">পবিত্র রমজান মাস মুসলমানদের জন্য অত্যন্ত গুরুত্বপূর্ণ একটি মাস। এই মাসে আল্লাহ তায়ালা তাঁর বান্দাদের জন্য বিশেষ রহমত ও বরকত নাজিল করেন।</p>
        
        <h2>রমজানের ফজিলত</h2>
        <p>রমজান মাসের ফজিলত সম্পর্কে রাসূলুল্লাহ (সা.) বলেছেন: "যখন রমজান মাস আসে, তখন জান্নাতের দরজাসমূহ খুলে দেওয়া হয় এবং জাহান্নামের দরজাসমূহ বন্ধ করে দেওয়া হয়। আর শয়তানদের শিকলে বেঁধে রাখা হয়।" (বুখারী ও মুসলিম)</p>
        
        <blockquote>
          <p>"হে ঈমানদারগণ! তোমাদের উপর রোজা ফরজ করা হয়েছে, যেমন ফরজ করা হয়েছিল তোমাদের পূর্ববর্তীদের উপর, যাতে তোমরা তাকওয়া অর্জন করতে পার।" - সূরা বাকারা: ১৮৩</p>
        </blockquote>
        
        <h2>রমজানের বিশেষ আমলসমূহ</h2>
        <h3>১. সাহরি খাওয়া</h3>
        <p>সাহরি খাওয়া সুন্নত এবং এতে বরকত রয়েছে। রাসূলুল্লাহ (সা.) বলেছেন: "তোমরা সাহরি খাও, কেননা সাহরিতে বরকত রয়েছে।" (বুখারী ও মুসলিম)</p>
        
        <h3>২. তারাবীহ নামাজ</h3>
        <p>তারাবীহ নামাজ রমজান মাসের বিশেষ নামাজ। এটি সুন্নতে মুয়াক্কাদা। রাসূলুল্লাহ (সা.) এই নামাজ পড়তেন এবং সাহাবীদের উৎসাহিত করতেন।</p>
        
        <h3>৩. কুরআন তিলাওয়াত</h3>
        <p>রমজান মাসে কুরআন তিলাওয়াতের বিশেষ ফজিলত রয়েছে। অনেক মুসলমান এই মাসে পূর্ণ কুরআন খতম করার চেষ্টা করেন।</p>
        
        <h2>লাইলাতুল কদর</h2>
        <p>রমজানের শেষ দশকে লাইলাতুল কদর রয়েছে, যা হাজার মাসের চেয়ে উত্তম। এই রাতে ইবাদত করলে হাজার মাস ইবাদত করার সওয়াব পাওয়া যায়।</p>
        
        <h2>উপসংহার</h2>
        <p>রমজান মাস আমাদের জন্য আল্লাহর পক্ষ থেকে একটি বিশেষ উপহার। এই মাসে আমাদের উচিত বেশি বেশি ইবাদত করা, দান-সদকা করা এবং আল্লাহর কাছে ক্ষমা প্রার্থনা করা।</p>
      </div>
    `,
    excerpt:
      "পবিত্র রমজান মাসের বিশেষ ফজিলত এবং এই মাসে করণীয় আমল সম্পর্কে বিস্তারিত আলোচনা। রমজান মাস মুসলমানদের জন্য অত্যন্ত গুরুত্বপূর্ণ একটি মাস।",
    category: "ইবাদত ও আমল",
    categoryId: "4",
    author: {
      name: "মুহাম্মদ আব্দুল্লাহ",
      bio: "ইসলামিক স্কলার ও লেখক। ঢাকা বিশ্ববিদ্যালয় থেকে ইসলামিক স্টাডিজে স্নাতকোত্তর।",
      avatar: "/islamic-scholar-avatar.png",
      posts: 45,
    },
    publishDate: "২৫ ডিসেম্বর, ২০২৪",
    readTime: "৮ মিনিট",
    views: 1250,
    comments: 23,
    likes: 89,
    image: "/ramadan-crescent-moon-and-mosque-silhouette.png",
    tags: ["রমজান", "রোজা", "ইবাদত", "তাকওয়া", "লাইলাতুল কদর"],
    tableOfContents: [
      { id: "ramadan-fazilat", title: "রমজানের ফজিলত", level: 2 },
      { id: "ramadan-amal", title: "রমজানের বিশেষ আমলসমূহ", level: 2 },
      { id: "sahri", title: "সাহরি খাওয়া", level: 3 },
      { id: "tarabih", title: "তারাবীহ নামাজ", level: 3 },
      { id: "quran", title: "কুরআন তিলাওয়াত", level: 3 },
      { id: "lailatul-qadr", title: "লাইলাতুল কদর", level: 2 },
      { id: "conclusion", title: "উপসংহার", level: 2 },
    ],
  },
  "2": {
    id: 2,
    title: "সূরা ফাতিহার তাফসীর",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="lead">সূরা ফাতিহা কুরআনের প্রথম সূরা এবং এটি 'উম্মুল কুরআন' বা কুরআনের মা নামে পরিচিত। প্রতিদিন আমরা নামাজে এই সূরা পড়ে থাকি।</p>
        
        <h2>সূরা ফাতিহার পরিচয়</h2>
        <p>সূরা ফাতিহা মক্কায় অবতীর্ণ হয়েছে এবং এতে ৭টি আয়াত রয়েছে। এই সূরাটি নামাজের জন্য অপরিহার্য এবং এর বিকল্প কোনো সূরা নেই।</p>
        
        <h2>আয়াতসমূহের তাফসীর</h2>
        <h3>বিসমিল্লাহির রাহমানির রাহীম</h3>
        <p>প্রতিটি কাজ আল্লাহর নামে শুরু করার শিক্ষা দেয়। আল্লাহ অসীম দয়ালু ও করুণাময়।</p>
        
        <h3>আলহামদু লিল্লাহি রাব্বিল আলামীন</h3>
        <p>সমস্ত প্রশংসা আল্লাহর জন্য যিনি সকল জগতের প্রতিপালক। এখানে আল্লাহর প্রশংসা ও কৃতজ্ঞতা প্রকাশ করা হয়েছে।</p>
      </div>
    `,
    excerpt: "কুরআনের প্রথম সূরা ফাতিহার বিস্তারিত তাফসীর এবং এর গভীর অর্থ ও শিক্ষা।",
    category: "কুরআন ও তাফসীর",
    categoryId: "1",
    author: {
      name: "মুহাম্মদ আব্দুল্লাহ",
      bio: "ইসলামিক স্কলার ও লেখক। ঢাকা বিশ্ববিদ্যালয় থেকে ইসলামিক স্টাডিজে স্নাতকোত্তর।",
      avatar: "/islamic-scholar-avatar.png",
      posts: 45,
    },
    publishDate: "২০ ডিসেম্বর, ২০২৪",
    readTime: "১২ মিনিট",
    views: 980,
    comments: 15,
    likes: 67,
    image: "/beautiful-arabic-calligraphy-of-surah-fatiha.png",
    tags: ["কুরআন", "তাফসীর", "সূরা ফাতিহা", "নামাজ"],
    tableOfContents: [
      { id: "introduction", title: "সূরা ফাতিহার পরিচয়", level: 2 },
      { id: "tafsir", title: "আয়াতসমূহের তাফসীর", level: 2 },
    ],
  },
}

interface BlogPostProps {
  postId: string
}

export function BlogPost({ postId }: BlogPostProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [showTOC, setShowTOC] = useState(false)

  const post = blogPosts[postId as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">পোস্ট পাওয়া যায়নি</h1>
        <Link href="/posts">
          <Button>সব পোস্ট দেখুন</Button>
        </Link>
      </div>
    )
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = post.title

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank")
        break
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, "_blank")
        break
      case "copy":
        navigator.clipboard.writeText(url)
        break
    }
    setShowShareMenu(false)
  }

  return (
    <article className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/categories" className="hover:text-primary">
                ক্যাটেগরি
              </Link>
              <span>•</span>
              <Link href={`/category/${post.categoryId}`} className="hover:text-primary">
                <Badge variant="outline">{post.category}</Badge>
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">{post.title}</h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.publishDate}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {post.views} ভিউ
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                {post.comments} মন্তব্য
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                {post.likes} লাইক
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative mb-8">
              <div
                className="w-full h-64 md:h-96 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${post.image})` }}
              />
            </div>

            {/* Author Info */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{post.author.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2 text-balance">{post.author.bio}</p>
                    <p className="text-xs text-muted-foreground">{post.author.posts}টি পোস্ট প্রকাশিত</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents - Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-24">
                <Card className="mb-6">
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Button variant="ghost" size="sm" onClick={() => setShowTOC(!showTOC)} className="lg:hidden">
                        সূচিপত্র
                        <ChevronUp className={`h-4 w-4 ml-1 transition-transform ${showTOC ? "rotate-180" : ""}`} />
                      </Button>
                      <span className="hidden lg:block">সূচিপত্র</span>
                    </h3>
                    <nav className={`space-y-2 ${showTOC ? "block" : "hidden lg:block"}`}>
                      {post.tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block text-sm hover:text-primary transition-colors ${
                            item.level === 3 ? "ml-4 text-muted-foreground" : ""
                          }`}
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button
                    variant={isLiked ? "default" : "outline"}
                    className="w-full"
                    onClick={() => setIsLiked(!isLiked)}
                  >
                    <Heart className={`mr-2 h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                    {isLiked ? "লাইক করেছেন" : "লাইক করুন"}
                  </Button>
                  <Button
                    variant={isBookmarked ? "default" : "outline"}
                    className="w-full"
                    onClick={() => setIsBookmarked(!isBookmarked)}
                  >
                    <Bookmark className={`mr-2 h-4 w-4 ${isBookmarked ? "fill-current" : ""}`} />
                    {isBookmarked ? "সংরক্ষিত" : "সংরক্ষণ করুন"}
                  </Button>
                  <div className="relative">
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => setShowShareMenu(!showShareMenu)}
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      শেয়ার করুন
                    </Button>
                    {showShareMenu && (
                      <Card className="absolute top-full mt-2 w-full z-10">
                        <CardContent className="p-2">
                          <div className="space-y-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start"
                              onClick={() => handleShare("facebook")}
                            >
                              <Facebook className="mr-2 h-4 w-4" />
                              Facebook
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start"
                              onClick={() => handleShare("twitter")}
                            >
                              <Twitter className="mr-2 h-4 w-4" />
                              Twitter
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start"
                              onClick={() => handleShare("copy")}
                            >
                              <Copy className="mr-2 h-4 w-4" />
                              লিংক কপি করুন
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <Card>
                <CardContent className="p-8">
                  <div
                    className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </CardContent>
              </Card>

              {/* Tags */}
              <div className="mt-8">
                <h3 className="font-semibold mb-4">ট্যাগসমূহ</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-secondary/80">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="my-8" />

              {/* Author Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">লেখক সম্পর্কে</h3>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                      <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{post.author.name}</h4>
                      <p className="text-muted-foreground mb-3 text-balance">{post.author.bio}</p>
                      <p className="text-sm text-muted-foreground mb-4">{post.author.posts}টি পোস্ট প্রকাশিত</p>
                      <Button variant="outline" size="sm">
                        আরও পোস্ট দেখুন
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
