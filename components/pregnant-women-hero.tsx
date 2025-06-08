export default function PregnantWomenHero() {
  return (
    <section className="relative flex flex-col">
      <div className="container mx-auto px-4 py-10 sm:py-16 md:py-24">
        <div className="text-white">
          {/* Hero content with max-width */}
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">Femme enceinte</h1>
            <p className="text-base sm:text-xl md:text-2xl font-medium text-yellow-400 mb-3 sm:mb-6">
              Suivi biologique de la grossesse
            </p>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
              <p className="text-xs sm:text-base">
                Le laboratoire Al Anouar vous accompagne tout au long de votre grossesse avec un suivi biologique adapté
                à chaque étape. Découvrez nos services spécialisés pour les femmes enceintes et les couples en projet de
                parentalité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
