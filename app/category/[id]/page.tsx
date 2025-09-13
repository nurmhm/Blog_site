import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryPosts } from "@/components/category-posts"

interface CategoryPageProps {
  params: {
    id: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <CategoryPosts categoryId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
