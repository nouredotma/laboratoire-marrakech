"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import TestimonialsSection from "@/components/testimonials-section"
import Footer from "@/components/footer"
import ServicesInfo from "@/components/services-info"
import ServicesGrid from "@/components/services-grid"
import FloatingContact from "@/components/floating-contact"
import HomeServiceBanner from "@/components/home-service-banner"
import Header from "@/components/header"

export default function Home() {
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

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen)
  }, [mobileMenuOpen])

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
        <HeroSection />
        <AboutSection />
        <HomeServiceBanner />
        <ServicesGrid />
        <ServicesInfo />
        <TestimonialsSection />
        <Footer />
      </div>

      {/* Floating Contact Button */}
      <FloatingContact />
    </main>
  )
}
