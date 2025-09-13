import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Heart, Eye, FileText } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "comment",
    user: "আহমদ হাসান",
    action: "নতুন মন্তব্য করেছেন",
    target: "রমজানের ফজিলত ও আমল",
    time: "৫ মিনিট আগে",
    icon: MessageSquare,
    color: "text-blue-600",
  },
  {
    id: 2,
    type: "like",
    user: "ফাতিমা খাতুন",
    action: "পোস্ট লাইক করেছেন",
    target: "সূরা ফাতিহার তাফসীর",
    time: "১৫ মিনিট আগে",
    icon: Heart,
    color: "text-red-600",
  },
  {
    id: 3,
    type: "view",
    user: "অজানা পাঠক",
    action: "পোস্ট দেখেছেন",
    target: "হযরত উমর (রা.) এর খিলাফতকাল",
    time: "৩০ মিনিট আগে",
    icon: Eye,
    color: "text-green-600",
  },
  {
    id: 4,
    type: "post",
    user: "আপনি",
    action: "নতুন পোস্ট প্রকাশ করেছেন",
    target: "দৈনন্দিন জীবনের গুরুত্বপূর্ণ দোয়া",
    time: "২ ঘন্টা আগে",
    icon: FileText,
    color: "text-purple-600",
  },
  {
    id: 5,
    type: "comment",
    user: "আবু বকর সিদ্দিক",
    action: "মন্তব্যের উত্তর দিয়েছেন",
    target: "নামাজের গুরুত্ব ও ফজিলত",
    time: "৩ ঘন্টা আগে",
    icon: MessageSquare,
    color: "text-blue-600",
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>সাম্প্রতিক কার্যক্রম</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const IconComponent = activity.icon
            return (
              <div key={activity.id} className="flex items-start gap-3">
                <div className={`p-2 rounded-full bg-muted`}>
                  <IconComponent className={`h-3 w-3 ${activity.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span>{" "}
                    <span className="text-muted-foreground">{activity.action}</span>{" "}
                    <span className="font-medium text-balance">"{activity.target}"</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
