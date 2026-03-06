"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Calendar, FileText, Truck, FileCheck2, Upload, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function HomeCollectionContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        privacy: false,
      })
    } catch (error) {
      setSubmitError("Une erreur s'est produite. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const steps = [
    {
      icon: Calendar,
      title: "Rendez-vous",
      description: "Appelez-nous ou contactez-nous par WhatsApp : +212 661-412-303",
    },
    {
      icon: FileText,
      title: "Envoyer ordonnance",
      description: "Envoyez-nous votre ordonnance sur WhatsApp ou par mail en remplissant le formulaire ci-dessous.",
    },
    {
      icon: Truck,
      title: "Visite d'équipe de prélèvement",
      description: "Notre équipe de prélèvement viendra chez vous sur un créneau horaire de votre choix.",
    },
    {
      icon: FileCheck2,
      title: "Résultat",
      description: "Votre résultat vous sera communiqué par WhatsApp ou mail. Version papier récupérée au laboratoire.",
    },
  ]

  return (
    <>
      {/* Main content with rounded top corners */}
      <section className="py-6 sm:py-16 bg-white rounded-t-[50px]">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4 text-primary">
              Notre service de prélèvement à domicile
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
            <p className="mt-3 text-xs sm:text-base text-gray-600 max-w-3xl mx-auto">
              Profitez d'une prise de sang dans le confort de votre domicile, ou sur votre lieu de travail, dans les
              mêmes conditions de sécurité et fiabilité qu'en laboratoire. Évitez les tracas du stationnement, de la
              salle d'attente et recevez également vos résultats directement chez vous par mail ou par WhatsApp.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-10 sm:mb-16">
            <h3 className="text-base sm:text-2xl font-bold mb-4 sm:mb-6 text-center text-primary">
              Notre guide complet pour la prise de sang à domicile
            </h3>

            {/* Two-column layout for desktop, stacked for mobile */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Image column - full width on mobile, left column on desktop */}
              <div className="w-full md:w-2/5 flex items-center justify-center">
                <div className="relative w-full rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/home-blood-collection.png"
                    alt="Prélèvement à domicile"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Guide steps column - full width on mobile, right column on desktop */}
              <div className="w-full md:w-3/5">
                <div className="relative">
                  {steps.map((step, index) => (
                    <div key={index} className="relative">
                      <div className="flex flex-row items-start mb-6 sm:mb-8">
                        {/* Step number badge */}
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg z-10">
                          {index + 1}
                        </div>

                        {/* Content card */}
                        <div className="flex-grow bg-gray-50 rounded-lg border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all duration-300 p-3 sm:p-5 ml-4 sm:ml-6 w-full">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <step.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 text-sm sm:text-lg mb-1">{step.title}</h4>
                              <p className="text-xs sm:text-sm text-gray-600">{step.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Animated arrow - visible on both mobile and desktop */}
                      {index < steps.length - 1 && (
                        <div className="flex justify-center ml-5 mb-2">
                          <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                            className="text-primary"
                          >
                            <ArrowRight size={20} className="transform rotate-90" />
                          </motion.div>
                        </div>
                      )}

                      {/* Connector line - improved positioning for both mobile and desktop */}
                      {index < steps.length - 1 && (
                        <div className="absolute left-5 top-10 bottom-0 w-0.5 h-[calc(100%-10px)] bg-gray-200"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-4 sm:p-8 border border-gray-100">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-primary">
                Besoin de réaliser une prise de sang à domicile ?
              </h3>
              <p className="text-xs sm:text-base text-gray-600 mb-4 sm:mb-6">
                Prendre rendez-vous par mail en remplissant le formulaire suivant. Le moyen le plus rapide d'entrer en
                contact est de téléphoner au{" "}
                <Link href="tel:+212661412303" className="text-primary font-medium">
                  +212 661-412-303
                </Link>
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Nom <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Votre email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Votre téléphone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message..."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="file" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    Upload votre ordonnance
                  </label>
                  <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2">
                    <Upload size={16} className="text-gray-500" />
                    <input
                      type="file"
                      id="file"
                      name="file"
                      className="text-xs sm:text-sm text-gray-500 file:mr-4 file:py-1 file:px-3 sm:file:py-2 sm:file:px-4 file:rounded-md file:border-0 file:text-xs sm:file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                    />
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleCheckboxChange}
                    required
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="privacy" className="text-xs sm:text-sm text-gray-600">
                    J'accepte la Politique de confidentialité
                  </label>
                </div>

                {submitError && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-md text-xs sm:text-sm">{submitError}</div>
                )}

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-100 text-green-700 rounded-md text-xs sm:text-sm"
                  >
                    Votre demande a été envoyée avec succès. Nous vous contacterons bientôt.
                  </motion.div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white font-medium rounded-md transition-all duration-300 hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Prendre rendez-vous"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action section with rounded bottom corners */}
      <section className="py-6 sm:py-16 bg-primary text-white rounded-b-[50px]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">
              Besoin de réaliser une prise de sang à domicile ?
            </h3>
            <p className="text-base mb-4 sm:mb-6">Appelez-nous où</p>
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
    </>
  )
}
