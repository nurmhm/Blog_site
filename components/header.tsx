"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">ই</span>
            </div>
            <span className="font-bold text-xl text-balance">ইসলামিক জ্ঞান</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              হোম
            </Link>
            <Link href="/categories" className="text-foreground hover:text-primary transition-colors">
              ক্যাটেগরি
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              আমার সম্পর্কে
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              যোগাযোগ
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Link href="/admin/login">
              <Button variant="outline" size="sm" className="hidden md:inline-flex bg-transparent">
                অ্যাডমিন
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                হোম
              </Link>
              <Link href="/categories" className="text-foreground hover:text-primary transition-colors">
                ক্যাটেগরি
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                আমার সম্পর্কে
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                যোগাযোগ
              </Link>
              <Link href="/admin/login">
                <Button variant="outline" size="sm" className="w-fit bg-transparent">
                  অ্যাডমিন
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
