"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, Search, MoreHorizontal, Edit, Trash2, Eye, Calendar } from "lucide-react"

// Dummy posts data
const dummyPosts = [
  {
    id: 1,
    title: "রমজানের ফজিলত ও আমল",
    category: "ইবাদত ও আমল",
    status: "প্রকাশিত",
    views: 1250,
    comments: 23,
    publishDate: "২৫ ডিসেম্বর, ২০২৪",
  },
  {
    id: 2,
    title: "সূরা ফাতিহার তাফসীর",
    category: "কুরআন ও তাফসীর",
    status: "প্রকাশিত",
    views: 980,
    comments: 15,
    publishDate: "২০ ডিসেম্বর, ২০২৪",
  },
  {
    id: 3,
    title: "হযরত উমর (রা.) এর খিলাফতকাল",
    category: "ইসলামিক ইতিহাস",
    status: "খসড়া",
    views: 0,
    comments: 0,
    publishDate: "১৮ ডিসেম্বর, ২০২৪",
  },
  {
    id: 4,
    title: "দৈনন্দিন জীবনের গুরুত্বপূর্ণ দোয়া",
    category: "দোয়া ও যিকির",
    status: "প্রকাশিত",
    views: 1100,
    comments: 28,
    publishDate: "১৫ ডিসেম্বর, ২০২৪",
  },
  {
    id: 5,
    title: "নামাজের গুরুত্ব ও ফজিলত",
    category: "ইবাদত ও আমল",
    status: "পর্যালোচনা",
    views: 0,
    comments: 0,
    publishDate: "১২ ডিসেম্বর, ২০২৪",
  },
]

export function PostsManagement() {
  const [posts, setPosts] = useState(dummyPosts)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "প্রকাশিত":
        return "bg-green-100 text-green-800"
      case "খসড়া":
        return "bg-gray-100 text-gray-800"
      case "পর্যালোচনা":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleDeletePost = (postId: number) => {
    setPosts(posts.filter((post) => post.id !== postId))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">পোস্ট ব্যবস্থাপনা</h1>
          <p className="text-muted-foreground">আপনার সব ব্লগ পোস্ট পরিচালনা করুন</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          নতুন পোস্ট
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>সব পোস্ট ({filteredPosts.length})</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="পোস্ট খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>শিরোনাম</TableHead>
                <TableHead>ক্যাটেগরি</TableHead>
                <TableHead>স্ট্যাটাস</TableHead>
                <TableHead>ভিউ</TableHead>
                <TableHead>মন্তব্য</TableHead>
                <TableHead>তারিখ</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>
                    <div className="font-medium text-balance">{post.title}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{post.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(post.status)}>{post.status}</Badge>
                  </TableCell>
                  <TableCell>{post.views}</TableCell>
                  <TableCell>{post.comments}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {post.publishDate}
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          দেখুন
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          সম্পাদনা
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive" onClick={() => handleDeletePost(post.id)}>
                          <Trash2 className="mr-2 h-4 w-4" />
                          মুছুন
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
