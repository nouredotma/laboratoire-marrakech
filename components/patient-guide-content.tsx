"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Phone } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function PatientGuideContent() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  const accordionItems = [
    {
      title: "1- Vous venez sur prescription médicale",
      content: (
        <div>
          <p>Pour prétendre à un remboursement total ou partiel de vos analyses :</p>
          <p>Pensez à vous munir de :</p>
          <ul className="list-disc pl-4 sm:pl-5 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1">
            <li>Votre ordonnance</li>
            <li>Votre mutuelle ou bon de prise en charge</li>
            <li>Votre carte d'identité nationale</li>
          </ul>
          <p className="mt-2 sm:mt-3">
            <strong>Vous venez de vous-même</strong>
          </p>
          <p>
            Les analyses médicales peuvent être réalisées à votre propre initiative ou après avoir pris conseil avec
            notre médecin biologiste qui saura vous guider dans le cadre d'une démarche de prévention et de bien-être.
          </p>
        </div>
      ),
    },
    {
      title: "2- Dois-je venir à jeun ?",
      content: (
        <div>
          <p>A/ Si votre médecin vous a recommandé d'être à jeun</p>
          <p>B/ le jeun est impératif pour les dosages suivants :</p>
          <ul className="list-disc pl-4 sm:pl-5 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 text-xs sm:text-sm">
            <li>
              Jeun de 8-12h : glycémie, Bilan d'anomalie lipidique (Cholestérol, HDL, LDL, Triglycérides), Homocystéine,
              Acides biliaire, ApoA et Apo, cryoglobuline.
            </li>
            <li>Jeun de 6h pour la réalisation d'un test respiratoire</li>
          </ul>
          <p className="mt-1 sm:mt-2">
            <strong>NB : les conditions à respecter :</strong>
          </p>
          <ul className="list-disc pl-4 sm:pl-5 mt-0.5 sm:mt-1 space-y-0.5 sm:space-y-1 text-xs sm:text-sm">
            <li>La veille : un repas léger au soir, pas de sodas ni jus de fruit.</li>
            <li>
              Le matin du prélèvement : ne fumez pas ; vous pouvez boire de l'eau (sauf pour le test respiratoire).
            </li>
            <li>
              Pour toute question relative à l'état de jeun, n'hésitez pas à contacter votre laboratoire AL ANOUAR.
            </li>
          </ul>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm">
            Même si le jeun n'est pas obligatoire pour les autres analyses, évitez un repas copieux. Contentez-vous d'un
            repas léger 2h30 avant.
          </p>
        </div>
      ),
    },
    {
      title: "3- Préparation particulière ?",
      content: (
        <div className="text-xs sm:text-sm">
          <p>
            <strong>A/ Le test respiratoire :</strong> il est à réaliser après arrêt de tout traitement antibiotique
            depuis au moins 4 semaines, après arrêt des IPP (Inexium, Omeprazole, …) depuis 2 semaines. Demander l'avis
            de votre médecin si ce n'est pas le cas.
          </p>

          <p className="mt-2 sm:mt-3">
            <strong>B/ Hyperglycémie provoquée :</strong> Pour une recherche de diabète gestationnel, Le test
            d'hyperglycémie provoquée dure 1 à 2 heures. Pendant cette période, vous devrez rester au laboratoire après
            avoir ingéré une boisson glucosée.
          </p>

          <p className="mt-2 sm:mt-3">
            <strong>C/ Dosage de prolactine :</strong> il vous sera demandé de rester au repos 20 minutes avant le
            prélèvement. Il est impératif de ne pas être sous traitement de médicaments hyperprolactinémians :
            neuroleptiques, antidépresseurs tricycliques, antiémétiques (métoclopramide, domperidone, métopimazine),
            certains antihypertenseurs (réserpine, méthyldopa), méthyldopa, morphine, méthadone, œstrogène, cimétidine.
          </p>

          <p className="mt-2 sm:mt-3">
            <strong>D/ Dosage du Cortisol :</strong> il doit être réalisé à l'heure prescrite : entre 8h-10h du matin ou
            16h
          </p>

          <p className="mt-2 sm:mt-3">
            <strong>E/ Test au synacthéne :</strong> il est dosé à 8h du matin puis vous devez rester au laboratoire
            pendant 1h
          </p>

          <p className="mt-2 sm:mt-3">
            <strong>F/ Certaines hormones sont dosées :</strong> selon le cycle mensuel (FSH-LH-PROGESTERONE…) selon le
            cycle nycthéméral comme l'ACTH qui doit être dosée entre 7h et 10h. Une interférence est possible chez les
            patients traités par biotine (vitamine B7, B8 ou H) ou sous complément alimentaire contenant de la biotine.
            Arrêt du traitement est indispensable 8 jours avant le prélèvement
          </p>

          <p className="mt-2 sm:mt-3">
            <strong>G/ Spermogramme</strong>
            <br />
            Une abstinence minimum de 2 jours et maximum de 7 jours doit être observée avant de vous présenter (la
            période recommandée est de 3 jours).
          </p>
        </div>
      ),
    },
    {
      title: "4- Prélèvement à domicile",
      content: (
        <div>
          <p className="text-xs sm:text-sm">
            Vous ne pouvez pas vous déplacer au laboratoire ? Les prélèvements peuvent être réalisés à domicile par
            un(e) infirmier(e). Insérez votre ordonnance et votre numéro de téléphone.
          </p>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm">Nos équipes vous renseignent.</p>
          <div className="mt-3 sm:mt-4">
            <Link
              href="/prelevement-a-domicile"
              className="inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 bg-primary text-white font-medium rounded-md transition-all duration-300 hover:bg-primary/90 text-xs sm:text-sm"
            >
              <Phone size={14} className="mr-1 sm:mr-2" />
              Demander un prélèvement à domicile
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "5- Prélèvement pédiatrique",
      content: (
        <div className="text-xs sm:text-sm">
          <p>
            Nos équipes créent les meilleures conditions d'accueil et de prélèvement pour vous et vos enfants, lors de
            leurs analyses médicales en laboratoire.
          </p>
          <p className="mt-1 sm:mt-2">
            Il est important d'informer votre enfant à l'avance de sa prise de sang et de répondre à ses interrogations.
            Pendant la prise de sang, pas d'inquiétude !
          </p>
          <p className="mt-1 sm:mt-2">
            Nos équipes médicales sont formées à l'accueil et à la prise de sang de l'enfant et vont s'efforcer de
            rendre l'expérience la plus rassurante possible.
          </p>

          <p className="mt-2 sm:mt-4 font-semibold">Au laboratoire :</p>
          <ol className="list-decimal pl-4 sm:pl-5 mt-1 sm:mt-2 space-y-1 sm:space-y-2">
            <li>
              <strong>Prendre rendez-vous :</strong> Pas de prise de rendez-vous sauf pour bilan particulier (test au
              synacthéne …)
            </li>
            <li>
              <strong>QUELLES SONT LES MODALITÉS DE RÈGLEMENT ?</strong>
              <ul className="list-disc pl-4 sm:pl-5 mt-0.5 sm:mt-1">
                <li>
                  Bon de prise en charge : pour les patients affiliés aux structures avec lesquelles nous sommes
                  conventionnés (CMIM et Wafa assurance, OCP)
                </li>
                <li>Espèces, Carte de crédit et Chèques</li>
              </ul>
            </li>
            <li>
              <strong>QUEL DÉLAI POUR OBTENIR MES RÉSULTATS ?</strong>
              <p className="mt-0.5 sm:mt-1">
                Le délai d'obtention de vos résultats dépend des examens à effectuer. Il vous sera communiqué au moment
                de l'enregistrement de votre dossier en laboratoire ou lors du prélèvement. La plupart des résultats
                peuvent être rendus le jour même.
              </p>
            </li>
            <li>
              <strong>COMMENT OBTENIR MES RÉSULTATS ?</strong>
              <p className="mt-0.5 sm:mt-1">
                Vos résultats sont systématiquement imprimés et joints le cas échéant à la feuille de mutuelle qui est
                complétée. Vous pouvez également les recevoir par email en format PDF afin d'en garder une copie
                électronique.
              </p>
            </li>
          </ol>
        </div>
      ),
    },
  ]

  return (
    <>
      {/* Main content with rounded top corners */}
      <section className="py-6 sm:py-16 bg-white rounded-t-[50px]">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4 text-primary">Comment préparer ma visite ?</h2>
            <div className="w-16 sm:w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            {accordionItems.map((item, index) => (
              <div key={index} className="mb-3 sm:mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className={`w-full flex justify-between items-center p-3 sm:p-4 text-left font-medium text-xs sm:text-base ${
                    openAccordion === index ? "bg-primary text-white" : "bg-gray-50 text-gray-700"
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{item.title}</span>
                  {openAccordion === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <AnimatePresence>
                  {openAccordion === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <motion.div initial={{ y: 10 }} animate={{ y: 0 }} className="p-3 sm:p-4 bg-white text-gray-700">
                        {item.content}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action section with rounded bottom corners */}
      <section className="py-6 sm:py-16 bg-primary text-white rounded-b-[50px]">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Évitez La Salle D'Attente!</h3>
            <p className="text-base mb-4 sm:mb-6">Besoin de renseignements ? Appelez nous ou</p>
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
