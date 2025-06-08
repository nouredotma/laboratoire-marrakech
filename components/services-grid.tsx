"use client"

import { useState } from "react"
import {
  Microscope,
  BugIcon as Bacteria,
  WormIcon as Virus,
  Shield,
  Sprout,
  Bug,
  Dna,
  Droplets,
  FlaskRoundIcon as Flask,
  BugIcon as Allergens,
} from "lucide-react"
import { memo } from "react"
import TypingText from "./typing-text"
import SpecialtyModal from "./specialty-modal"

// Specialty content data
const specialtyContent = {
  Microbiologie: {
    content: `Microbiologie
Laboratoire AL ANOUAR de biologie médicale
Notre service de microbiologie est en charge du diagnostic biologique des maladies infectieuses. Une discipline qui consiste en l'étude des micro-organismes et des activités qui les caractérisent. Cette science regroupe la bactériologie, la parasitologie, la mycologie et la virologie. Son activité s'étend du prélèvement des échantillons jusqu'à l'interprétation finale des résultats.`,
    bgImage: "/microscopic-life.png",
    headerColor: "bg-blue-600",
  },

  Bactériologie: {
    content: `Bactériologie
La bactériologie se charge du diagnostic et du traitement des infections bactériennes grâce l'isolement et l'identification des bactéries, l'analyse de l'antibiogramme et l'optimisation thérapeutique est donc un traitement adapté ciblé et personnalisé pour chaque patient.
 Le matériel de prélèvement fourni par le laboratoire est adapté à chaque type de prélèvement. Il est stérile, destiné à un usage unique, étanche et conforme aux exigences techniques et de sécurité.
Type de prélèvement :
-PRÉLÈVEMENTS PROVENANT DE ZONES NORMALEMENT STÉRILES (SANG, URINES, LCR, PRÉLÈVEMENTS PRÉOPÉRATOIRES…).
-PRÉLÈVEMENTS PROVENANT DE ZONES HABITUELLEMENT COLONISÉES PAR DES GERMES VARIÉS (PEAU, MUQUEUSES, ONGLES ETC…).`,
    bgImage: "/petri-dish-growth.png",
    headerColor: "bg-green-600",
  },

  Virologie: {
    content: `Virologie
Prend en charge le diagnostic biologique des infections virales. Les virus sont détectés d'une part de manière directe grâce aux techniques antigéniques et de PCR, ou indirecte grâce aux anticorps qui témoignent d'une infection présente ou passée.
Virus : hépatite A B C et delta, HIV, rubéole, herpes1-2, Ebv, Cmv, parvovirus B9…`,
    bgImage: "/microscopic-threat.png",
    headerColor: "bg-red-600",
  },

  "Laboratoire d'Auto-immunité": {
    content: `Laboratoire d'auto-immunité
Le laboratoire d'Immunopathologie s'occupe de la recherche et de l'identification d'un très large éventail d'autoanticorps, Le panel d'analyses proposé est très important et couvre pratiquement tous les domaines de l'auto-immunité (lupus érythémateux, polyarthrite rhumatoïde etc…).

Il s'appuie pour cela sur différentes techniques d'analyses ; L'immunofluorescence indirecte (IFI), L'ELISA, L'Immunodot et le Western Blot.`,
    bgImage: "/immune-cells-abstract.png",
    headerColor: "bg-purple-600",
  },

  Mycologie: {
    content: `Mycologie
Une discipline qui permet l'Étude des champignons présentant un intérêt en pathologie humaine (ou même animale)
Le diagnostic d'une mycose dépend de la qualité du prélèvement ; il doit être bien orienté pour ramener du matériel effectivement parasité par un mycète vivant. Il est donc important de tenir compte du mode de propagation des champignons pour prélever correctement au niveau des lésions
Tout prélèvement dermatologique doit être réalisé à distance de tout traitement antifongique : – 2 semaines après un traitement antifongique local (crème, pommade) – Au moins 2 mois après un antifongique systémique.
Prélèvement peut être urgent est communique au médecin dans le plus bref délai (lcr- hémoculture).
Différent site de prélèvement :LCR, Hémoculture, cutanée ongle cheveux orl sérum bronchique urine vaginale.`,
    bgImage: "/fungal-spore-study.png",
    headerColor: "bg-amber-700",
  },

  Parasitologie: {
    content: `Parasitologie
Notre laboratoire de parasitologie Al Anouar
Les infections par des parasites sont très courantes dans les régions à climat tropical, l'exemple le plus fréquent de ce type d'infection étant le paludisme. En dehors des zones tropicales, les maladies le plus souvent provoquées par des parasites sont la trichomonase, la giardiase, la cryptosporidiose, l'amibiase et la toxoplasmose.

Goute épaisse
Leishmaniose
Toxoplasmose`,
    bgImage: "/placeholder.svg?height=400&width=800&query=parasites microscope teal background",
    headerColor: "bg-teal-600",
  },

  "Biologie moléculaire": {
    content: `Biologie moléculaire
Pcr : infectieuse tuberculose, mycoplasme, charge virale, chlamediae
Recherche des mutations`,
    bgImage: "/placeholder.svg?height=400&width=800&query=dna helix blue background",
    headerColor: "bg-indigo-600",
  },

  "Laboratoire d'hématologie": {
    content: `Laboratoire d'hématologie
Hématologie Marrakech : Les activités du secteur d'Hématologie du Laboratoire AL ANOUAR sont réparties en deux grands pôles : Hématologie cellulaire et Hémostaste.
L'hématologie cellulaire correspond aux activités biologiques demandées pour l'étude des composés cellulaires du sang. La numération formule sanguine (NFS) est l'un des examens biologiques les plus fréquemment prescrits et fournit des renseignements importants sur les types et le nombre de cellules dans le sang: globules rouges, globules blancs, plaquettes etc. le laboratoire AL ANOUAR équipé d'un matériels sophistiqué et a la pointe de la technologie même avec et selon les indications Analyse du frottis sanguin reste la clé d'un bon diagnostic.
Le laboratoire AL ANOUAR développe une activité d'hématologie cellulaire spécialisée, par l'étude du myélogramme demandée pour le diagnostic et le suivi biologique des patients atteints de leucémies, syndrome myélodysplasique, anémies mégaloblastique…, diagnostic et suivi de leucémies.
Le deuxième pôle du secteur hématologie est l'hémostase. Réalisation des bilans biologiques ; l'hemostase de la routine (tp-tca-ts) ou spésialisé bilan de thrombophilie grâce au dosage des inhibiteurs de coagulation et à la recherche d'anticoagulants lupiques. Surveillance des traitements anticoagulants et exploration de l'hémostase secondaire par le dosage des principaux facteurs et inhibiteurs de la coagulation.`,
    bgImage: "/placeholder.svg?height=400&width=800&query=blood cells red background",
    headerColor: "bg-red-700",
  },

  "Laboratoire de biochimie": {
    content: `Laboratoire de biochimie
Les analyses de biochimie comprennent le dosage de molécules contenues dans différents liquides physiologiques (sang, urines, liquides de ponction). Les résultats de ces analyses sont un élément indispensable pour le diagnostic de nombreuses pathologies. Le laboratoire de biochimie et, grâce à des automates connectés à une chaîne robotisée, le dosage de plus de 100 analytes de routine en utilisant plusieurs techniques
Le laboratoire de biochimie assure en plus des prestations spécialisées ; séparation électrophorétique et dosage de protéines spécifiques
hormonologie : exploration de l'axe thyroïdien, de l'axe gonadique et de l'axe surrénalien
oncologie : marqueurs tumoraux
biochimie du liquide céphalo-rachidien, liquide d'ascite, et pleurale.`,
    bgImage: "/placeholder.svg?height=400&width=800&query=chemistry lab flasks green background",
    headerColor: "bg-emerald-600",
  },

  "Laboratoire d'immunologie - allergologie": {
    content: `Laboratoire d'immunologie - allergologie
L'exploration des maladies allergiques / pseudo-allergiques par la réalisation des dosages d'anticorps IgE et IgE spécifiques vis-à-vis d'un large panel.`,
    bgImage: "/placeholder.svg?height=400&width=800&query=allergy cells yellow background",
    headerColor: "bg-yellow-600",
  },
}

