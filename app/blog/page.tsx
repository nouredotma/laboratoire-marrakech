"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogHero from "@/components/blog-hero"
import BlogContent from "@/components/blog-content"
import FloatingContact from "@/components/floating-contact"

export default function BlogPage() {
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
        <BlogHero />
        <BlogContent />
        <Footer />
      </div>

      {/* Floating Contact Button */}
      <FloatingContact />
    </main>
  )
}
