"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Mail, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [activeLink, setActiveLink] = useState<string | null>(null)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const footerLinks = [
    "Accueil",
    "Nos conventions",
    "Guide des patients",
    "Prélèvement à domicile",
    "Femme enceinte",
    "Blog",
    "Contacter",
  ]

  return (
    <footer className="bg-transparent text-white relative z-10">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
          <div className="backdrop-blur-sm bg-black/10 p-4 sm:p-6 rounded-lg border border-white/10">
            <div className="mb-4 sm:mb-8">
              <Image
                src="/logo.png"
                alt="Laboratoire AlAnouar"
                width={180}
                height={60}
                className="h-14 sm:h-20 w-auto"
              />
            </div>
            <ul className="space-y-3 sm:space-y-5">
              <li className="flex items-start gap-3 sm:gap-4 group">
                <div className="p-1.5 sm:p-2 rounded-full bg-white/10 group-hover:bg-primary/20 transition-colors">
                  <Phone size={16} className="flex-shrink-0" />
                </div>
                <Link
                  href="tel:+212661412303"
                  className="text-xs sm:text-base pt-1 hover:text-yellow-300 transition-colors"
                >
                  +212 661-412-303
                </Link>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 group">
                <div className="p-1.5 sm:p-2 rounded-full bg-white/10 group-hover:bg-primary/20 transition-colors">
                  <Mail size={16} className="flex-shrink-0" />
                </div>
                <Link
                  href="mailto:contact@laboratoire-alanouar.com"
                  className="text-xs sm:text-base pt-1 hover:text-yellow-300 transition-colors"
                >
                  contact@laboratoire-alanouar.com
                </Link>
              </li>
              <li className="flex items-start gap-3 sm:gap-4 group">
                <div className="p-1.5 sm:p-2 rounded-full bg-white/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin size={16} className="flex-shrink-0" />
                </div>
                <Link
                  href="https://maps.app.goo.gl/QZQBGdF7PDCX6M8A6"
                  target="_blank"
                  className="text-xs sm:text-base pt-1 hover:text-yellow-300 transition-colors"
                >
                  Bd Allal Al Fassi, Residence Anouar (face mosquée Al Anouar) Marrakech
                </Link>
              </li>
            </ul>
          </div>

          <div className="backdrop-blur-sm bg-black/10 p-4 sm:p-6 rounded-lg border border-white/10">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 pb-2 border-b border-white/20">Liens Rapides</h3>
            <ul className="grid grid-cols-2 gap-0.5 sm:gap-1">
              {footerLinks.map((link) => (
                <li key={link} className="relative">
                  <Link
                    href={
                      link === "Accueil"
                        ? "/"
                        : link === "Guide des patients"
                          ? "/guide-des-patients"
                          : link === "Prélèvement à domicile"
                            ? "/prelevement-a-domicile"
                            : link === "Femme enceinte"
                              ? "/femme-enceinte"
                              : link === "Blog"
                                ? "/blog"
                                : link === "Contacter"
                                  ? "/contacter"
                                  : link === "Nos conventions"
                                    ? "/nos-conventions"
                                    : "#"
                    }
                    className="inline-block px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-base hover:text-yellow-300 transition-all duration-200"
                    onMouseEnter={() => setActiveLink(link)}
                    onMouseLeave={() => setActiveLink(null)}
                  >
                    <span className="relative">
                      {link}
                      <span
                        className={`absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 ${
                          activeLink === link ? "w-full" : "w-0"
                        }`}
                      ></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-4 sm:py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs sm:text-sm mb-4 md:mb-0 backdrop-blur-sm bg-black/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-center w-full md:w-auto">
            Copyright © 2024. Designed and Developed by{" "}
            <a
              href="https://ouz.ma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-300 relative inline-block group"
            >
              <span className="relative">
                Ouz.ma
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex gap-2">
              <Link
                href="https://www.facebook.com/laboalanouar"
                className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
              >
                <Facebook size={16} />
              </Link>
              <Link
                href="https://www.instagram.com/laboratoire_alanouar"
                className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
              >
                <Instagram size={16} />
              </Link>
            </div>

            <button
              onClick={scrollToTop}
              className="p-1.5 sm:p-2 rounded-full bg-primary/80 hover:bg-primary transition-all duration-200"
              aria-label="Go to top"
            >
              <ChevronUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
