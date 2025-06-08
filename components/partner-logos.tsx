"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const partners = [
  {
    id: 1,
    name: "MANAGEM",
    logo: "/images/partners/managem.png",
  },
  {
    id: 2,
    name: "Wafa Assurance",
    logo: "https://i.ibb.co/h1K10rjq/Picsart-25-04-28-17-35-02-915.png",
  },
  {
    id: 3,
    name: "OSE",
    logo: "/images/partners/ose.svg",
  },
  {
    id: 4,
    name: "OCP Group",
    logo: "/images/partners/ocp.svg",
  },
  {
    id: 5,
    name: "CMIM",
    logo: "/images/partners/cmim.png",
  },
]

export default function PartnerLogos() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clone the partners for continuous scrolling
    const clonedPartners = [...partners, ...partners]

    // Calculate total width of all partners
    const partnerWidth = container.scrollWidth / clonedPartners.length
    const totalWidth = partnerWidth * partners.length

    let animationId: number
    let position = 0

    const animate = () => {
      position -= 0.5 // Speed of animation

      // Reset position when we've scrolled through all original partners
      if (position <= -totalWidth) {
        position = 0
      }

      if (container) {
        container.style.transform = `translateX(${position}px)`
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Double the partners array for continuous scrolling
  const displayPartners = [...partners, ...partners]

  return (
    <div className="overflow-hidden py-0 sm:py-2">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div
            ref={containerRef}
            className="flex transition-transform duration-500 ease-linear"
            style={{ willChange: "transform" }}
          >
            {displayPartners.map((partner, index) => (
              <div key={`${partner.id}-${index}`} className="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/5 px-2 sm:px-4">
                <div className="flex items-center justify-center h-14 sm:h-16 md:h-20">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={160}
                    height={80}
                    className="max-h-10 sm:max-h-12 md:max-h-16 w-auto object-contain brightness-0 invert hover:filter-none hover:invert-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
