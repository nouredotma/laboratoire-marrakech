"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Tag, ArrowLeft, Phone } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"

interface BlogPostLayoutProps {
  title: string
  date: string
  author: string
  categories: string[]
  content: React.ReactNode
  image?: string
}

export default function BlogPostLayout({ title, date, author, categories, content, image }: BlogPostLayoutProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Use a higher threshold for mobile devices
      const scrollThreshold = window.innerWidth < 768 ? 100 : 50
      const isScrolled = window.scrollY > scrollThreshold

      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <main className="min-h-screen font-poppins">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image src="/images/lab-background.jpg" alt="Laboratory Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Header */}
      <Header
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />

      {/* Main Content */}
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative flex flex-col">
          <div className="container mx-auto px-4 py-10 sm:py-16">
            <div className="text-white">
              <div className="max-w-3xl">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-4 transition-colors"
                >
                  <ArrowLeft size={16} className="mr-1" />
                  <span>Retour aux articles</span>
                </Link>
                <h1 className="text-2xl sm:text-4xl font-bold mb-4">{title}</h1>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center text-sm">
                    <User size={14} className="mr-1" />
                    <span>{author}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>{date}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {categories.map((category, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-white/20 text-white"
                    >
                      <Tag size={12} className="mr-1" />
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-6 sm:py-16 bg-white rounded-t-[50px]">
          <div className="container mx-auto px-3 sm:px-4">
            <div className="max-w-3xl mx-auto">
              {/* Featured Image */}
              {image && (
                <div className="mb-8 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    width={800}
                    height={250}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              {/* Article Content */}
              <article className="prose prose-sm sm:prose max-w-none">{content}</article>

              {/* Author Info */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                    {author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">{author}</p>
                    <p className="text-sm text-gray-500">Auteur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action section with rounded bottom corners */}
        <section className="py-6 sm:py-16 bg-primary text-white rounded-b-[50px]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Évitez La Salle D'Attente!</h3>
              <p className="text-base mb-4 sm:mb-6">Besoin de renseignements ? Appelez nous sur</p>
              <Link
                href="tel:+212661412303"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 text-primary font-bold rounded-md transition-all duration-300 hover:bg-yellow-300 group"
              >
                <Phone size={18} className="mr-2 group-hover:animate-[wiggle_0.5s_ease-in-out]" />
                <span className="group-hover:animate-[wiggle_0.5s_ease-in-out]">+212 661-412-303</span>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* Floating Contact Button */}
      <FloatingContact />
    </main>
  )
}
