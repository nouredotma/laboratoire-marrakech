"use client"

import { memo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Memoize the mobile menu to prevent unnecessary re-renders
const MobileMenu = memo(
  ({
    isOpen,
    onClose,
  }: {
    isOpen: boolean
    onClose: () => void
  }) => {
    const navItems = ["Accueil", "Guide des patients", "Prélèvement à domicile", "Femme enceinte", "Blog", "Contacter"]

    if (!isOpen) return null

    return (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
          style={{ top: 0 }}
        />

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed top-0 bottom-0 right-0 w-4/5 max-w-sm bg-white shadow-xl z-50 flex flex-col"
          style={{ height: "100vh" }}
        >
          <div className="flex items-center justify-between p-4 border-b bg-primary text-white">
            <Image
              src="/logo.png"
              alt="Laboratoire AlAnouar"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
            <button
              onClick={onClose}
              className="p-2 rounded-md text-white hover:bg-white/20"
              aria-label="Close mobile menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item} className="relative">
                  <Link
                    href={
                      item === "Accueil"
                        ? "/"
                        : item === "Guide des patients"
                          ? "/guide-des-patients"
                          : item === "Prélèvement à domicile"
                            ? "/prelevement-a-domicile"
                            : item === "Femme enceinte"
                              ? "/femme-enceinte"
                              : item === "Blog"
                                ? "/blog"
                                : item === "Contacter"
                                  ? "/contacter"
                                  : "#"
                    }
                    className="block px-4 py-3 text-gray-700 hover:text-primary transition-all duration-200 rounded-md hover:bg-primary/5"
                    onClick={onClose}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t">
            <div className="flex justify-center space-x-4">
              <Link
                href="https://www.facebook.com/laboalanouar"
                className="p-3 rounded-full text-gray-700 hover:text-primary hover:bg-primary/10 transition-all duration-200"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/laboratoire_alanouar"
                className="p-3 rounded-full text-gray-700 hover:text-primary hover:bg-primary/10 transition-all duration-200"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      </>
    )
  },
)

MobileMenu.displayName = "MobileMenu"

// Header component
interface HeaderProps {
  scrolled: boolean
  mobileMenuOpen: boolean
  toggleMobileMenu: () => void
  activeItem: string | null
  setActiveItem: (item: string | null) => void
}

const Header = memo(({ scrolled, mobileMenuOpen, toggleMobileMenu, activeItem, setActiveItem }: HeaderProps) => {
  const navItems = ["Accueil", "Guide des patients", "Prélèvement à domicile", "Femme enceinte", "Blog", "Contacter"]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex-shrink-0 transition-all duration-300">
            <Image
              src="/logo.png"
              alt="Laboratoire AlAnouar"
              width={180}
              height={60}
              className={`transition-all duration-300 w-auto ${scrolled ? "h-16" : "h-24"}`}
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item} className="relative">
                  <Link
                    href={
                      item === "Accueil"
                        ? "/"
                        : item === "Guide des patients"
                          ? "/guide-des-patients"
                          : item === "Prélèvement à domicile"
                            ? "/prelevement-a-domicile"
                            : item === "Femme enceinte"
                              ? "/femme-enceinte"
                              : item === "Blog"
                                ? "/blog"
                                : item === "Contacter"
                                  ? "/contacter"
                                  : "#"
                    }
                    className="px-4 py-2 inline-block text-sm font-medium transition-all duration-200 text-white"
                    onMouseEnter={() => setActiveItem(item)}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    {item}
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-0.5 transition-all duration-300 bg-white ${
                        activeItem === item ? "w-3/4" : "w-0"
                      }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href="https://www.facebook.com/laboalanouar"
              className="p-2 rounded-full transition-all duration-300 text-white hover:bg-white/20"
            >
              <Facebook size={18} />
            </Link>
            <Link
              href="https://www.instagram.com/laboratoire_alanouar"
              className="p-2 rounded-full transition-all duration-300 text-white hover:bg-white/20"
            >
              <Instagram size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md transition-all duration-200 text-white"
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && <MobileMenu isOpen={mobileMenuOpen} onClose={toggleMobileMenu} />}
      </AnimatePresence>
    </header>
  )
})

Header.displayName = "Header"

export default Header
