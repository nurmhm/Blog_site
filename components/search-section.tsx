"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Search, Filter } from "lucide-react"

export function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <section className="py-12 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-balance">জ্ঞান অন্বেষণ করুন</h2>
          <p className="text-muted-foreground text-balance">আপনার পছন্দের বিষয় খুঁজে নিন এবং ইসলামিক জ্ঞানের ভাণ্ডার থেকে শিখুন</p>
        </div>

        <Card className="max-w-4xl mx-auto p-6">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="কুরআন, হাদিস, ইসলামিক ইতিহাস..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="lg" className="flex-shrink-0 bg-transparent">
                <Filter className="mr-2 h-4 w-4" />
                ফিল্টার
              </Button>
              <Button type="submit" size="lg" className="flex-shrink-0">
                <Search className="mr-2 h-4 w-4" />
                খুঁজুন
              </Button>
            </div>
          </form>

          {/* Popular Search Tags */}
          <div className="mt-6">
            <p className="text-sm text-muted-foreground mb-3">জনপ্রিয় অনুসন্ধান:</p>
            <div className="flex flex-wrap gap-2">
              {["নামাজ", "রোজা", "হজ", "যাকাত", "দোয়া", "সীরাত", "তাফসীর"].map((tag) => (
                <Button key={tag} variant="secondary" size="sm" className="text-xs" onClick={() => setSearchQuery(tag)}>
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
