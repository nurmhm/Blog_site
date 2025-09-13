"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { MessageCircle, Heart, Reply, Flag } from "lucide-react"

// Dummy comments data
const dummyComments = [
  {
    id: 1,
    author: "আহমদ হাসান",
    avatar: "/muslim-man-avatar.png",
    content: "অত্যন্ত উপকারী একটি পোস্ট। রমজানের ফজিলত সম্পর্কে বিস্তারিত জানতে পারলাম। জাজাকাল্লাহু খাইরান।",
    timestamp: "২ ঘন্টা আগে",
    likes: 12,
    replies: [
      {
        id: 11,
        author: "মুহাম্মদ আব্দুল্লাহ",
        avatar: "/islamic-scholar-avatar.png",
        content: "ওয়া ইয়্যাকুম। আপনার মন্তব্যের জন্য ধন্যবাদ।",
        timestamp: "১ ঘন্টা আগে",
        likes: 3,
        isAuthor: true,
      },
    ],
  },
  {
    id: 2,
    author: "ফাতিমা খাতুন",
    avatar: "/muslim-woman-avatar.png",
    content: "মাশাআল্লাহ! খুবই সুন্দর ভাবে রমজানের আমলগুলো বর্ণনা করেছেন। আল্লাহ আপনাকে উত্তম প্রতিদান দিন।",
    timestamp: "৪ ঘন্টা আগে",
    likes: 8,
    replies: [],
  },
  {
    id: 3,
    author: "আবু বকর সিদ্দিক",
    avatar: "/muslim-elder-avatar.png",
    content: "আলহামদুলিল্লাহ। এই ধরনের পোস্ট আমাদের ঈমান বৃদ্ধিতে সাহায্য করে। আরও এমন পোস্ট চাই।",
    timestamp: "৬ ঘন্টা আগে",
    likes: 15,
    replies: [],
  },
]

interface CommentsSectionProps {
  postId: string
}

export function CommentsSection({ postId }: CommentsSectionProps) {
  const [comments, setComments] = useState(dummyComments)
  const [newComment, setNewComment] = useState("")
  const [commenterName, setCommenterName] = useState("")
  const [commenterEmail, setCommenterEmail] = useState("")
  const [replyingTo, setReplyingTo] = useState<number | null>(null)
  const [replyContent, setReplyContent] = useState("")

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim() || !commenterName.trim()) return

    const comment = {
      id: Date.now(),
      author: commenterName,
      avatar: "/diverse-user-avatars.png",
      content: newComment,
      timestamp: "এখনই",
      likes: 0,
      replies: [],
    }

    setComments([comment, ...comments])
    setNewComment("")
    setCommenterName("")
    setCommenterEmail("")
  }

  const handleSubmitReply = (commentId: number) => {
    if (!replyContent.trim()) return

    const reply = {
      id: Date.now(),
      author: "আপনি",
      avatar: "/diverse-user-avatars.png",
      content: replyContent,
      timestamp: "এখনই",
      likes: 0,
      isAuthor: false,
    }

    setComments(
      comments.map((comment) =>
        comment.id === commentId ? { ...comment, replies: [...comment.replies, reply] } : comment,
      ),
    )

    setReplyContent("")
    setReplyingTo(null)
  }

  const handleLikeComment = (commentId: number, isReply = false, parentId?: number) => {
    if (isReply && parentId) {
      setComments(
        comments.map((comment) =>
          comment.id === parentId
            ? {
                ...comment,
                replies: comment.replies.map((reply) =>
                  reply.id === commentId ? { ...reply, likes: reply.likes + 1 } : reply,
                ),
              }
            : comment,
        ),
      )
    } else {
      setComments(
        comments.map((comment) => (comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment)),
      )
    }
  }

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <MessageCircle className="h-6 w-6" />
            <h2 className="text-3xl font-bold">মন্তব্যসমূহ ({comments.length})</h2>
          </div>

          {/* Comment Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>আপনার মন্তব্য লিখুন</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitComment} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="আপনার নাম *"
                    value={commenterName}
                    onChange={(e) => setCommenterName(e.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="আপনার ইমেইল (প্রকাশিত হবে না)"
                    value={commenterEmail}
                    onChange={(e) => setCommenterEmail(e.target.value)}
                  />
                </div>
                <Textarea
                  placeholder="আপনার মন্তব্য লিখুন..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  rows={4}
                  required
                />
                <Button type="submit" disabled={!newComment.trim() || !commenterName.trim()}>
                  মন্তব্য পোস্ট করুন
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <Card key={comment.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.author} />
                      <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">{comment.author}</h4>
                        <span className="text-sm text-muted-foreground">{comment.timestamp}</span>
                      </div>
                      <p className="text-foreground mb-3 text-balance">{comment.content}</p>
                      <div className="flex items-center gap-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLikeComment(comment.id)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <Heart className="h-4 w-4 mr-1" />
                          {comment.likes}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <Reply className="h-4 w-4 mr-1" />
                          উত্তর দিন
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                          <Flag className="h-4 w-4 mr-1" />
                          রিপোর্ট
                        </Button>
                      </div>

                      {/* Reply Form */}
                      {replyingTo === comment.id && (
                        <div className="mt-4 p-4 bg-muted rounded-lg">
                          <Textarea
                            placeholder="আপনার উত্তর লিখুন..."
                            value={replyContent}
                            onChange={(e) => setReplyContent(e.target.value)}
                            rows={3}
                          />
                          <div className="flex gap-2 mt-2">
                            <Button size="sm" onClick={() => handleSubmitReply(comment.id)}>
                              উত্তর পোস্ট করুন
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => setReplyingTo(null)}>
                              বাতিল
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Replies */}
                      {comment.replies.length > 0 && (
                        <div className="mt-4 space-y-4">
                          <Separator />
                          {comment.replies.map((reply) => (
                            <div key={reply.id} className="flex items-start gap-3 ml-4">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={reply.avatar || "/placeholder.svg"} alt={reply.author} />
                                <AvatarFallback className="text-xs">{reply.author.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h5 className="font-medium text-sm">
                                    {reply.author}
                                    {reply.isAuthor && (
                                      <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                                        লেখক
                                      </span>
                                    )}
                                  </h5>
                                  <span className="text-xs text-muted-foreground">{reply.timestamp}</span>
                                </div>
                                <p className="text-sm text-foreground mb-2 text-balance">{reply.content}</p>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => handleLikeComment(reply.id, true, comment.id)}
                                  className="text-muted-foreground hover:text-foreground text-xs"
                                >
                                  <Heart className="h-3 w-3 mr-1" />
                                  {reply.likes}
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Comments */}
          <div className="text-center mt-8">
            <Button variant="outline">আরও মন্তব্য লোড করুন</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
