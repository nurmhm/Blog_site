"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  MessageSquare,
  Settings,
  BarChart3,
  Users,
  Eye,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const menuItems = [
  {
    title: "ড্যাশবোর্ড",
    url: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "পোস্ট ব্যবস্থাপনা",
    url: "/admin/posts",
    icon: FileText,
  },
  {
    title: "ক্যাটেগরি",
    url: "/admin/categories",
    icon: FolderOpen,
  },
  {
    title: "মন্তব্য",
    url: "/admin/comments",
    icon: MessageSquare,
  },
  {
    title: "পরিসংখ্যান",
    url: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "ব্যবহারকারী",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "সেটিংস",
    url: "/admin/settings",
    icon: Settings,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    const response = await fetch("/api/logout", {
      method: "POST",
    });

    if (response.ok) {
      router.push("/admin/login");
    }
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">ই</span>
          </div>
          <div>
            <h2 className="font-bold text-lg">অ্যাডমিন প্যানেল</h2>
            <p className="text-xs text-muted-foreground">ইসলামিক জ্ঞান</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>মূল মেনু</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>দ্রুত লিংক</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/" target="_blank">
                    <Eye className="h-4 w-4" />
                    <span>সাইট দেখুন</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <Button variant="outline" className="w-full justify-start bg-transparent" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          লগআউট
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
