import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, MessageSquare, Clock, Users, Heart, Star } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: 1,
    title: "কুরআন ও তাফসীর",
    description: "পবিত্র কুরআনের আয়াত ও তাফসীর",
    icon: BookOpen,
    postCount: 25,
    image: "/beautiful-quran-with-arabic-calligraphy.png",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "হাদিস শরীফ",
    description: "রাসূল (সা.) এর পবিত্র হাদিস",
    icon: MessageSquare,
    postCount: 30,
    image: "/islamic-hadith-book-with-arabic-text.png",
    color: "bg-green-500",
  },
  {
    id: 3,
    title: "ইসলামিক ইতিহাস",
    description: "সাহাবা ও মনীষীদের জীবনী",
    icon: Clock,
    postCount: 20,
    image: "/historic-islamic-architecture-and-scholars.png",
    color: "bg-amber-500",
  },
  {
    id: 4,
    title: "ইবাদত ও আমল",
    description: "নামাজ, রোজা, হজ ও যাকাত",
    icon: Heart,
    postCount: 35,
    image: "/muslims-praying-in-beautiful-mosque.png",
    color: "bg-purple-500",
  },
  {
    id: 5,
    title: "দোয়া ও যিকির",
    description: "দৈনন্দিন দোয়া ও আল্লাহর যিকির",
    icon: Star,
    postCount: 15,
    image: "/islamic-prayer-beads-and-quran.png",
    color: "bg-rose-500",
  },
  {
    id: 6,
    title: "ইসলামিক জীবনযাত্রা",
    description: "ইসলামিক নীতিমালা ও জীবনযাত্রা",
    icon: Users,
    postCount: 18,
    image: "/islamic-family-life-and-community.png",
    color: "bg-teal-500",
  },
]

export function CategorySection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">বিষয়ভিত্তিক ক্যাটেগরি</h2>
          <p className="text-muted-foreground text-lg text-balance max-w-2xl mx-auto">
            আপনার পছন্দের বিষয় অনুযায়ী ইসলামিক জ্ঞান অর্জন করুন
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${category.image})` }} />
                  <div className={`absolute top-4 left-4 p-2 rounded-lg ${category.color} text-white`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded-full text-sm">
                    {category.postCount} পোস্ট
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-balance">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-balance">{category.description}</p>
                  <Link href={`/category/${category.id}`}>
                    <Button className="w-full group-hover:bg-primary/90 transition-colors">বিস্তারিত দেখুন</Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/categories">
            <Button variant="outline" size="lg">
              সব ক্যাটেগরি দেখুন
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
