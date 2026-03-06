import Image from "next/image"
import Link from "next/link"

export default function HomeServiceBanner() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="rounded-xl overflow-hidden bg-[#302C83] flex flex-col md:flex-row items-center md:max-h-[380px]">
          {/* Image on the left */}
          <div className="w-full md:w-2/5 flex-shrink-0 max-h-[200px] md:max-h-none md:h-[380px]">
            <Image
              src="https://laboratoire-analyses-marrakech.com/y4bbackoffice/storage/app/public/prelevements/July2025/QYdBDLtUrRDmj99VH8fM.png"
              alt="Prélèvement à domicile"
              width={600}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Content on the right */}
          <div className="w-full md:w-3/5 p-4 md:p-8 flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
              Planifiez votre prélèvement à domicile
            </h2>
            <div>
              <Link
                href="/prelevement-a-domicile"
                className="inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md transition-all duration-300 text-sm md:text-base relative overflow-hidden group"
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
    </section>
  )
}
