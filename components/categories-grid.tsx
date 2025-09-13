import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, MessageSquare, Clock, Users, Heart, Star } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: "1",
    title: "কুরআন ও তাফসীর",
    description: "পবিত্র কুরআনের আয়াত ও তাফসীর নিয়ে বিস্তারিত আলোচনা এবং গভীর অর্থ বিশ্লেষণ",
    icon: BookOpen,
    postCount: 25,
    image: "/beautiful-quran-with-arabic-calligraphy.png",
    color: "bg-blue-500",
    stats: { views: "১২,৫০০", likes: "৮৫০" },
  },
  {
    id: "2",
    title: "হাদিস শরীফ",
    description: "রাসূল (সা.) এর পবিত্র হাদিস এবং সুন্নাহর আলোকে জীবন যাপনের দিকনির্দেশনা",
    icon: MessageSquare,
    postCount: 30,
    image: "/islamic-hadith-book-with-arabic-text.png",
    color: "bg-green-500",
    stats: { views: "১০,২০০", likes: "৭২০" },
  },
  {
    id: "3",
    title: "ইসলামিক ইতিহাস",
    description: "সাহাবা ও মনীষীদের জীবনী এবং ইসলামের গৌরবময় ইতিহাসের বিবরণ",
    icon: Clock,
    postCount: 20,
    image: "/historic-islamic-architecture-and-scholars.png",
    color: "bg-amber-500",
    stats: { views: "৮,৭৫০", likes: "৬১০" },
  },
  {
    id: "4",
    title: "ইবাদত ও আমল",
    description: "নামাজ, রোজা, হজ ও যাকাত সহ ইসলামের মৌলিক ইবাদতের বিস্তারিত নিয়মকানুন",
    icon: Heart,
    postCount: 35,
    image: "/muslims-praying-in-beautiful-mosque.png",
    color: "bg-purple-500",
    stats: { views: "১৫,৩০০", likes: "১,১২০" },
  },
  {
    id: "5",
    title: "দোয়া ও যিকির",
    description: "দৈনন্দিন জীবনের দোয়া, আল্লাহর যিকির এবং আধ্যাত্মিক উন্নতির উপায়",
    icon: Star,
    postCount: 15,
    image: "/islamic-prayer-beads-and-quran.png",
    color: "bg-rose-500",
    stats: { views: "৬,৮০০", likes: "৪৯০" },
  },
  {
    id: "6",
    title: "ইসলামিক জীবনযাত্রা",
    description: "ইসলামিক নীতিমালা অনুযায়ী পারিবারিক ও সামাজিক জীবন যাপনের দিকনির্দেশনা",
    icon: Users,
    postCount: 18,
    image: "/islamic-family-life-and-community.png",
    color: "bg-teal-500",
    stats: { views: "৯,১০০", likes: "৬৭৫" },
  },
]

export function CategoriesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => {
        const IconComponent = category.icon
        return (
          <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="relative">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${category.image})` }} />
              <div className={`absolute top-4 left-4 p-3 rounded-lg ${category.color} text-white`}>
                <IconComponent className="h-6 w-6" />
              </div>
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {category.postCount} পোস্ট
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <div className="flex items-center gap-4 text-white text-sm">
                  <span>{category.stats.views} ভিউ</span>
                  <span>{category.stats.likes} লাইক</span>
                </div>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-balance group-hover:text-primary transition-colors">
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 text-balance">{category.description}</p>
              <Link href={`/category/${category.id}`}>
                <Button className="w-full group-hover:bg-primary/90 transition-colors">সব পোস্ট দেখুন</Button>
              </Link>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
