"use client"

import { useState } from "react"
import Image from "next/image"
import TypingText from "./typing-text"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function AboutSection() {
  // Separate state variables for each expandable section
  const [expandedInfo, setExpandedInfo] = useState(false)
  const [expandedDoctor, setExpandedDoctor] = useState(false)

  return (
    <section className="py-8 sm:py-20 bg-white rounded-t-[50px]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-16">
          <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-6 text-primary min-h-[3rem]">
            <TypingText text="Laboratoire AlAnouar" delay={0.2} typingSpeed={80} deletingSpeed={40} />
          </h2>

          <div className="relative bg-gray-50 p-3 sm:p-5 rounded-xl shadow-sm border border-gray-100">
            <p className="text-xs sm:text-lg text-gray-700">
              Le Laboratoire d'Analyses Médicales Al Anouar, avec Dr. Radia Amaddah, à votre écoute, vous assure un
              accompagnement personnalisé pour toutes vos analyses.
            </p>

            <AnimatePresence>
              {expandedInfo && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <motion.p
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    className="text-xs sm:text-lg text-gray-700 mt-3 sm:mt-4 border-t border-gray-200 pt-3 sm:pt-4"
                  >
                    Toujours disponible pour vous offrir des conseils avisés et une réactivité exemplaire, le
                    laboratoire veille à ce que chaque patient bénéficie d'une attention professionnelle et sur mesure.
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setExpandedInfo(!expandedInfo)}
              className="mt-3 sm:mt-4 flex items-center justify-center mx-auto gap-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 text-primary hover:bg-primary/20 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 group"
            >
              {expandedInfo ? (
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

        <div className="grid md:grid-cols-5 gap-3 sm:gap-8 items-center">
          <div className="flex justify-center md:col-span-2">
            <div className="w-full max-w-[200px] sm:max-w-md">
              <Image
                src="https://i.ibb.co/gMNtsjVS/490721336-18022444925647532-4534893891379955549-n.jpg"
                alt="Laboratoire AlAnouar"
                width={600}
                height={375}
                className="rounded-xl shadow-lg object-cover h-auto"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="bg-gray-50 p-3 sm:p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-primary mb-1">Dr. Radia AMADDAH</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 inline-block bg-primary/5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm">
                    Médecin biologiste
                  </p>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-base sm:text-xl">RA</span>
                </div>
              </div>

              <div className="relative">
                <p className="text-xs sm:text-base text-gray-700">
                  Lauréate de la faculté de Médecine de Marrakech, Dr Radia Amaddah, notre médecin biologiste, a pu
                  faire de sa passion son métier. Plaçant le patient au centre de ses préoccupations. Elle est à votre
                  écoute, et vous conseille pour que la prestation se déroule dans les meilleures conditions.
                </p>

                <AnimatePresence>
                  {expandedDoctor && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        className="text-xs sm:text-base text-gray-700 mt-3 sm:mt-4 border-t border-gray-200 pt-3 sm:pt-4"
                      >
                        Elle se rend disponible aussi bien pour les patients que pour ses confrères prescripteurs ;
                        mettant tout en œuvre pour que les bilans reflètent l'état réel du patient et soient transmis
                        aussi tôt que possible au médecin traitant. Elle anime et coordonne l'ensemble des activités du
                        laboratoire, interprète les résultats des analyses afin d'améliorer jour après jour la
                        prévention, le dépistage, le diagnostic médical ainsi que le suivi de l'efficacité
                        thérapeutique. Elle définit et met en place la politique qualité du laboratoire.
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setExpandedDoctor(!expandedDoctor)}
                  className="mt-3 sm:mt-4 flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 text-primary hover:bg-primary/20 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 group"
                >
                  {expandedDoctor ? (
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
