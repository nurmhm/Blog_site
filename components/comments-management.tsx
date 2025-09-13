"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Check, X, Eye, MessageSquare, Flag } from "lucide-react"

// Dummy comments data
const dummyComments = [
  {
    id: 1,
    author: "আহমদ হাসান",
    email: "ahmad@example.com",
    avatar: "/muslim-man-avatar.png",
    content: "অত্যন্ত উপকারী একটি পোস্ট। রমজানের ফজিলত সম্পর্কে বিস্তারিত জানতে পারলাম। জাজাকাল্লাহু খাইরান।",
    postTitle: "রমজানের ফজিলত ও আমল",
    status: "অনুমোদনের অপেক্ষায়",
    timestamp: "২ ঘন্টা আগে",
    likes: 0,
  },
  {
    id: 2,
    author: "ফাতিমা খাতুন",
    email: "fatima@example.com",
    avatar: "/muslim-woman-avatar.png",
    content: "মাশাআল্লাহ! খুবই সুন্দর ভাবে রমজানের আমলগুলো বর্ণনা করেছেন। আল্লাহ আপনাকে উত্তম প্রতিদান দিন।",
    postTitle: "রমজানের ফজিলত ও আমল",
    status: "অনুমোদিত",
    timestamp: "৪ ঘন্টা আগে",
    likes: 8,
  },
  {
    id: 3,
    author: "আবু বকর সিদ্দিক",
    email: "abubakar@example.com",
    avatar: "/muslim-elder-avatar.png",
    content: "আলহামদুলিল্লাহ। এই ধরনের পোস্ট আমাদের ঈমান বৃদ্ধিতে সাহায্য করে। আরও এমন পোস্ট চাই।",
    postTitle: "সূরা ফাতিহার তাফসীর",
    status: "অনুমোদিত",
    timestamp: "৬ ঘন্টা আগে",
    likes: 15,
  },
  {
    id: 4,
    author: "অজানা ব্যবহারকারী",
    email: "spam@example.com",
    avatar: "/diverse-user-avatars.png",
    content: "এটি একটি স্প্যাম মন্তব্য যা অনুমোদন করা উচিত নয়।",
    postTitle: "দৈনন্দিন জীবনের গুরুত্বপূর্ণ দোয়া",
    status: "স্প্যাম",
    timestamp: "১ দিন আগে",
    likes: 0,
  },
]

export function CommentsManagement() {
  const [comments, setComments] = useState(dummyComments)
  const [selectedComment, setSelectedComment] = useState<any>(null)
  const [replyContent, setReplyContent] = useState("")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "অনুমোদিত":
        return "bg-green-100 text-green-800"
      case "অনুমোদনের অপেক্ষায়":
        return "bg-yellow-100 text-yellow-800"
      case "স্প্যাম":
        return "bg-red-100 text-red-800"
      case "প্রত্যাখ্যাত":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleApprove = (commentId: number) => {
    setComments(comments.map((comment) => (comment.id === commentId ? { ...comment, status: "অনুমোদিত" } : comment)))
  }

  const handleReject = (commentId: number) => {
    setComments(comments.map((comment) => (comment.id === commentId ? { ...comment, status: "প্রত্যাখ্যাত" } : comment)))
  }

  const handleMarkSpam = (commentId: number) => {
    setComments(comments.map((comment) => (comment.id === commentId ? { ...comment, status: "স্প্যাম" } : comment)))
  }

  const handleReply = () => {
    // Handle reply logic here
    console.log("Reply:", replyContent)
    setReplyContent("")
    setSelectedComment(null)
  }

  const pendingCount = comments.filter((c) => c.status === "অনুমোদনের অপেক্ষায়").length
  const approvedCount = comments.filter((c) => c.status === "অনুমোদিত").length
  const spamCount = comments.filter((c) => c.status === "স্প্যাম").length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">মন্তব্য ব্যবস্থাপনা</h1>
        <p className="text-muted-foreground">আপনার ব্লগের সব মন্তব্য পরিচালনা করুন</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground">মোট মন্তব্য</p>
                <p className="text-2xl font-bold">{comments.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">অনুমোদিত</p>
                <p className="text-2xl font-bold">{approvedCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-yellow-600" />
              <div>
                <p className="text-sm text-muted-foreground">অপেক্ষমাণ</p>
                <p className="text-2xl font-bold">{pendingCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Flag className="h-4 w-4 text-red-600" />
              <div>
                <p className="text-sm text-muted-foreground">স্প্যাম</p>
                <p className="text-2xl font-bold">{spamCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>সব মন্তব্য</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>লেখক</TableHead>
                <TableHead>মন্তব্য</TableHead>
                <TableHead>পোস্ট</TableHead>
                <TableHead>স্ট্যাটাস</TableHead>
                <TableHead>সময়</TableHead>
                <TableHead>কার্যক্রম</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comments.map((comment) => (
                <TableRow key={comment.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.author} />
                        <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{comment.author}</p>
                        <p className="text-xs text-muted-foreground">{comment.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm text-balance line-clamp-2 max-w-xs">{comment.content}</p>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm text-balance">{comment.postTitle}</p>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(comment.status)}>{comment.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <p className="text-sm text-muted-foreground">{comment.timestamp}</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      {comment.status === "অনুমোদনের অপেক্ষায়" && (
                        <>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleApprove(comment.id)}
                            className="text-green-600 hover:text-green-700"
                          >
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleReject(comment.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleMarkSpam(comment.id)}
                        className="text-orange-600 hover:text-orange-700"
                      >
                        <Flag className="h-4 w-4" />
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" onClick={() => setSelectedComment(comment)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>মন্তব্য বিস্তারিত</DialogTitle>
                          </DialogHeader>
                          {selectedComment && (
                            <div className="space-y-4">
                              <div className="flex items-start gap-3">
                                <Avatar>
                                  <AvatarImage
                                    src={selectedComment.avatar || "/placeholder.svg"}
                                    alt={selectedComment.author}
                                  />
                                  <AvatarFallback>{selectedComment.author.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2">
                                    <h4 className="font-semibold">{selectedComment.author}</h4>
                                    <Badge className={getStatusColor(selectedComment.status)}>
                                      {selectedComment.status}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-muted-foreground mb-2">{selectedComment.email}</p>
                                  <p className="text-foreground mb-2 text-balance">{selectedComment.content}</p>
                                  <p className="text-xs text-muted-foreground">
                                    পোস্ট: {selectedComment.postTitle} • {selectedComment.timestamp}
                                  </p>
                                </div>
                              </div>

                              <div className="space-y-2">
                                <label className="text-sm font-medium">উত্তর দিন:</label>
                                <Textarea
                                  placeholder="আপনার উত্তর লিখুন..."
                                  value={replyContent}
                                  onChange={(e) => setReplyContent(e.target.value)}
                                />
                                <Button onClick={handleReply} disabled={!replyContent.trim()}>
                                  উত্তর পাঠান
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
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
