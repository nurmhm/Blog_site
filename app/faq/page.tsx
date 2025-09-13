import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HelpCircle, MessageCircle, Book, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "প্রায়শই জিজ্ঞাসিত প্রশ্ন - ইসলামিক জ্ঞান ভাগাভাগি",
  description: "আমাদের ওয়েবসাইট সম্পর্কে প্রায়শই জিজ্ঞাসিত প্রশ্ন ও উত্তর।",
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 text-balance">প্রায়শই জিজ্ঞাসিত প্রশ্ন</h1>
              <p className="text-xl text-muted-foreground text-balance">আমাদের ওয়েবসাইট সম্পর্কে সাধারণ প্রশ্ন ও উত্তর</p>
            </div>

            {/* FAQ Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Book className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold">কন্টেন্ট</h3>
                  <p className="text-sm text-muted-foreground">পোস্ট ও বিষয়বস্তু</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold">অ্যাকাউন্ট</h3>
                  <p className="text-sm text-muted-foreground">নিবন্ধন ও লগইন</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold">মন্তব্য</h3>
                  <p className="text-sm text-muted-foreground">মতামত ও আলোচনা</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <HelpCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold">সাহায্য</h3>
                  <p className="text-sm text-muted-foreground">প্রযুক্তিগত সহায়তা</p>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Accordion */}
            <Card>
              <CardHeader>
                <CardTitle>সাধারণ প্রশ্নাবলী</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>এই ওয়েবসাইটের উদ্দেশ্য কী?</AccordionTrigger>
                    <AccordionContent>
                      আমাদের ওয়েবসাইটের প্রধান উদ্দেশ্য হলো ইসলামিক জ্ঞান ভাগাভাগির মাধ্যমে সমাজে ইতিবাচক পরিবর্তন আনা। আমরা কুরআন, হাদিস,
                      ইসলামিক ইতিহাস এবং আধুনিক জীবনে ইসলামের প্রয়োগ নিয়ে লেখালেখি করি।
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger>কীভাবে নতুন পোস্টের আপডেট পেতে পারি?</AccordionTrigger>
                    <AccordionContent>
                      আপনি আমাদের নিউজলেটার সাবস্ক্রাইব করতে পারেন অথবা আমাদের সামাজিক মাধ্যমে ফলো করতে পারেন। এছাড়াও আপনি সেটিংস পেজ
                      থেকে ইমেইল নোটিফিকেশন চালু করতে পারেন।
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger>মন্তব্য করার জন্য কি অ্যাকাউন্ট প্রয়োজন?</AccordionTrigger>
                    <AccordionContent>
                      না, মন্তব্য করার জন্য অ্যাকাউন্ট তৈরি করার প্রয়োজন নেই। তবে আপনার নাম ও ইমেইল ঠিকানা প্রদান করতে হবে। অ্যাকাউন্ট থাকলে
                      আপনি অতিরিক্ত সুবিধা পাবেন।
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger>কন্টেন্ট কি বিনামূল্যে?</AccordionTrigger>
                    <AccordionContent>
                      হ্যাঁ, আমাদের সমস্ত কন্টেন্ট সম্পূর্ণ বিনামূল্যে। আমাদের লক্ষ্য ইসলামিক জ্ঞান সবার কাছে পৌঁছে দেওয়া, তাই আমরা কোনো ফি নিই
                      না।
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5">
                    <AccordionTrigger>কন্টেন্ট শেয়ার করতে পারি?</AccordionTrigger>
                    <AccordionContent>
                      অবশ্যই! আমাদের কন্টেন্ট শেয়ার করার জন্য আমরা উৎসাহিত করি। তবে অনুগ্রহ করে সূত্র উল্লেখ করুন এবং আমাদের ওয়েবসাইটের
                      লিংক দিন।
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-6">
                    <AccordionTrigger>লেখক হতে চাইলে কী করব?</AccordionTrigger>
                    <AccordionContent>
                      আমরা অভিজ্ঞ ইসলামিক স্কলার ও লেখকদের সাথে কাজ করি। যদি আপনি যোগ্য হন এবং আমাদের সাথে লিখতে চান, তাহলে আমাদের
                      সাথে যোগাযোগ করুন। আমরা আপনার যোগ্যতা ও লেখার নমুনা দেখে সিদ্ধান্ত নেব।
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7">
                    <AccordionTrigger>প্রযুক্তিগত সমস্যা হলে কী করব?</AccordionTrigger>
                    <AccordionContent>
                      যেকোনো প্রযুক্তিগত সমস্যার জন্য আমাদের যোগাযোগ পেজ থেকে মেসেজ পাঠান অথবা সরাসরি ইমেইল করুন। আমরা ২৪ ঘন্টার মধ্যে
                      উত্তর দেওয়ার চেষ্টা করি।
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8">
                    <AccordionTrigger>মোবাইলে ওয়েবসাইট ব্যবহার করা যায়?</AccordionTrigger>
                    <AccordionContent>
                      হ্যাঁ, আমাদের ওয়েবসাইট সম্পূর্ণ মোবাইল-বান্ধব। আপনি যেকোনো ডিভাইস থেকে সহজেই ব্যবহার করতে পারবেন।
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9">
                    <AccordionTrigger>অনুপযুক্ত মন্তব্য রিপোর্ট করব কীভাবে?</AccordionTrigger>
                    <AccordionContent>
                      প্রতিটি মন্তব্যের পাশে একটি রিপোর্ট বাটন আছে। অনুপযুক্ত মন্তব্য দেখলে সেখানে ক্লিক করুন। আমরা দ্রুত পর্যালোচনা করে
                      প্রয়োজনীয় ব্যবস্থা নেব।
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10">
                    <AccordionTrigger>ডার্ক মোড আছে কি?</AccordionTrigger>
                    <AccordionContent>
                      হ্যাঁ, আমাদের ওয়েবসাইটে ডার্ক মোড সুবিধা আছে। আপনি সেটিংস পেজ থেকে বা হেডারের থিম বাটন থেকে এটি চালু করতে পারেন।
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="mt-8">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-2">আরও প্রশ্ন আছে?</h3>
                <p className="text-muted-foreground mb-4">আপনার প্রশ্নের উত্তর খুঁজে পাননি? আমাদের সাথে যোগাযোগ করুন।</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Card className="p-4">
                    <MessageCircle className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="font-medium">যোগাযোগ করুন</p>
                    <p className="text-sm text-muted-foreground">contact@islamicknowledge.com</p>
                  </Card>
                  <Card className="p-4">
                    <HelpCircle className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="font-medium">সাহায্য কেন্দ্র</p>
                    <p className="text-sm text-muted-foreground">বিস্তারিত গাইড ও টিউটোরিয়াল</p>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
