import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPost } from "@/components/blog-post"
import { RelatedPosts } from "@/components/related-posts"
import { CommentsSection } from "@/components/comments-section"

interface PostPageProps {
  params: {
    id: string
  }
}

export default function PostPage({ params }: PostPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <BlogPost postId={params.id} />
        <RelatedPosts postId={params.id} />
        <CommentsSection postId={params.id} />
      </main>
      <Footer />
    </div>
  )
}
