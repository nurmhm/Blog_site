import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoriesGrid } from "@/components/categories-grid"

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-balance">সব ক্যাটেগরি</h1>
            <p className="text-muted-foreground text-lg text-balance max-w-2xl mx-auto">
              আপনার পছন্দের বিষয় অনুযায়ী ইসলামিক জ্ঞান অর্জন করুন
            </p>
          </div>
          <CategoriesGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