const services = [
  {
    id: 1,
    title: "Microbiologie",
    icon: Microscope,
  },
  {
    id: 2,
    title: "Bactériologie",
    icon: Bacteria,
  },
  {
    id: 3,
    title: "Virologie",
    icon: Virus,
  },
  {
    id: 4,
    title: "Laboratoire d'Auto-immunité",
    icon: Shield,
  },
  {
    id: 5,
    title: "Mycologie",
    icon: Sprout,
  },
  {
    id: 6,
    title: "Parasitologie",
    icon: Bug,
  },
  {
    id: 7,
    title: "Biologie moléculaire",
    icon: Dna,
  },
  {
    id: 8,
    title: "Laboratoire d'hématologie",
    icon: Droplets,
  },
  {
    id: 9,
    title: "Laboratoire de biochimie",
    icon: Flask,
  },
  {
    id: 10,
    title: "Laboratoire d'immunologie - allergologie",
    icon: Allergens,
  },
]

// Memoize the service item to prevent unnecessary re-renders
const ServiceItem = memo(
  ({
    service,
    onClick,
  }: {
    service: (typeof services)[0]
    onClick: () => void
  }) => {
    const Icon = service.icon

    return (
      <div key={service.id} className="group cursor-pointer" onClick={onClick}>
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group-hover:border-primary/30 p-3 sm:p-4 text-center h-full flex flex-col items-center justify-center relative">
          {/* Fill from bottom effect */}
          <div className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center bg-primary/5 rounded-full mb-2 sm:mb-3 group-hover:bg-primary/20 transition-colors">
              <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
            <h3 className="text-xs sm:text-sm font-medium text-gray-800 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
          </div>
        </div>
      </div>
    )
  },
)

ServiceItem.displayName = "ServiceItem"

export default function ServicesGrid() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  // Update the handleServiceClick function to pass the correct content
  const handleServiceClick = (title: string) => {
    setSelectedService(title)
    setModalOpen(true)
  }

  return (
    <section className="py-8 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-primary min-h-[3rem]">
          <TypingText text="NOS SPÉCIALITÉS" delay={0.2} typingSpeed={80} deletingSpeed={40} />
        </h2>
        <p className="text-[10px] sm:text-base text-gray-600 text-center max-w-3xl mx-auto mb-4 sm:mb-12">
          Notre laboratoire propose une gamme complète d'analyses médicales réalisées par des experts qualifiés,
          utilisant des équipements de pointe pour des résultats précis et fiables.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
          {services.map((service) => (
            <ServiceItem key={service.id} service={service} onClick={() => handleServiceClick(service.title)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <SpecialtyModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={selectedService}
          content={specialtyContent[selectedService as keyof typeof specialtyContent].content}
          bgImage={specialtyContent[selectedService as keyof typeof specialtyContent].bgImage}
          headerColor={specialtyContent[selectedService as keyof typeof specialtyContent].headerColor}
        />
      )}
    </section>
  )
}
