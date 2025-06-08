export default function ContactHero() {
  return (
    <section className="relative flex flex-col">
      <div className="container mx-auto px-4 py-10 sm:py-16 md:py-24">
        <div className="text-white">
          {/* Hero content with max-width */}
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">Contactez-nous</h1>
            <p className="text-base sm:text-xl md:text-2xl font-medium text-yellow-400 mb-3 sm:mb-6">
              Nous sommes à votre écoute
            </p>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
              <p className="text-xs sm:text-base">
                Vous avez des questions sur nos services d'analyses médicales ou vous souhaitez prendre rendez-vous ?
                N'hésitez pas à nous contacter. Notre équipe est à votre disposition pour vous répondre dans les plus
                brefs délais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
