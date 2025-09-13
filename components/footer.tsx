import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">ই</span>
              </div>
              <span className="font-bold text-xl">ইসলামিক জ্ঞান</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 text-balance">
              ইসলামিক জ্ঞান ভাগাভাগির একটি প্ল্যাটফর্ম। কুরআন, হাদিস এবং ইসলামিক শিক্ষা নিয়ে আমাদের সাথে থাকুন।
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">দ্রুত লিংক</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  ক্যাটেগরি
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  আমার সম্পর্কে
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  যোগাযোগ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  প্রাইভেসি পলিসি
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">জনপ্রিয় বিষয়</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/quran"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  কুরআন ও তাফসীর
                </Link>
              </li>
              <li>
                <Link
                  href="/category/hadith"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  হাদিস শরীফ
                </Link>
              </li>
              <li>
                <Link
                  href="/category/history"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  ইসলামিক ইতিহাস
                </Link>
              </li>
              <li>
                <Link
                  href="/category/worship"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  ইবাদত ও আমল
                </Link>
              </li>
              <li>
                <Link
                  href="/category/dua"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  দোয়া ও যিকির
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">নিউজলেটার</h3>
            <p className="text-primary-foreground/80 mb-4 text-balance">নতুন পোস্টের আপডেট পেতে সাবস্ক্রাইব করুন</p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="আপনার ইমেইল"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="w-full">
                সাবস্ক্রাইব করুন
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm">© ২০২৪ ইসলামিক জ্ঞান। সকল অধিকার সংরক্ষিত।</p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center text-primary-foreground/80 text-sm">
                <Mail className="h-4 w-4 mr-1" />
                info@islamicknowledge.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
