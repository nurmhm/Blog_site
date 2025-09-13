import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "ব্যবহারের শর্তাবলী - ইসলামিক জ্ঞান ভাগাভাগি",
  description: "আমাদের ওয়েবসাইট ব্যবহারের শর্তাবলী এবং নিয়মকানুন সম্পর্কে জানুন।",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">ব্যবহারের শর্তাবলী</h1>
            <p className="text-muted-foreground">সর্বশেষ আপডেট: ১৫ জানুয়ারি, ২০২৪</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>১. শর্তাবলীর স্বীকৃতি</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  এই ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি এই শর্তাবলী মেনে নিতে সম্মত হচ্ছেন। যদি আপনি এই শর্তাবলীর সাথে একমত না হন,
                  তাহলে অনুগ্রহ করে এই ওয়েবসাইট ব্যবহার করবেন না।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>২. ওয়েবসাইটের ব্যবহার</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>আপনি এই ওয়েবসাইট ব্যবহার করতে পারেন:</p>
                <ul>
                  <li>ব্যক্তিগত, অবাণিজ্যিক উদ্দেশ্যে</li>
                  <li>শিক্ষামূলক ও গবেষণার কাজে</li>
                  <li>ইসলামিক জ্ঞান অর্জনের জন্য</li>
                </ul>
                <p>আপনি এই ওয়েবসাইট ব্যবহার করতে পারবেন না:</p>
                <ul>
                  <li>কোনো অবৈধ কার্যকলাপের জন্য</li>
                  <li>অন্যদের ক্ষতি করার জন্য</li>
                  <li>কপিরাইট লঙ্ঘনের জন্য</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>৩. বুদ্ধিবৃত্তিক সম্পত্তির অধিকার</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  এই ওয়েবসাইটের সমস্ত কন্টেন্ট, যেমন লেখা, ছবি, ভিডিও, এবং অন্যান্য উপাদান কপিরাইট আইন দ্বারা সুরক্ষিত। আমাদের লিখিত
                  অনুমতি ছাড়া এগুলো ব্যবহার করা যাবে না।
                </p>
                <p>তবে আপনি পারেন:</p>
                <ul>
                  <li>ব্যক্তিগত ব্যবহারের জন্য কন্টেন্ট পড়া ও সংরক্ষণ</li>
                  <li>সামাজিক মাধ্যমে শেয়ার করা (সূত্র উল্লেখ সহ)</li>
                  <li>শিক্ষামূলক উদ্দেশ্যে উদ্ধৃতি দেওয়া</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>৪. ব্যবহারকারীর দায়িত্ব</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>ব্যবহারকারী হিসেবে আপনার দায়িত্ব:</p>
                <ul>
                  <li>সঠিক ও সত্য তথ্য প্রদান করা</li>
                  <li>অন্যদের প্রতি সম্মান প্রদর্শন করা</li>
                  <li>আপত্তিজনক বা ক্ষতিকর কন্টেন্ট পোস্ট না করা</li>
                  <li>স্প্যাম বা অবাঞ্ছিত বার্তা পাঠানো থেকে বিরত থাকা</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>৫. মন্তব্য ও ব্যবহারকারীর কন্টেন্ট</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>মন্তব্য করার সময় নিম্নলিখিত নিয়ম মেনে চলুন:</p>
                <ul>
                  <li>ইসলামিক মূল্যবোধের সাথে সামঞ্জস্যপূর্ণ ভাষা ব্যবহার করুন</li>
                  <li>অন্যদের মতামতকে সম্মান করুন</li>
                  <li>গঠনমূলক আলোচনায় অংশগ্রহণ করুন</li>
                  <li>ব্যক্তিগত আক্রমণ বা অপমানজনক ভাষা ব্যবহার করবেন না</li>
                </ul>
                <p>আমরা যেকোনো অনুপযুক্ত মন্তব্য মুছে দেওয়ার এবং ব্যবহারকারীকে ব্লক করার অধিকার সংরক্ষণ করি।</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>৬. দায়বদ্ধতার সীমাবদ্ধতা</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  আমরা এই ওয়েবসাইটের তথ্যের নির্ভুলতা নিশ্চিত করার চেষ্টা করি, তবে কোনো ভুল তথ্যের জন্য আমরা দায়ী নই। ব্যবহারকারীরা নিজ
                  দায়িত্বে তথ্য ব্যবহার করবেন।
                </p>
                <p>আমরা দায়ী নই:</p>
                <ul>
                  <li>তৃতীয় পক্ষের ওয়েবসাইটের লিংকের জন্য</li>
                  <li>সেবা বন্ধ বা ব্যাঘাতের জন্য</li>
                  <li>ডেটা হারানোর জন্য</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>৭. গোপনীয়তা</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  আপনার ব্যক্তিগত তথ্যের সুরক্ষা আমাদের অগ্রাধিকার। বিস্তারিত জানতে আমাদের{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    গোপনীয়তা নীতি
                  </a>{" "}
                  দেখুন।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>৮. শর্তাবলী পরিবর্তন</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>
                  আমরা যেকোনো সময় এই শর্তাবলী পরিবর্তন করার অধিকার সংরক্ষণ করি। পরিবর্তনগুলো এই পৃষ্ঠায় প্রকাশ করা হবে এবং তা তৎক্ষণাৎ
                  কার্যকর হবে।
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>৯. যোগাযোগ</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate max-w-none">
                <p>এই শর্তাবলী সংক্রান্ত কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন:</p>
                <ul>
                  <li>
                    <strong>ইমেইল:</strong> legal@islamicknowledge.com
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
          </div>
        </div>
      </div>
    </div>
  )
}
