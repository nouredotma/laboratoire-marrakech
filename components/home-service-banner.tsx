import Image from "next/image"
import Link from "next/link"

export default function HomeServiceBanner() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="relative rounded-xl overflow-hidden">
          {/* Full height image without constraints */}
          <Image
            src="https://laboratoire-analyses-marrakech.com/wp-content/uploads/2024/03/Sans-titre-18.png"
            alt="Prélèvement à domicile"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />

          {/* Content overlay with adjusted positioning */}
          <div className="absolute inset-0 flex items-center md:items-center justify-end">
            <div className="w-2/3 md:w-3/5 p-4 md:p-8 flex justify-end md:justify-end md:pr-16 md:mt-10">
              <div className="p-3 md:p-6 rounded-lg max-w-[180px] md:max-w-lg">
                <h2 className="text-sm md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                  Planifiez votre prélèvement à domicile
                </h2>
                <Link
                  href="/prelevement-a-domicile"
                  className="inline-flex items-center justify-center px-3 py-1 md:px-6 md:py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md transition-all duration-300 text-xs md:text-base relative overflow-hidden group"
                >
                  {/* Shining animation effect */}
                  <span className="absolute inset-0 overflow-hidden">
                    <span className="shine-effect"></span>
                  </span>
                  <span className="relative z-10">Nous contacter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
