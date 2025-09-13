"use client"

import { useState } from "react"
import { PostCard } from "@/components/post-card"
import { Pagination } from "@/components/pagination"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Dummy data - same as in posts-listing but filtered by category
const allPosts = [
  {
    id: 1,
    title: "রমজানের ফজিলত ও আমল",
    excerpt: "পবিত্র রমজান মাসের বিশেষ ফজিলত এবং এই মাসে করণীয় আমল সম্পর্কে বিস্তারিত আলোচনা।",
    category: "ইবাদত ও আমল",
    categoryId: "4",
    author: "মুহাম্মদ আব্দুল্লাহ",
    publishDate: "২৫ ডিসেম্বর, ২০২৪",
    readTime: "৮ মিনিট",
    views: 1250,
    comments: 23,
    image: "/ramadan-crescent-moon-and-mosque-silhouette.png",
    tags: ["রমজান", "রোজা", "ইবাদত"],
  },
  {
    id: 2,
    title: "সূরা ফাতিহার তাফসীর",
    excerpt: "কুরআনের প্রথম সূরা ফাতিহার বিস্তারিত তাফসীর এবং এর গভীর অর্থ ও শিক্ষা।",
    category: "কুরআন ও তাফসীর",
    categoryId: "1",
    author: "মুহাম্মদ আব্দুল্লাহ",
    publishDate: "২০ ডিসেম্বর, ২০২৪",
    readTime: "১২ মিনিট",
    views: 980,
    comments: 15,
    image: "/beautiful-arabic-calligraphy-of-surah-fatiha.png",
    tags: ["কুরআন", "তাফসীর", "সূরা ফাতিহা"],
  },
  {
    id: 5,
    title: "নামাজের গুরুত্ব ও ফজিলত",
    excerpt: "ইসলামের পাঁচটি স্তম্ভের মধ্যে দ্বিতীয় স্তম্ভ নামাজের গুরুত্ব ও ফজিলত সম্পর্কে বিস্তারিত আলোচনা।",
    category: "ইবাদত ও আমল",
    categoryId: "4",
    author: "মুহাম্মদ আব্দুল্লাহ",
    publishDate: "১২ ডিসেম্বর, ২০২৪",
    readTime: "১০ মিনিট",
    views: 890,
    comments: 18,
    image: "/muslims-praying-in-beautiful-mosque.png",
    tags: ["নামাজ", "সালাত", "ইবাদত"],
  },
]

const categories = {
  "1": { name: "কুরআন ও তাফসীর", description: "পবিত্র কুরআনের আয়াত ও তাফসীর" },
  "2": { name: "হাদিস শরীফ", description: "রাসূল (সা.) এর পবিত্র হাদিস" },
  "3": { name: "ইসলামিক ইতিহাস", description: "সাহাবা ও মনীষীদের জীবনী" },
  "4": { name: "ইবাদত ও আমল", description: "নামাজ, রোজা, হজ ও যাকাত" },
  "5": { name: "দোয়া ও যিকির", description: "দৈনন্দিন দোয়া ও আল্লাহর যিকির" },
  "6": { name: "ইসলামিক জীবনযাত্রা", description: "ইসলামিক নীতিমালা ও জীবনযাত্রা" },
}

interface CategoryPostsProps {
  categoryId: string
}

export function CategoryPosts({ categoryId }: CategoryPostsProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("newest")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  const category = categories[categoryId as keyof typeof categories]
  const categoryPosts = allPosts.filter((post) => post.categoryId === categoryId)

  // Sort posts
  const sortedPosts = [...categoryPosts]
  if (sortBy === "newest") {
    sortedPosts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
  } else if (sortBy === "oldest") {
    sortedPosts.sort((a, b) => new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime())
  } else if (sortBy === "popular") {
    sortedPosts.sort((a, b) => b.views - a.views)
  }

  // Calculate pagination
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = sortedPosts.slice(startIndex, startIndex + postsPerPage)

  if (!category) {
    return (
      <div className="container mx-auto px-4 text-center py-12">
        <h1 className="text-2xl font-bold mb-4">ক্যাটেগরি পাওয়া যায়নি</h1>
        <Link href="/categories">
          <Button>সব ক্যাটেগরি দেখুন</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <Link href="/categories">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            সব ক্যাটেগরি
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-4 text-balance">{category.name}</h1>
        <p className="text-muted-foreground text-lg text-balance">{category.description}</p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <p className="text-muted-foreground">মোট {categoryPosts.length}টি নিবন্ধ</p>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">নতুন প্রথম</SelectItem>
              <SelectItem value="oldest">পুরাতন প্রথম</SelectItem>
              <SelectItem value="popular">জনপ্রিয়তা অনুযায়ী</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
            <Grid className="h-4 w-4" />
          </Button>
          <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {currentPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">এই ক্যাটেগরিতে কোনো নিবন্ধ নেই।</p>
        </div>
      ) : (
        <>
          <div
            className={
              viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" : "space-y-6 mb-8"
            }
          >
            {currentPosts.map((post) => (
              <PostCard key={post.id} post={post} viewMode={viewMode} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          )}
        </>
      )}
    </div>
  )
}
