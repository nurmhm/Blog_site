import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Eye, MessageSquare, Users, TrendingUp, Heart } from "lucide-react"

const stats = [
  {
    title: "মোট পোস্ট",
    value: "৪৫",
    change: "+৩ এই মাসে",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "মোট ভিউ",
    value: "১২,৫৪৩",
    change: "+১৮% গত মাস থেকে",
    icon: Eye,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "মন্তব্য",
    value: "২৮৯",
    change: "+২৪ নতুন",
    icon: MessageSquare,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "পাঠক",
    value: "১,৮৯৫",
    change: "+১২% বৃদ্ধি",
    icon: Users,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    title: "লাইক",
    value: "৮৯৪",
    change: "+৫৬ আজকে",
    icon: Heart,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    title: "এনগেজমেন্ট",
    value: "৭৮%",
    change: "+৫% উন্নতি",
    icon: TrendingUp,
    color: "text-teal-600",
    bgColor: "bg-teal-100",
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {stats.map((stat) => {
        const IconComponent = stat.icon
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <IconComponent className={`h-4 w-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
