"use client"

import { useState } from "react"
import { PostCard } from "@/components/post-card"
import { SearchFilters } from "@/components/search-filters"
import { Pagination } from "@/components/pagination"
import { Button } from "@/components/ui/button"
import { Grid, List } from "lucide-react"

// Dummy data for posts
const allPosts = [
  {
    id: 1,
    title: "রমজানের ফজিলত ও আমল",
    excerpt:
      "পবিত্র রমজান মাসের বিশেষ ফজিলত এবং এই মাসে করণীয় আমল সম্পর্কে বিস্তারিত আলোচনা। রমজান মাস মুসলমানদের জন্য অত্যন্ত গুরুত্বপূর্ণ একটি মাস।",
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
    excerpt: "কুরআনের প্রথম সূরা ফাতিহার বিস্তারিত তাফসীর এবং এর গভীর অর্থ ও শিক্ষা। এই সূরাটি প্রতিদিন আমরা নামাজে পড়ে থাকি।",
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
    id: 3,
    title: "হযরত উমর (রা.) এর খিলাফতকাল",
    excerpt: "দ্বিতীয় খলিফা হযরত উমর ইবনুল খাত্তাব (রা.) এর শাসনামল এবং তাঁর অবদান। তিনি ইসলামিক রাষ্ট্রের ভিত্তি মজবুত করেছিলেন।",
    category: "ইসলামিক ইতিহাস",
    categoryId: "3",
    author: "মুহাম্মদ আব্দুল্লাহ",
    publishDate: "১৮ ডিসেম্বর, ২০২৪",
    readTime: "১৫ মিনিট",
    views: 756,
    comments: 12,
    image: "/historic-islamic-architecture-from-umar-era.png",
    tags: ["ইতিহাস", "খলিফা", "উমর"],
  },
  {
    id: 4,
    title: "দৈনন্দিন জীবনের গুরুত্বপূর্ণ দোয়া",
    excerpt: "প্রতিদিনের জীবনে পড়ার জন্য গুরুত্বপূর্ণ দোয়াসমূহ এবং তার ফজিলত। এই দোয়াগুলো আমাদের জীবনে বরকত নিয়ে আসে।",
    category: "দোয়া ও যিকির",
    categoryId: "5",
    author: "মুহাম্মদ আব্দুল্লাহ",
    publishDate: "১৫ ডিসেম্বর, ২০২৪",
    readTime: "৬ মিনিট",
    views: 1100,
    comments: 28,
    image: "/islamic-prayer-hands-with-arabic-dua-text.png",
    tags: ["দোয়া", "যিকির", "আমল"],
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
  {
    id: 6,
    title: "হাদিসে কুদসীর সংকলন",
    excerpt: "আল্লাহর পক্ষ থেকে নাজিলকৃত হাদিসে কুদসীর একটি সংকলন এবং এর গুরুত্ব ও শিক্ষা।",
    category: "হাদিস শরীফ",
    categoryId: "2",
    author: "মুহাম্মদ আব্দুল্লাহ",
    publishDate: "১০ ডিসেম্বর, ২০২৪",
    readTime: "১৪ মিনিট",
    views: 675,
    comments: 9,
    image: "/islamic-hadith-book-with-arabic-text.png",
    tags: ["হাদিস", "হাদিসে কুদসী", "সুন্নাহ"],
  },
]

export function PostsListing() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filteredPosts, setFilteredPosts] = useState(allPosts)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  const handleSearch = (query: string, category: string, sortBy: string) => {
    let filtered = [...allPosts]

    // Filter by search query
    if (query) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())),
      )
    }

    // Filter by category
    if (category && category !== "all") {
      filtered = filtered.filter((post) => post.categoryId === category)
    }

    // Sort posts
    if (sortBy === "newest") {
      filtered.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    } else if (sortBy === "oldest") {
      filtered.sort((a, b) => new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime())
    } else if (sortBy === "popular") {
      filtered.sort((a, b) => b.views - a.views)
    } else if (sortBy === "comments") {
      filtered.sort((a, b) => b.comments - a.comments)
    }

    setFilteredPosts(filtered)
    setCurrentPage(1) // Reset to first page when filtering
  }

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-balance">সব নিবন্ধ</h1>
        <p className="text-muted-foreground text-lg text-balance">
          ইসলামিক জ্ঞানের বিস্তৃত সংগ্রহ থেকে আপনার পছন্দের নিবন্ধ খুঁজে নিন
        </p>
      </div>

      <SearchFilters onSearch={handleSearch} />

      <div className="flex items-center justify-between mb-6">
        <p className="text-muted-foreground">মোট {filteredPosts.length}টি নিবন্ধ পাওয়া গেছে</p>
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
          <p className="text-muted-foreground text-lg">কোনো নিবন্ধ পাওয়া যায়নি।</p>
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
