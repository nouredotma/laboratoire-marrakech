import BlogPostLayout from "@/components/blog-post-layout"
import CollapsibleSection from "@/components/collapsible-section"

export default function MarrakechPartenaireAnalysesPage() {
  return (
    <BlogPostLayout
      title="Marrakech : Trouvez le Bon Partenaire pour Vos Analyses"
      date="9 juillet 2021"
      author="admin"
      categories={["Biologie médicale", "Medicale", "Docteur", "Pharmacie"]}
      image="/images/logo.jpg"
      content={
        <div>
          <CollapsibleSection title="Pourquoi choisir le Laboratoire Al Anouar ?" defaultOpen={true}>
            <p className="text-sm sm:text-base text-gray-700">
              Le Laboratoire Al Anouar se distingue par son engagement envers l'excellence médicale et la satisfaction
              de ses patients. Fort d'une équipe de professionnels de santé expérimentés et d'équipements de pointe, il
              offre une gamme complète d'analyses médicales, répondant ainsi aux besoins de toute la famille.
            </p>

            <ul className="list-disc pl-4 sm:pl-5 mt-2 sm:mt-3 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700">
              <li>
                <strong>Expertise:</strong> Nos biologistes médicaux sont des experts dans leur domaine et assurent une
                interprétation précise de vos résultats.
              </li>
              <li>
                <strong>Technologie de pointe:</strong> Nous utilisons des équipements de dernière génération pour des
                résultats rapides et fiables.
              </li>
              <li>
                <strong>Large gamme d'analyses:</strong> Du bilan sanguin complet aux tests spécialisés, nous couvrons
                tous vos besoins.
              </li>
              <li>
                <strong>Confort:</strong> Nos locaux sont conçus pour vous accueillir dans les meilleures conditions.
              </li>
              <li>
                <strong>Confidentialité:</strong> La confidentialité de vos données est notre priorité absolue.
              </li>
            </ul>
          </CollapsibleSection>

          <CollapsibleSection title="FAQ">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm sm:text-base font-medium text-gray-800 mb-1">
                  Quels types d'analyses proposez-vous ?
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Nous proposons une large gamme d'analyses médicales, notamment :
                </p>
                <ul className="list-disc pl-4 sm:pl-5 mt-1 sm:mt-2 space-y-0.5 sm:space-y-1 text-xs sm:text-sm text-gray-700">
                  <li>Bilan sanguin complet</li>
                  <li>Biochimie</li>
                  <li>Hématologie</li>
                  <li>Hormonologie</li>
                  <li>Immunologie</li>
                  <li>Bactériologie</li>
                  <li>Virologie</li>
                  <li>Allergologie</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-medium text-gray-800 mb-1">Comment prendre rendez-vous ?</h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Vous pouvez prendre rendez-vous par téléphone, en ligne ou directement à notre laboratoire. Notre
                  équipe est à votre disposition pour vous proposer un créneau qui vous convient.
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-medium text-gray-800 mb-1">
                  Quels documents dois-je apporter ?
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Pour votre rendez-vous, veuillez apporter votre pièce d'identité, votre ordonnance médicale (si
                  applicable) et votre carte d'assurance ou de mutuelle.
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-medium text-gray-800 mb-1">
                  Quels sont les délais de rendu des résultats ?
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Les délais varient selon les analyses. Certains résultats sont disponibles le jour même, tandis que
                  d'autres peuvent prendre quelques jours. Notre équipe vous informera du délai précis lors de votre
                  rendez-vous.
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-medium text-gray-800 mb-1">
                  Comment puis-je récupérer mes résultats ?
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Vous pouvez récupérer vos résultats directement au laboratoire, les recevoir par courrier ou les
                  consulter en ligne via notre espace patient sécurisé.
                </p>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Laboratoire ALANOUAR Marrakech">
            <div>
              <h3 className="text-sm sm:text-base font-medium text-gray-800 mb-2">
                Pourquoi choisir le Laboratoire Al Anouar ?
              </h3>
              <p className="text-xs sm:text-sm text-gray-700">
                En choisissant le Laboratoire Al Anouar, vous optez pour la qualité, la fiabilité et la proximité. Notre
                équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner tout au long de votre
                parcours de soins.
              </p>
            </div>
          </CollapsibleSection>
        </div>
      }
    />
  )
}
