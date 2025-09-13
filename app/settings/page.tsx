import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { User, Bell, Shield, Palette, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "সেটিংস - ইসলামিক জ্ঞান ভাগাভাগি",
  description: "আপনার অ্যাকাউন্ট ও পছন্দের সেটিংস পরিবর্তন করুন।",
}

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">সেটিংস</h1>
              <p className="text-muted-foreground">আপনার অ্যাকাউন্ট ও পছন্দের সেটিংস পরিবর্তন করুন</p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              {/* Settings Navigation */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-4">
                    <nav className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start bg-primary/10 text-primary">
                        <User className="h-4 w-4 mr-2" />
                        প্রোফাইল
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <Bell className="h-4 w-4 mr-2" />
                        নোটিফিকেশন
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <Palette className="h-4 w-4 mr-2" />
                        থিম
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <Globe className="h-4 w-4 mr-2" />
                        ভাষা
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <Shield className="h-4 w-4 mr-2" />
                        নিরাপত্তা
                      </Button>
                    </nav>
                  </CardContent>
                </Card>
              </div>

              {/* Settings Content */}
              <div className="lg:col-span-3 space-y-6">
                {/* Profile Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      প্রোফাইল তথ্য
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">নাম</Label>
                        <Input id="firstName" placeholder="আপনার নাম" defaultValue="আব্দুল্লাহ" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">পদবি</Label>
                        <Input id="lastName" placeholder="আপনার পদবি" defaultValue="সাদিক" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">ইমেইল</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="আপনার ইমেইল"
                        defaultValue="admin@islamicknowledge.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bio">পরিচিতি</Label>
                      <Textarea
                        id="bio"
                        placeholder="আপনার সম্পর্কে লিখুন..."
                        rows={3}
                        defaultValue="ইসলামিক স্কলার এবং লেখক। ইসলামিক জ্ঞান ভাগাভাগির মাধ্যমে সমাজসেবায় নিয়োজিত।"
                      />
                    </div>
                    <Button>প্রোফাইল আপডেট করুন</Button>
                  </CardContent>
                </Card>

                {/* Notification Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      নোটিফিকেশন সেটিংস
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>নতুন মন্তব্য</Label>
                        <p className="text-sm text-muted-foreground">নতুন মন্তব্যের জন্য ইমেইল পান</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>নতুন পোস্ট</Label>
                        <p className="text-sm text-muted-foreground">নতুন পোস্ট প্রকাশের জন্য ইমেইল পান</p>
                      </div>
                      <Switch />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>সাপ্তাহিক সারসংক্ষেপ</Label>
                        <p className="text-sm text-muted-foreground">সাপ্তাহিক কার্যক্রমের সারসংক্ষেপ পান</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                </Card>

                {/* Theme Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Palette className="h-5 w-5" />
                      থিম সেটিংস
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>থিম নির্বাচন</Label>
                      <Select defaultValue="light">
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">হালকা থিম</SelectItem>
                          <SelectItem value="dark">গাঢ় থিম</SelectItem>
                          <SelectItem value="system">সিস্টেম অনুযায়ী</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>ফন্ট সাইজ</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">ছোট</SelectItem>
                          <SelectItem value="medium">মাঝারি</SelectItem>
                          <SelectItem value="large">বড়</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Language Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      ভাষা সেটিংস
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>প্রাথমিক ভাষা</Label>
                      <Select defaultValue="bn">
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bn">বাংলা</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="ar">العربية</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>তারিখ ফরম্যাট</Label>
                      <Select defaultValue="bengali">
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bengali">বাংলা (১৫ জানুয়ারি, ২০২৪)</SelectItem>
                          <SelectItem value="english">English (January 15, 2024)</SelectItem>
                          <SelectItem value="arabic">العربية (١٥ يناير ٢٠٢٤)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Security Settings */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      নিরাপত্তা সেটিংস
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="currentPassword">বর্তমান পাসওয়ার্ড</Label>
                      <Input id="currentPassword" type="password" placeholder="বর্তমান পাসওয়ার্ড লিখুন" />
                    </div>
                    <div>
                      <Label htmlFor="newPassword">নতুন পাসওয়ার্ড</Label>
                      <Input id="newPassword" type="password" placeholder="নতুন পাসওয়ার্ড লিখুন" />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">পাসওয়ার্ড নিশ্চিত করুন</Label>
                      <Input id="confirmPassword" type="password" placeholder="নতুন পাসওয়ার্ড আবার লিখুন" />
                    </div>
                    <Button>পাসওয়ার্ড পরিবর্তন করুন</Button>

                    <Separator className="my-6" />

                    <div className="flex items-center justify-between">
                      <div>
                        <Label>দুই-ধাপ যাচাইকরণ</Label>
                        <p className="text-sm text-muted-foreground">অতিরিক্ত নিরাপত্তার জন্য সক্রিয় করুন</p>
                      </div>
                      <Switch />
                    </div>
                  </CardContent>
                </Card>

                {/* Account Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-destructive">বিপজ্জনক অঞ্চল</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border border-destructive/20 rounded-lg">
                      <h4 className="font-semibold text-destructive mb-2">অ্যাকাউন্ট মুছে ফেলুন</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না। আপনার সমস্ত ডেটা স্থায়ীভাবে মুছে যাবে।
                      </p>
                      <Button variant="destructive" size="sm">
                        অ্যাকাউন্ট মুছুন
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
