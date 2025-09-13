"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Lock, User } from "lucide-react"

export function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    console.log("[v0] Login attempt with:", { email, password })

    try {
      // 1. আপনার লগইন API কে কল করা
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      // 2. API রেসপন্স চেক করা
      if (response.ok) {
        // লগইন সফল হলে
        const data = await response.json();
        console.log("[v0] Login successful:", data);

        // redirect parameter চেক করা
        const urlParams = new URLSearchParams(window.location.search);
        const redirectTo = urlParams.get('redirect') || '/admin/dashboard';
        
        // ইউজারকে ড্যাশবোর্ডে রিডাইরেক্ট করা
        router.push(redirectTo);

      } else {
        // লগইন ব্যর্থ হলে
        const errorData = await response.json();
        console.log("[v0] Login failed:", errorData.message);
        setError(errorData.message || "ভুল ইমেইল বা পাসওয়ার্ড। অনুগ্রহ করে আবার চেষ্টা করুন।");
      }

    } catch (apiError) {
      console.error("[v0] Network or API error:", apiError);
      setError("নেটওয়ার্ক বা সার্ভার সংযোগে সমস্যা হয়েছে।");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto h-12 w-12 rounded-lg bg-primary flex items-center justify-center mb-4">
            <Lock className="h-6 w-6 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">অ্যাডমিন লগইন</CardTitle>
          <p className="text-muted-foreground">আপনার ড্যাশবোর্ডে প্রবেশ করুন</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">ইমেইল</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@islamicknowledge.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">পাসওয়ার্ড</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="আপনার পাসওয়ার্ড"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "লগইন করা হচ্ছে..." : "লগইন করুন"}
            </Button>
          </form>

          {/* ডেমো লগইন তথ্য এখন ব্যাকএন্ডের সাথে ম্যাচ করতে হবে */}
          <div className="mt-6 p-4 bg-muted rounded-lg border-2 border-primary/20">
            <p className="text-sm text-muted-foreground mb-2 font-semibold">ডেমো লগইন তথ্য:</p>
            <div className="space-y-1">
              <p className="text-sm font-mono bg-background p-2 rounded">
                <strong>ইমেইল:</strong> আপনার ডেটাবেসের একটি টেস্ট ইমেইল
              </p>
              <p className="text-sm font-mono bg-background p-2 rounded">
                <strong>পাসওয়ার্ড:</strong> সেই ইমেইলের পাসওয়ার্ড
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-2">উপরের তথ্য দিয়ে লগইন করার চেষ্টা করুন</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}