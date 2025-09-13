import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "গোপনীয়তা নীতি - ইসলামিক জ্ঞান ভাগাভাগি",
  description: "আমাদের গোপনীয়তা নীতি এবং ব্যবহারকারীদের তথ্য সুরক্ষা সম্পর্কে জানুন।",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">গোপনীয়তা নীতি</h1>
            <p className="text-muted-foreground">সর্বশেষ আপডেট: ১৫ জানুয়ারি, ২০২৪</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>১. তথ্য সংগ্রহ</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>আমরা নিম্নলিখিত ধরনের তথ্য সংগ্রহ করি:</p>
                <ul>
                  <li>
                    <strong>ব্যক্তিগত তথ্য:</strong> নাম, ইমেইল ঠিকানা যা আপনি স্বেচ্ছায় প্রদান করেন
                  </li>
                  <li>
                    <strong>ব্যবহারের তথ্য:</strong> আপনি কীভাবে আমাদের ওয়েবসাইট ব্যবহার করেন
                  </li>
                  <li>
                    <strong>কুকিজ:</strong> আপনার ব্রাউজিং অভিজ্ঞতা উন্নত করতে
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>২. তথ্যের ব্যবহার</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>আমরা সংগৃহীত তথ্য নিম্নলিখিত উদ্দেশ্যে ব্যবহার করি:</p>
                <ul>
                  <li>আমাদের সেবা প্রদান ও উন্নতি করতে</li>
                  <li>আপনার সাথে যোগাযোগ করতে</li>
                  <li>নিরাপত্তা ও জালিয়াতি প্রতিরোধে</li>
                  <li>আইনি বাধ্যবাধকতা পূরণে</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>৩. তথ্য সুরক্ষা</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>আমরা আপনার ব্যক্তিগত তথ্য সুরক্ষার জন্য যথাযথ নিরাপত্তা ব্যবস্থা গ্রহণ করি:</p>
                <ul>
                  <li>SSL এনক্রিপশন ব্যবহার</li>
                  <li>নিয়মিত নিরাপত্তা অডিট</li>
                  <li>সীমিত অ্যাক্সেস নিয়ন্ত্রণ</li>
                  <li>নিরাপদ সার্ভার পরিবেশ</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>৪. কুকিজ নীতি</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>আমাদের ওয়েবসাইট কুকিজ ব্যবহার করে:</p>
                <ul>
                  <li>
                    <strong>প্রয়োজনীয় কুকিজ:</strong> ওয়েবসাইটের মূল কার্যকারিতার জন্য
                  </li>
                  <li>
                    <strong>বিশ্লেষণ কুকিজ:</strong> ব্যবহারের পরিসংখ্যান সংগ্রহের জন্য
                  </li>
                  <li>
                    <strong>পছন্দের কুকিজ:</strong> আপনার পছন্দ মনে রাখতে
                  </li>
                </ul>
                <p>আপনি আপনার ব্রাউজার সেটিংস থেকে কুকিজ নিয়ন্ত্রণ করতে পারেন।</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>৫. তৃতীয় পক্ষের সেবা</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>আমরা নিম্নলিখিত তৃতীয় পক্ষের সেবা ব্যবহার করি:</p>
                <ul>
                  <li>
                    <strong>Google Analytics:</strong> ওয়েবসাইট ব্যবহারের বিশ্লেষণের জন্য
                  </li>
                  <li>
                    <strong>সামাজিক মিডিয়া প্লাগইন:</strong> কন্টেন্ট শেয়ারিংয়ের জন্য
                  </li>
                  <li>
                    <strong>মন্তব্য সিস্টেম:</strong> ব্যবহারকারীদের মতামতের জন্য
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>৬. আপনার অধিকার</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>আপনার নিম্নলিখিত অধিকার রয়েছে:</p>
                <ul>
                  <li>আপনার ব্যক্তিগত তথ্য অ্যাক্সেস করার অধিকার</li>
                  <li>ভুল তথ্য সংশোধনের অধিকার</li>
                  <li>তথ্য মুছে ফেলার অধিকার</li>
                  <li>তথ্য প্রক্রিয়াকরণে আপত্তি জানানোর অধিকার</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>৭. যোগাযোগ</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>গোপনীয়তা সংক্রান্ত কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন:</p>
                <ul>
                  <li>
                    <strong>ইমেইল:</strong> privacy@islamicknowledge.com
                  </li>
                  <li>
                    <strong>ফোন:</strong> +৮৮০ ১৭১২-৩৪৫৬৭৮
                  </li>
                  <li>
                    <strong>ঠিকানা:</strong> ঢাকা বিশ্ববিদ্যালয়, ঢাকা-১০০০
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>৮. নীতি পরিবর্তন</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  আমরা সময়ে সময়ে এই গোপনীয়তা নীতি আপডেট করতে পারি। কোনো পরিবর্তন হলে আমরা এই পৃষ্ঠায় নতুন তারিখ সহ আপডেট করব এবং
                  গুরুত্বপূর্ণ পরিবর্তনের ক্ষেত্রে ইমেইলের মাধ্যমে জানাব।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
