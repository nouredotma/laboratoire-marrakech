import { Phone } from "lucide-react"
import Link from "next/link"
import PartnerLogos from "./partner-logos"
import TypingText from "./typing-text"

export default function HeroSection() {
  return (
    <section className="relative flex flex-col">
      <div className="container mx-auto px-4 min-h-[100svh] flex flex-col justify-center pt-16 pb-0">
        <div className="text-white">
          {/* Hero content with max-width */}
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Votre laboratoire de confiance à Marrakech - AlAnouar
            </h1>
            <p className="text-base sm:text-xl md:text-2xl font-medium text-yellow-400 mb-4 sm:mb-8 min-h-[2rem] sm:min-h-[2.5rem]">
              <TypingText
                text="Votre partenaire de confiance en santé"
                typingSpeed={80}
                deletingSpeed={40}
                className="text-sm sm:text-xl md:text-2xl"
              />
            </p>
            <div className="flex flex-row gap-2 mb-6 sm:mb-12">
              <Link
                href="https://laboratoire-analyses-marrakech.com/wp-content/uploads/2024/09/laboratoire-analyses-marrakech.pdf"
                target="_blank"
                className="flex-1 px-3 sm:px-6 py-2 sm:py-3 bg-primary text-white font-medium rounded-md text-center relative overflow-hidden group text-xs sm:text-base"
              >
                {/* Shining animation effect */}
                <span className="absolute inset-0 overflow-hidden">
                  <span className="shine-effect"></span>
                </span>
                <span className="relative">Nos analyses</span>
              </Link>
              <Link
                href="tel:+212661412303"
                className="flex-1 px-3 sm:px-6 py-2 sm:py-3 backdrop-blur-md bg-white/20 border border-white/20 text-white font-medium rounded-md transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 relative overflow-hidden group text-xs sm:text-base"
              >
                {/* Wobble effect on hover */}
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <Phone size={14} className="group-hover:animate-[wiggle_0.5s_ease-in-out]" />
                <span className="relative group-hover:animate-[wiggle_0.5s_ease-in-out]">+212 661-412-303</span>
              </Link>
            </div>
          </div>

          {/* Cards with full width */}
          <div className="mt-4 sm:mt-8 mb-0 w-full">
            <div className="flex flex-row gap-1 sm:gap-4">
              <div className="flex-1 backdrop-blur-md bg-white/10 border border-white/20 p-1.5 sm:p-4 rounded-lg hover:bg-white/15 transition-all duration-300 cursor-pointer">
                <h3 className="font-semibold mb-0.5 sm:mb-2 text-xs sm:text-base">Horaires</h3>
                <p className="text-xs sm:text-sm">
                  Lun - Ven 07:30h &gt; 20:00h
                  <br />
                  Sam 07:30h &gt; 15:00h
                </p>
              </div>
              <div className="flex-1 backdrop-blur-md bg-white/10 border border-white/20 p-1.5 sm:p-4 rounded-lg hover:bg-white/15 transition-all duration-300 cursor-pointer">
                <h3 className="font-semibold mb-0.5 sm:mb-2 text-xs sm:text-base">Contactez-nous</h3>
                <p className="text-xs sm:text-sm">Obtenez des conseils du médecin</p>
              </div>
              <div className="flex-1 backdrop-blur-md bg-white/10 border border-white/20 p-1.5 sm:p-4 rounded-lg hover:bg-white/15 transition-all duration-300 cursor-pointer">
                <h3 className="font-semibold mb-0.5 sm:mb-2 text-xs sm:text-base">Adresse</h3>
                <p className="text-xs sm:text-sm">Bd Allal Al Fassi, Residence Anouar, Marrakech</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos - Directly attached to the cards with no margin/padding */}
      <div className="mt-0">
        <PartnerLogos />
      </div>
    </section>
  )
}
