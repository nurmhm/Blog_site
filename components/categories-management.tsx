"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash2, BookOpen, MessageSquare, Clock, Users, Heart, Star } from "lucide-react"

// Dummy categories data
const dummyCategories = [
  {
    id: 1,
    name: "কুরআন ও তাফসীর",
    description: "পবিত্র কুরআনের আয়াত ও তাফসীর",
    postCount: 25,
    icon: "BookOpen",
  },
  {
    id: 2,
    name: "হাদিস শরীফ",
    description: "রাসূল (সা.) এর পবিত্র হাদিস",
    postCount: 30,
    icon: "MessageSquare",
  },
  {
    id: 3,
    name: "ইসলামিক ইতিহাস",
    description: "সাহাবা ও মনীষীদের জীবনী",
    postCount: 20,
    icon: "Clock",
  },
  {
    id: 4,
    name: "ইবাদত ও আমল",
    description: "নামাজ, রোজা, হজ ও যাকাত",
    postCount: 35,
    icon: "Heart",
  },
  {
    id: 5,
    name: "দোয়া ও যিকির",
    description: "দৈনন্দিন দোয়া ও আল্লাহর যিকির",
    postCount: 15,
    icon: "Star",
  },
  {
    id: 6,
    name: "ইসলামিক জীবনযাত্রা",
    description: "ইসলামিক নীতিমালা ও জীবনযাত্রা",
    postCount: 18,
    icon: "Users",
  },
]

const iconMap = {
  BookOpen,
  MessageSquare,
  Clock,
  Users,
  Heart,
  Star,
}

export function CategoriesManagement() {
  const [categories, setCategories] = useState(dummyCategories)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState<any>(null)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    icon: "BookOpen",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (editingCategory) {
      // Update existing category
      setCategories(categories.map((cat) => (cat.id === editingCategory.id ? { ...cat, ...formData } : cat)))
    } else {
      // Add new category
      const newCategory = {
        id: Date.now(),
        ...formData,
        postCount: 0,
      }
      setCategories([...categories, newCategory])
    }

    setFormData({ name: "", description: "", icon: "BookOpen" })
    setEditingCategory(null)
    setIsDialogOpen(false)
  }

  const handleEdit = (category: any) => {
    setEditingCategory(category)
    setFormData({
      name: category.name,
      description: category.description,
      icon: category.icon,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (categoryId: number) => {
    setCategories(categories.filter((cat) => cat.id !== categoryId))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">ক্যাটেগরি ব্যবস্থাপনা</h1>
          <p className="text-muted-foreground">আপনার ব্লগের ক্যাটেগরিসমূহ পরিচালনা করুন</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setEditingCategory(null)
                setFormData({ name: "", description: "", icon: "BookOpen" })
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              নতুন ক্যাটেগরি
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingCategory ? "ক্যাটেগরি সম্পাদনা" : "নতুন ক্যাটেগরি"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">ক্যাটেগরির নাম</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">বিবরণ</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit">{editingCategory ? "আপডেট করুন" : "তৈরি করুন"}</Button>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  বাতিল
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>সব ক্যাটেগরি ({categories.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>আইকন</TableHead>
                <TableHead>নাম</TableHead>
                <TableHead>বিবরণ</TableHead>
                <TableHead>পোস্ট সংখ্যা</TableHead>
                <TableHead className="w-[100px]">কার্যক্রম</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => {
                const IconComponent = iconMap[category.icon as keyof typeof iconMap]
                return (
                  <TableRow key={category.id}>
                    <TableCell>
                      <div className="p-2 rounded-lg bg-muted w-fit">
                        <IconComponent className="h-4 w-4" />
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{category.name}</TableCell>
                    <TableCell className="text-balance">{category.description}</TableCell>
                    <TableCell>{category.postCount}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" onClick={() => handleEdit(category)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(category.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
