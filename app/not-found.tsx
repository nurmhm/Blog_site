import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search, BookOpen } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-12 text-center">
            {/* 404 Illustration */}
            <div className="mb-8">
              <div className="text-8xl font-bold text-primary/20 mb-4">৪০৪</div>
              <BookOpen className="h-16 w-16 text-primary mx-auto" />
            </div>

            {/* Error Message */}
            <h1 className="text-3xl font-bold text-foreground mb-4">পৃষ্ঠা খুঁজে পাওয়া যায়নি</h1>
            <p className="text-muted-foreground mb-8 text-lg">
              দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি আর উপলব্ধ নেই বা সরানো হয়েছে।
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  হোম পেজে ফিরুন
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/posts">
                  <BookOpen className="h-4 w-4 mr-2" />
                  সব পোস্ট দেখুন
                </Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/search">
                  <Search className="h-4 w-4 mr-2" />
                  অনুসন্ধান করুন
                </Link>
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="font-semibold mb-4">জনপ্রিয় বিভাগসমূহ:</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/category/quran">কুরআন</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/category/hadith">হাদিস</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/category/prayer">নামাজ</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/category/ramadan">রমজান</Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/category/islamic-life">ইসলামিক জীবন</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
