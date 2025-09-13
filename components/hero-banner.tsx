"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, BookOpen, Users, Heart } from "lucide-react"
import Link from "next/link"

const bannerSlides = [
  {
    id: 1,
    title: "কুরআনের আলোকে জীবন যাপন",
    subtitle: "পবিত্র কুরআনের শিক্ষা ও দিকনির্দেশনা",
    description: "আল্লাহর কিতাব থেকে জীবনের সকল ক্ষেত্রে পথ খুঁজে নিন",
    image: "/islamic-calligraphy-with-quran-verses-in-beautiful.png",
    link: "/category/quran",
  },
  {
    id: 2,
    title: "হাদিসের মুক্তোমালা",
    subtitle: "রাসূল (সা.) এর পবিত্র বাণী",
    description: "নবী করীম (সা.) এর হাদিস থেকে জীবনের দিকনির্দেশনা",
    image: "/beautiful-mosque-with-islamic-architecture-and-gol.png",
    link: "/category/hadith",
  },
  {
    id: 3,
    title: "ইসলামিক ইতিহাস",
    subtitle: "গৌরবময় ইসলামের ইতিহাস",
    description: "সাহাবা ও মনীষীদের জীবনী থেকে শিক্ষা নিন",
    image: "/historic-islamic-library-with-ancient-books-and-sc.png",
    link: "/category/history",
  },
]

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
  }

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {bannerSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
            }}
          />
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">{slide.title}</h1>
              <h2 className="text-xl md:text-2xl mb-4 text-balance opacity-90">{slide.subtitle}</h2>
              <p className="text-lg mb-8 text-balance opacity-80">{slide.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={slide.link}>
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                    <BookOpen className="mr-2 h-4 w-4" />
                    আরও পড়ুন
                  </Button>
                </Link>
                <Link href="/categories">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                  >
                    সব ক্যাটেগরি
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-4 text-center text-white">
            <div>
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="h-6 w-6 mr-2" />
                <span className="text-2xl font-bold">১০০+</span>
              </div>
              <p className="text-sm opacity-80">আর্টিকেল</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 mr-2" />
                <span className="text-2xl font-bold">৫০০+</span>
              </div>
              <p className="text-sm opacity-80">পাঠক</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Heart className="h-6 w-6 mr-2" />
                <span className="text-2xl font-bold">১০০০+</span>
              </div>
              <p className="text-sm opacity-80">লাইক</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
