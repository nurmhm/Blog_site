"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Search, Filter, X } from "lucide-react"

const categories = [
  { id: "all", name: "সব ক্যাটেগরি" },
  { id: "1", name: "কুরআন ও তাফসীর" },
  { id: "2", name: "হাদিস শরীফ" },
  { id: "3", name: "ইসলামিক ইতিহাস" },
  { id: "4", name: "ইবাদত ও আমল" },
  { id: "5", name: "দোয়া ও যিকির" },
  { id: "6", name: "ইসলামিক জীবনযাত্রা" },
]

const sortOptions = [
  { value: "newest", label: "নতুন প্রথম" },
  { value: "oldest", label: "পুরাতন প্রথম" },
  { value: "popular", label: "জনপ্রিয়তা অনুযায়ী" },
  { value: "comments", label: "মন্তব্য অনুযায়ী" },
]

interface SearchFiltersProps {
  onSearch: (query: string, category: string, sortBy: string) => void
}

export function SearchFilters({ onSearch }: SearchFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [showFilters, setShowFilters] = useState(false)

  const handleSearch = () => {
    onSearch(searchQuery, selectedCategory, sortBy)
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSortBy("newest")
    onSearch("", "all", "newest")
  }

  const hasActiveFilters = searchQuery || selectedCategory !== "all" || sortBy !== "newest"

  return (
    <Card className="p-6 mb-8">
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="নিবন্ধ খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="mr-2 h-4 w-4" />
              ফিল্টার
            </Button>
            <Button onClick={handleSearch}>
              <Search className="mr-2 h-4 w-4" />
              খুঁজুন
            </Button>
          </div>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
            <div>
              <label className="text-sm font-medium mb-2 block">ক্যাটেগরি</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">সাজান</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 pt-2 border-t">
            <span className="text-sm text-muted-foreground">সক্রিয় ফিল্টার:</span>
            {searchQuery && (
              <div className="flex items-center gap-1 bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm">
                খুঁজছেন: "{searchQuery}"
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0"
                  onClick={() => {
                    setSearchQuery("")
                    onSearch("", selectedCategory, sortBy)
                  }}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            )}
            {selectedCategory !== "all" && (
              <div className="flex items-center gap-1 bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm">
                {categories.find((c) => c.id === selectedCategory)?.name}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0"
                  onClick={() => {
                    setSelectedCategory("all")
                    onSearch(searchQuery, "all", sortBy)
                  }}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            )}
            <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground">
              সব ফিল্টার মুছুন
            </Button>
          </div>
        )}
      </div>
    </Card>
  )
}
