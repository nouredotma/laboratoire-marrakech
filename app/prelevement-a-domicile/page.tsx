"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeCollectionHero from "@/components/home-collection-hero"
import HomeCollectionContent from "@/components/home-collection-content"
import FloatingContact from "@/components/floating-contact"

export default function HomeCollectionPage() {
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
        <Image
          src="https://plus.unsplash.com/premium_photo-1682145154476-2b11b7b7679b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGxhYm9yYXRvcnl8ZW58MHx8MHx8fDA%3D"
          alt="Laboratory Background"
          fill
          className="object-cover"
          priority
        />
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
        <HomeCollectionHero />
        <HomeCollectionContent />
        <Footer />
      </div>

      {/* Floating Contact Button */}
      <FloatingContact />
    </main>
  )
}
