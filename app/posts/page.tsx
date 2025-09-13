import { PostsListing } from "@/components/posts-listing"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PostsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <PostsListing />
      </main>
      <Footer />
    </div>
  )
}
