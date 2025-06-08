"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "naoufal djebli",
    text: "Service de qualité, personnel professionnel, interprétation rapide des résultats et envoi par e-mail. Très satisfait de l'accueil et du professionnalisme. J'ai eu recours à faire des analyses à 3 reprises au laboratoire Al Anouar, et le service est parfait. Je recommande.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mariem MARHOUM",
    text: "Excellente expérience, Service professionnel, résultats précis et équipe attentive. Je recommande vivement ce laboratoire d'analyse !",
    rating: 5,
  },
  {
    id: 3,
    name: "BARGACH Mohamed",
    text: "Service rapide et impeccable, personnel professionnel, accueillant et au petit soin et prix raisonnable et je pense le meilleur à Marrakech!!!! Je recommande vivement !! bref, bravo et bonne continuation !!!",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
      setProgress(0)
    }, 8000)

    setProgress(0)
  }

  useEffect(() => {
    resetInterval()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    resetInterval()
  }, [activeIndex])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 0.5
      })
    }, 40)

    return () => clearInterval(progressInterval)
  }, [])

  const handleTestimonialChange = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="py-8 sm:py-20 bg-white rounded-bl-[50px] rounded-br-[50px] relative">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-12 text-center text-primary">
          Ce que disent nos clients
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="relative overflow-hidden bg-white rounded-2xl shadow-lg">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 bg-gray-100">
              <motion.div
                className="h-full bg-primary"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>

            {/* Quote Icon */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 opacity-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary w-[30px] h-[30px] sm:w-[60px] sm:h-[60px]"
              >
                <path d="M10 11h-4.5c0-3.05 2.95-5.5 6-5.5v-2c-4.41 0-8 3.59-8 8 0 2.21 1.79 4 4 4s4-1.79 4-4v-0.5zM20.5 5.5h-2v2h2v-2zM22 11h-4.5c0-3.05 2.95-5.5 6-5.5v-2c-4.41 0-8 3.59-8 8 0 2.21 1.79 4 4 4s4-1.79 4-4v-0.5z" />
              </svg>
            </div>

            <div className="p-4 sm:p-8 md:p-12">
              {/* Stars */}
              <div className="flex mb-3 sm:mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="#FFC107"
                    className="mr-1 sm:w-[20px] sm:h-[20px]"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Content */}
              <div className="min-h-[120px] sm:min-h-[180px] flex flex-col justify-between">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-xs sm:text-lg text-gray-700 italic mb-4 sm:mb-8">
                    "{testimonials[activeIndex].text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs sm:text-base">
                      {testimonials[activeIndex].name.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-2 sm:ml-4">
                      <p className="font-semibold text-gray-800 text-xs sm:text-base">
                        {testimonials[activeIndex].name}
                      </p>
                      <p className="text-[10px] sm:text-sm text-gray-500">Client</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-4 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTestimonialChange(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 mx-1 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
