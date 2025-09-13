import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Heart, Star } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে - ইসলামিক জ্ঞান ভাগাভাগি",
  description: "ইসলামিক জ্ঞান ভাগাভাগির মাধ্যমে সমাজে ইতিবাচক পরিবর্তন আনার লক্ষ্যে আমাদের যাত্রা।",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">আমাদের সম্পর্কে</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              ইসলামিক জ্ঞান ভাগাভাগির মাধ্যমে সমাজে ইতিবাচক পরিবর্তন আনার লক্ষ্যে আমাদের যাত্রা
            </p>
          </div>

          {/* Mission Section */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">আমাদের লক্ষ্য</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    আমাদের প্রধান লক্ষ্য হলো ইসলামের সঠিক শিক্ষা ও মূল্যবোধ সবার কাছে পৌঁছে দেওয়া। আমরা বিশ্বাস করি যে জ্ঞান ভাগাভাগির মাধ্যমে
                    আমরা একটি উন্নত ও সুন্দর সমাজ গড়তে পারি।
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    কুরআন ও সুন্নাহর আলোকে জীবনযাত্রার নির্দেশনা প্রদান করাই আমাদের মূল উদ্দেশ্য।
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">৫০০+</div>
                    <div className="text-sm text-muted-foreground">প্রবন্ধ</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">১০,০০০+</div>
                    <div className="text-sm text-muted-foreground">পাঠক</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">৫,০০০+</div>
                    <div className="text-sm text-muted-foreground">লাইক</div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">৪.৮</div>
                    <div className="text-sm text-muted-foreground">রেটিং</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Author Section */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">আ.স</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">আব্দুল্লাহ সাদিক</h3>
                  <p className="text-muted-foreground text-sm mb-4">প্রতিষ্ঠাতা ও প্রধান লেখক</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">ইসলামিক স্কলার</Badge>
                    <Badge variant="secondary">লেখক</Badge>
                    <Badge variant="secondary">গবেষক</Badge>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold mb-4">লেখক পরিচিতি</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    আব্দুল্লাহ সাদিক একজন অভিজ্ঞ ইসলামিক স্কলার এবং লেখক। তিনি গত ১৫ বছর ধরে ইসলামিক শিক্ষা ও গবেষণার ক্ষেত্রে কাজ করে
                    আসছেন। তার লেখা বিভিন্ন বই ও প্রবন্ধ ব্যাপক জনপ্রিয়তা পেয়েছে।
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    তিনি আল-আজহার বিশ্ববিদ্যালয় থেকে ইসলামিক স্টাডিজে মাস্টার্স ডিগ্রি অর্জন করেছেন এবং বর্তমানে ঢাকা বিশ্ববিদ্যালয়ে ইসলামিক
                    স্টাডিজ বিভাগে অধ্যাপনা করছেন।
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div>
                      <h4 className="font-semibold mb-2">শিক্ষাগত যোগ্যতা:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• পিএইচডি, ইসলামিক স্টাডিজ</li>
                        <li>• মাস্টার্স, আল-আজহার বিশ্ববিদ্যালয়</li>
                        <li>• আলিম, জামিয়া ইসলামিয়া</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">বিশেষত্ব:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• তাফসীর ও হাদিস</li>
                        <li>• ইসলামিক ফিকহ</li>
                        <li>• আধুনিক ইসলামিক চিন্তাধারা</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">জ্ঞান ভাগাভাগি</h3>
                <p className="text-muted-foreground text-sm">ইসলামের সঠিক জ্ঞান সবার কাছে পৌঁছে দেওয়া আমাদের প্রধান লক্ষ্য।</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">সমাজসেবা</h3>
                <p className="text-muted-foreground text-sm">ইসলামিক মূল্যবোধের মাধ্যমে সমাজে ইতিবাচক পরিবর্তন আনা।</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">ভালোবাসা</h3>
                <p className="text-muted-foreground text-sm">সবার প্রতি ভালোবাসা ও সহানুভূতি প্রদর্শন করা।</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
