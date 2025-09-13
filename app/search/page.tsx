import type { Metadata } from "next"
import { Suspense } from "react"
import { SearchFilters } from "@/components/search-filters"
import { PostCard } from "@/components/post-card"
import { Pagination } from "@/components/pagination"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"

export const metadata: Metadata = {
  title: "অনুসন্ধান - ইসলামিক জ্ঞান ভাগাভাগি",
  description: "আমাদের ব্লগে আপনার পছন্দের বিষয় খুঁজে নিন।",
}

// Dummy search results data
const searchResults = [
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
  {
    id: 3,
    title: "রমজানের প্রস্তুতি",
    excerpt: "পবিত্র রমজান মাসের জন্য কীভাবে আধ্যাত্মিক ও শারীরিক প্রস্তুতি নেওয়া যায়।",
    author: "আব্দুল্লাহ সাদিক",
    date: "২০২৪-০১-১০",
    category: "রমজান",
    readTime: "১০ মিনিট",
    views: 1450,
    comments: 31,
    image: "/ramadan-crescent-moon-islamic.png",
  },
]

function SearchResults({ searchParams }: { searchParams: { q?: string; category?: string } }) {
  const query = searchParams.q || ""
  const category = searchParams.category || ""

  return (
    <div className="space-y-6">
      {/* Search Summary */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Search className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">অনুসন্ধানের ফলাফল</h2>
          </div>
          {query && (
            <p className="text-muted-foreground mb-2">
              "<span className="font-medium text-foreground">{query}</span>" এর জন্য অনুসন্ধান
            </p>
          )}
          {category && (
            <p className="text-muted-foreground mb-2">
              বিভাগ: <span className="font-medium text-foreground">{category}</span>
            </p>
          )}
          <p className="text-sm text-muted-foreground">মোট {searchResults.length} টি ফলাফল পাওয়া গেছে</p>
        </CardContent>
      </Card>

      {/* Search Results */}
      <div className="grid gap-6">
        {searchResults.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
    </div>
  )
}

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; category?: string }
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <SearchFilters />
          </div>

          {/* Search Results */}
          <div className="lg:col-span-3">
            <Suspense fallback={<div>লোড হচ্ছে...</div>}>
              <SearchResults searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}
