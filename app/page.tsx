import { HeroBanner } from "@/components/hero-banner"
import { CategorySection } from "@/components/category-section"
import { FeaturedPosts } from "@/components/featured-posts"
import { SearchSection } from "@/components/search-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroBanner />
        <SearchSection />
        <CategorySection />
        <FeaturedPosts />
      </main>
      <Footer />
    </div>
  )
}
