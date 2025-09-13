import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "যোগাযোগ - ইসলামিক জ্ঞান ভাগাভাগি",
  description: "আমাদের সাথে যোগাযোগ করুন। আপনার মতামত ও পরামর্শ আমাদের কাছে গুরুত্বপূর্ণ।",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="bg-gradient-to-br from-background to-muted/20">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">যোগাযোগ করুন</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              আপনার মতামত, পরামর্শ বা যেকোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">আমাদের লিখুন</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">নাম *</Label>
                        <Input id="name" placeholder="আপনার নাম লিখুন" required />
                      </div>
                      <div>
                        <Label htmlFor="email">ইমেইল *</Label>
                        <Input id="email" type="email" placeholder="আপনার ইমেইল লিখুন" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject">বিষয়</Label>
                      <Input id="subject" placeholder="বার্তার বিষয় লিখুন" />
                    </div>
                    <div>
                      <Label htmlFor="message">বার্তা *</Label>
                      <Textarea id="message" placeholder="আপনার বার্তা লিখুন..." rows={6} required />
                    </div>
                    <Button type="submit" className="w-full">
                      বার্তা পাঠান
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>যোগাযোগের তথ্য</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">ইমেইল</p>
                      <p className="text-sm text-muted-foreground">contact@islamicknowledge.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">ফোন</p>
                      <p className="text-sm text-muted-foreground">+৮৮০ ১৭১২-৩৪৫৬৭৮</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">ঠিকানা</p>
                      <p className="text-sm text-muted-foreground">
                        ঢাকা বিশ্ববিদ্যালয়
                        <br />
                        ঢাকা-১০০০, বাংলাদেশ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">কার্যসময়</p>
                      <p className="text-sm text-muted-foreground">
                        রবি - বৃহস্পতি: ৯:০০ - ১৭:০০
                        <br />
                        শুক্রবার: ১৪:০০ - ১৭:০০
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>সামাজিক মাধ্যম</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      Facebook
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      YouTube
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      Telegram
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">দ্রুত উত্তর পেতে</h3>
                  <p className="text-sm text-muted-foreground">
                    আমরা সাধারণত ২৪ ঘন্টার মধ্যে সব বার্তার উত্তর দেওয়ার চেষ্টা করি। জরুরি বিষয়ে ফোনে যোগাযোগ করুন।
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
