"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Upload } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ContactContent() {
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

  return (
    <>
      {/* Main content with rounded top corners */}
      <section className="py-6 sm:py-16 bg-white rounded-t-[50px]">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-6 sm:mb-12">
            <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4 text-primary">
              Comment pouvons-nous vous aider ?
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Contact information */}
              <div className="w-full md:w-2/5">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4 sm:p-6 border border-primary/20 h-full">
                  <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4 sm:mb-6">Nos coordonnées</h3>

                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 mb-1">Adresse</h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Bd Allal Al Fassi, Residence Anouar (face mosquée Al Anouar) Marrakech
                        </p>
                        <Link
                          href="https://maps.app.goo.gl/QZQBGdF7PDCX6M8A6"
                          target="_blank"
                          className="text-xs text-primary hover:underline mt-1 inline-block"
                        >
                          Voir sur Google Maps
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 mb-1">Téléphone</h4>
                        <Link href="tel:+212661412303" className="text-xs sm:text-sm text-gray-600 hover:text-primary">
                          +212 661-412-303
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 mb-1">Email</h4>
                        <Link
                          href="mailto:contact@laboratoire-alanouar.com"
                          className="text-xs sm:text-sm text-gray-600 hover:text-primary"
                        >
                          contact@laboratoire-alanouar.com
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 mb-1">Horaires d'ouverture</h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Lun - Ven: 07:30h - 20:00h
                          <br />
                          Sam: 07:30h - 15:00h
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Google Maps embed */}
                  <div className="mt-6 rounded-lg overflow-hidden border border-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.0448393284!2d-8.0133!3d31.6333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM4JzAwLjAiTiA4wrAwMCc0OC4wIlc!5e0!3m2!1sfr!2sma!4v1651234567890!5m2!1sfr!2sma"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Laboratoire AlAnouar location"
                      className="w-full"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div className="w-full md:w-3/5">
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-100">
                  <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4">Envoyez-nous un message</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4">
                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
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
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message..."
                        rows={5}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="file" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Joindre un fichier (optionnel)
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
                        Votre message a été envoyé avec succès. Nous vous contacterons bientôt.
                      </motion.div>
                    )}

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white font-medium rounded-md transition-all duration-300 hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
                      >
                        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action section with rounded bottom corners */}
      <section className="py-6 sm:py-16 bg-primary text-white rounded-b-[50px]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Besoin d'une réponse rapide ?</h3>
            <p className="text-base mb-4 sm:mb-6">Appelez-nous directement</p>
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
