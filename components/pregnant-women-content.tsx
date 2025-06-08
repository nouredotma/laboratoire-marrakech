"use client"

import { useState } from "react"
import { Phone, Droplets, TestTube, Dna, HeartPulse, Microscope, FlaskConical, Clipboard } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function PregnantWomenContent() {
  const [activeTab, setActiveTab] = useState<"before" | "during">("before")

  return (
    <>
      {/* Main content with rounded top corners */}
      <section className="py-6 sm:py-16 bg-white rounded-t-[50px]">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4 text-primary">
              Vos Questions Et Commentaires Sont Les Bienvenus
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          {/* Tabs */}
          <div className="max-w-4xl mx-auto mb-6 sm:mb-10">
            <div className="flex rounded-lg overflow-hidden border border-gray-200">
              <button
                onClick={() => setActiveTab("before")}
                className={`flex-1 py-2 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === "before" ? "bg-primary text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Avant la grossesse
              </button>
              <button
                onClick={() => setActiveTab("during")}
                className={`flex-1 py-2 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === "during" ? "bg-primary text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                Pendant la grossesse
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {activeTab === "before" ? (
                <motion.div
                  key="before"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    {/* For women */}
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-xl p-4 sm:p-6 border border-pink-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-pink-200/70 flex items-center justify-center">
                          <Droplets className="w-5 h-5 text-pink-600" />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-pink-700">Chez la femme</h3>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-3 sm:p-4 border border-pink-100 shadow-sm">
                          <div className="flex items-start gap-3">
                            <TestTube className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-1">
                                Dépistage des carences
                              </h4>
                              <p className="text-xs sm:text-sm text-gray-600">
                                Il est utile de dépister certaines des principales carences qui peuvent affecter la
                                fertilité :<span className="font-medium">fer / vit b9/ zinc/ silicium / iode</span>.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-3 sm:p-4 border border-pink-100 shadow-sm">
                          <div className="flex items-start gap-3">
                            <FlaskConical className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-1">Bilan hormonal</h4>
                              <p className="text-xs sm:text-sm text-gray-600">
                                Un Bilan hormonal peut être nécessaire: FSH (hormone de stimulation folliculaire)/ LH
                                (Hormone lutéinisante), AMH (L'hormone anti-mullërienne), L'Estradiol (E2), Prolactine,
                                testostérone (libre ou total). SDHEA, delta 4 ; androsténedione, 17-hydroxyprogestérone,
                                insuline.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-3 sm:p-4 border border-pink-100 shadow-sm">
                          <div className="flex items-start gap-3">
                            <Dna className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-1">Caryotype</h4>
                              <p className="text-xs sm:text-sm text-gray-600">
                                En cas d'antécédents familiaux, une étude génétique pour rechercher une anomalie des
                                chromosomes par une simple prise de sang est un examen simple à réaliser.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* For men */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-4 sm:p-6 border border-blue-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-200/70 flex items-center justify-center">
                          <Microscope className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-blue-700">Chez l'homme</h3>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-3 sm:p-4 border border-blue-100 shadow-sm">
                          <div className="flex items-start gap-3">
                            <Microscope className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-1">Analyse du sperme</h4>
                              <p className="text-xs sm:text-sm text-gray-600">
                                Spermogramme et spermocytogramme principalement à la recherche d'une anomalie des
                                spermatozoïdes. Spermoculture.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-3 sm:p-4 border border-blue-100 shadow-sm">
                          <div className="flex items-start gap-3">
                            <TestTube className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-1">
                                Bilan hormonal sanguin
                              </h4>
                              <p className="text-xs sm:text-sm text-gray-600">FSH, testostérone.</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-center h-full mt-4">
                          <Image
                            src="/diverse-medical-testing.png"
                            alt="Analyses médicales"
                            width={150}
                            height={150}
                            className="opacity-70"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="during"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-4 sm:p-6 border border-purple-100 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-purple-200/70 flex items-center justify-center">
                        <HeartPulse className="w-5 h-5 text-purple-600" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-purple-700">Bilan biologique</h3>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-3 sm:p-4 border border-purple-100 shadow-sm">
                        <div className="flex flex-col h-full">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 mb-3 mx-auto">
                            <span className="text-purple-700 font-bold text-sm">1</span>
                          </div>
                          <h4 className="text-sm font-medium text-center text-purple-700 mb-2">
                            Bilan minimal obligatoire
                          </h4>
                          <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4 mt-auto">
                            <li>Numération formule sanguine (NFS)</li>
                            <li>Glycémie</li>
                            <li>Sérologie toxoplasmose (IgG-IgM)</li>
                            <li>Sérologie Rubéole (IgG-IgM)</li>
                            <li>Sérologie syphilitique (TPHA-VDRL)</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-3 sm:p-4 border border-purple-100 shadow-sm">
                        <div className="flex flex-col h-full">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 mb-3 mx-auto">
                            <span className="text-purple-700 font-bold text-sm">2</span>
                          </div>
                          <h4 className="text-sm font-medium text-center text-purple-700 mb-2">Bilan recommandé</h4>
                          <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4 mt-auto">
                            <li>Sérologie de l'hepatite B (Aghbs-Achbc et Achbs)</li>
                            <li>Sérologie de l'hépatite C</li>
                            <li>HIV</li>
                            <li>Groupage sanguin + RAI</li>
                            <li>Hyperglycémie provoquée par voie orale (HGPO)</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-3 sm:p-4 border border-purple-100 shadow-sm">
                        <div className="flex flex-col h-full">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 mb-3 mx-auto">
                            <span className="text-purple-700 font-bold text-sm">3</span>
                          </div>
                          <h4 className="text-sm font-medium text-center text-purple-700 mb-2">Bilan avancé</h4>
                          <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4 mt-auto">
                            <li>Sérologie du cytomégalovirus (CMV)</li>
                            <li>PARVOVIRUS</li>
                          </ul>
                          <div className="flex justify-center mt-4">
                            <Image
                              src="/microscopic-threat.png"
                              alt="Virus"
                              width={60}
                              height={60}
                              className="opacity-50"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 rounded-xl p-4 sm:p-6 border border-yellow-100">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-yellow-200/70 flex items-center justify-center">
                        <Dna className="w-5 h-5 text-yellow-600" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-yellow-700">Dépistage des trisomies</h3>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      <div className="flex-1 bg-white rounded-lg p-3 sm:p-4 border border-yellow-100 shadow-sm">
                        <div className="flex items-start gap-3">
                          <Clipboard className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-sm sm:text-base font-medium text-gray-800 mb-1">
                              Trisomies 13, 18, 21
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600">
                              Par ADN libre circulant ; par simple prise du sang maternel (sans risque). Vous pouvez
                              directement vous adresser au médecin biologiste de notre laboratoire, il saura vous
                              apporter toutes les explications nécessaires concernant les examens qui vous ont été
                              prescrit par votre médecin.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="sm:w-1/3 flex items-center justify-center">
                        <Image
                          src="/dna-double-helix.png"
                          alt="Test ADN"
                          width={150}
                          height={150}
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-6 bg-yellow-100/50 p-3 sm:p-4 rounded-lg border border-yellow-200">
                      <p className="text-xs sm:text-sm text-yellow-800 italic">
                        Un suivi régulier de votre grossesse est nécessaire pour améliorer votre confort et éviter les
                        complications. Il sera la clé pour vous permettre de vivre votre grossesse sereinement.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Call to action section with rounded bottom corners */}
      <section className="py-6 sm:py-16 bg-primary text-white rounded-b-[50px]">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Évitez La Salle D'Attente!</h3>
            <p className="text-base mb-4 sm:mb-6">Besoin de renseignements ? Appelez nous sur</p>
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
