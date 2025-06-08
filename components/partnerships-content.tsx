"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Shield, Lightbulb, Users, Heart, Sparkles } from "lucide-react"

export default function PartnershipsContent() {
  const partnerships = [
    {
      id: 1,
      name: "MANAGEM",
      logo: "/images/partners/managem.png",
      description:
        "En partenariat avec Managem, nous nous engageons à promouvoir des pratiques minières responsables et à contribuer au développement de solutions innovantes",
      icon: Shield,
      color: "blue",
    },
    {
      id: 2,
      name: "OSE",
      logo: "/images/partners/ose.svg",
      description:
        "OSE est un pionnier dans le domaine des énergies renouvelables, offrant des solutions innovantes pour promouvoir une transition",
      icon: Lightbulb,
      color: "green",
    },
    {
      id: 3,
      name: "Wafa Assurance",
      logo: "/images/partners/wafa-assurance-new.png",
      description:
        "En tant que partenaire privilégié dans le domaine de l'assurance, Wafa Assurance offre des solutions complètes pour la protection de nos patients",
      icon: Shield,
      color: "red",
    },
    {
      id: 4,
      name: "CMIM",
      logo: "/images/partners/cmim.png",
      description:
        "La CMIM joue un rôle crucial dans la protection sociale des travailleurs, offrant une couverture santé complète et des services de prévoyance pour garantir le bien-être de notre personnel",
      icon: Heart,
      color: "purple",
    },
    {
      id: 5,
      name: "OCP Group",
      logo: "/images/partners/ocp.svg",
      description:
        "En tant que leader mondial dans l'industrie des phosphates, OCP est un partenaire clé dans notre mission visant à améliorer la santé et la nutrition à travers des solutions agronomiques durables",
      icon: Sparkles,
      color: "yellow",
    },
  ]

  const getGradient = (color: string) => {
    switch (color) {
      case "blue":
        return "from-blue-50 to-blue-100/50 border-blue-100"
      case "green":
        return "from-green-50 to-green-100/50 border-green-100"
      case "red":
        return "from-red-50 to-red-100/50 border-red-100"
      case "purple":
        return "from-purple-50 to-purple-100/50 border-purple-100"
      case "yellow":
        return "from-yellow-50 to-yellow-100/50 border-yellow-100"
      default:
        return "from-gray-50 to-gray-100/50 border-gray-100"
    }
  }

  const getIconBg = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 text-blue-600"
      case "green":
        return "bg-green-100 text-green-600"
      case "red":
        return "bg-red-100 text-red-600"
      case "purple":
        return "bg-purple-100 text-purple-600"
      case "yellow":
        return "bg-yellow-100 text-yellow-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  return (
    <>
      {/* Main content with rounded top corners */}
      <section className="py-6 sm:py-16 bg-white rounded-t-[50px]">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4 text-primary">Nos conventions</h2>
            <div className="w-16 sm:w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {partnerships.map((partner, index) => {
                const IconComponent = partner.icon
                return (
                  <motion.div
                    key={partner.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${getGradient(
                      partner.color,
                    )} rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full`}
                  >
                    <div className="flex flex-col h-full">
                      {/* Logo section */}
                      <div className="p-3 flex items-center justify-center bg-white/80">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white rounded-lg p-2 border border-gray-100 shadow-sm">
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={partner.name}
                            width={80}
                            height={80}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>

                      {/* Content section */}
                      <div className="flex-1 p-3 sm:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className={`w-7 h-7 rounded-full ${getIconBg(partner.color)} flex items-center justify-center flex-shrink-0`}
                          >
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                          <h3 className="text-sm sm:text-base font-semibold text-gray-800">{partner.name}</h3>
                        </div>
                        <p className="text-xs text-gray-600">{partner.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-8 sm:mt-12 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4 sm:p-6 border border-primary/20">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 text-center">
                Pourquoi établir un partenariat avec nous ?
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-3 sm:p-4 border border-primary/10 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 mb-1">Qualité et fiabilité</h4>
                      <p className="text-xs text-gray-600">
                        Nos analyses médicales sont réalisées avec des équipements de pointe et suivent des protocoles
                        rigoureux pour garantir des résultats fiables.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 sm:p-4 border border-primary/10 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 mb-1">Prise en charge personnalisée</h4>
                      <p className="text-xs text-gray-600">
                        Nous offrons un accompagnement sur mesure pour vos employés ou assurés, avec des services
                        adaptés à leurs besoins spécifiques.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 sm:p-4 border border-primary/10 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 mb-1">Expertise médicale</h4>
                      <p className="text-xs text-gray-600">
                        Notre équipe de professionnels qualifiés assure un service de haute qualité et une
                        interprétation précise des résultats.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 sm:p-4 border border-primary/10 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-800 mb-1">Innovation continue</h4>
                      <p className="text-xs text-gray-600">
                        Nous investissons constamment dans les dernières technologies pour offrir des services d'analyse
                        médicale à la pointe de l'innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action section with rounded bottom corners */}
      <section className="py-6 sm:py-16 bg-primary text-white rounded-b-[50px]">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Rejoignez notre réseau de partenaires</h3>
            <p className="text-base mb-4 sm:mb-6">
              Vous souhaitez établir un partenariat avec le Laboratoire AlAnouar ? Contactez-nous pour discuter des
              possibilités de collaboration.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 text-primary font-bold rounded-md transition-all duration-300 hover:bg-yellow-300"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
