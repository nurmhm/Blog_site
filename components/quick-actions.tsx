import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Edit, MessageSquare, BarChart3, Settings, Eye } from "lucide-react"
import Link from "next/link"

const actions = [
  {
    title: "নতুন পোস্ট লিখুন",
    description: "একটি নতুন ব্লগ পোস্ট তৈরি করুন",
    icon: Plus,
    href: "/admin/posts/new",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    title: "পোস্ট সম্পাদনা",
    description: "বিদ্যমান পোস্ট সম্পাদনা করুন",
    icon: Edit,
    href: "/admin/posts",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    title: "মন্তব্য পরিচালনা",
    description: "নতুন মন্তব্য দেখুন ও অনুমোদন করুন",
    icon: MessageSquare,
    href: "/admin/comments",
    color: "bg-purple-500 hover:bg-purple-600",
  },
  {
    title: "পরিসংখ্যান দেখুন",
    description: "বিস্তারিত অ্যানালিটিক্স দেখুন",
    icon: BarChart3,
    href: "/admin/analytics",
    color: "bg-orange-500 hover:bg-orange-600",
  },
  {
    title: "সাইট দেখুন",
    description: "লাইভ সাইট ভিজিট করুন",
    icon: Eye,
    href: "/",
    color: "bg-teal-500 hover:bg-teal-600",
  },
  {
    title: "সেটিংস",
    description: "সাইট সেটিংস পরিবর্তন করুন",
    icon: Settings,
    href: "/admin/settings",
    color: "bg-gray-500 hover:bg-gray-600",
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>দ্রুত কার্যক্রম</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {actions.map((action) => {
            const IconComponent = action.icon
            return (
              <Link key={action.title} href={action.href}>
                <Button
                  variant="outline"
                  className="h-auto p-4 flex flex-col items-start gap-2 w-full hover:bg-muted/50 bg-transparent"
                >
                  <div className={`p-2 rounded-lg text-white ${action.color}`}>
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-sm">{action.title}</p>
                    <p className="text-xs text-muted-foreground text-balance">{action.description}</p>
                  </div>
                </Button>
              </Link>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
