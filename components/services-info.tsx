"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ServicesInfo() {
  const [expandedLeft, setExpandedLeft] = useState(false)
  const [expandedRight, setExpandedRight] = useState(false)

  const leftColumnItems = [
    {
      title: "Analyses de biologie médicale courantes",
      description: "Numération formule sanguine, bilan lipidique, glycémie, etc.",
    },
    {
      title: "Analyses spécialisées",
      description: "Tests hormonaux, marqueurs tumoraux, sérologie, etc.",
    },
    {
      title: "Tests de dépistage",
      description: "Dépistage des infections sexuellement transmissibles, tests de grossesse, etc.",
      expanded: true,
    },
    {
      title: "Bilans de santé",
      description: "Bilan général, bilan cardiovasculaire, bilan diabétique, etc.",
      expanded: true,
    },
    {
      title: "Prélèvements à domicile",
      description: "Nous nous déplaçons chez vous pour faciliter vos analyses.",
      expanded: true,
    },
  ]

  const rightColumnItems = [
    {
      title: "Expertise reconnue",
      description:
        "Notre équipe est composée de biologistes médicaux et de techniciens qualifiés, expérimentés et soucieux de votre bien-être.",
    },
    {
      title: "Technologie de pointe",
      description:
        "Nous utilisons des équipements de dernière génération et des méthodes de contrôle qualité rigoureuses pour vous garantir des résultats fiables et précis.",
    },
    {
      title: "Rapidité et efficacité",
      description:
        "Nous comprenons l'importance de recevoir rapidement vos résultats, c'est pourquoi nous nous engageons à vous les communiquer dans les meilleurs délais.",
      expanded: true,
    },
    {
      title: "Proximité et accessibilité",
      description:
        "Idéalement situé à Marrakech, notre laboratoire est facilement accessible en transport en commun et en voiture.",
      expanded: true,
    },
    {
      title: "Accueil chaleureux et personnalisé",
      description:
        "Nous vous accueillons dans un cadre convivial et mettons tout en œuvre pour vous offrir un service personnalisé et adapté à vos besoins.",
      expanded: true,
    },
  ]

  return (
    <section className="py-8 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4 text-primary">
              Nos services d'analyses médicales
            </h2>
            <p className="text-xs sm:text-base text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services d'analyses médicales, conçus pour répondre à tous vos besoins
              de santé avec précision et fiabilité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            {/* Left Column */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-3 sm:p-8 flex flex-col">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-xl font-semibold text-primary">
                  Des services de qualité, adaptés à vos besoins
                </h3>
              </div>

              <div className="flex-grow">
                <ul className="space-y-2 sm:space-y-4">
                  {leftColumnItems.slice(0, 2).map((item, index) => (
                    <li key={index}>
                      <div className="flex gap-2 sm:gap-3">
                        <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium text-gray-800 text-xs sm:text-base">{item.title}</h4>
                          <p className="text-[10px] sm:text-sm text-gray-600 mt-0.5 sm:mt-1">{item.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <AnimatePresence>
                  {expandedLeft && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <motion.ul
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        className="space-y-2 sm:space-y-4 mt-2 sm:mt-4 border-t border-primary/10 pt-2 sm:pt-4"
                      >
                        {leftColumnItems.slice(2).map((item, index) => (
                          <li key={index + 2}>
                            <div className="flex gap-2 sm:gap-3">
                              <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-1" />
                              <div>
                                <h4 className="font-medium text-gray-800 text-xs sm:text-base">{item.title}</h4>
                                <p className="text-[10px] sm:text-sm text-gray-600 mt-0.5 sm:mt-1">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-4 sm:mt-6">
                <button
                  onClick={() => setExpandedLeft(!expandedLeft)}
                  className="flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 text-primary hover:bg-primary/20 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 group mx-auto"
                >
                  {expandedLeft ? (
                    <>
                      <span>Voir moins</span>
                      <ChevronUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
                    </>
                  ) : (
                    <>
                      <span>Lire plus</span>
                      <ChevronDown size={14} className="transition-transform group-hover:translate-y-0.5" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 rounded-2xl p-3 sm:p-8 flex flex-col">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-200/50 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-xl font-semibold text-yellow-700">
                  Pourquoi choisir notre laboratoire à Marrakech ?
                </h3>
              </div>

              <div className="flex-grow">
                <ul className="space-y-2 sm:space-y-4">
                  {rightColumnItems.slice(0, 2).map((item, index) => (
                    <li key={index}>
                      <div className="flex gap-2 sm:gap-3">
                        <CheckCircle2 size={16} className="text-yellow-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-medium text-gray-800 text-xs sm:text-base">{item.title}</h4>
                          <p className="text-[10px] sm:text-sm text-gray-600 mt-0.5 sm:mt-1">{item.description}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <AnimatePresence>
                  {expandedRight && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <motion.ul
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        className="space-y-2 sm:space-y-4 mt-2 sm:mt-4 border-t border-yellow-200/50 pt-2 sm:pt-4"
                      >
                        {rightColumnItems.slice(2).map((item, index) => (
                          <li key={index + 2}>
                            <div className="flex gap-2 sm:gap-3">
                              <CheckCircle2 size={16} className="text-yellow-600 flex-shrink-0 mt-1" />
                              <div>
                                <h4 className="font-medium text-gray-800 text-xs sm:text-base">{item.title}</h4>
                                <p className="text-[10px] sm:text-sm text-gray-600 mt-0.5 sm:mt-1">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </motion.ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-4 sm:mt-6">
                <button
                  onClick={() => setExpandedRight(!expandedRight)}
                  className="flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-yellow-100 text-yellow-700 hover:bg-yellow-200/70 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 group mx-auto"
                >
                  {expandedRight ? (
                    <>
                      <span>Voir moins</span>
                      <ChevronUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
                    </>
                  ) : (
                    <>
                      <span>Lire plus</span>
                      <ChevronDown size={14} className="transition-transform group-hover:translate-y-0.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
