"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import BlogPostCard from "./blog-post-card"
import Link from "next/link"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Guide des Meilleurs Laboratoires Médicaux à Marrakech : Services, Qualité et Localisation",
    excerpt:
      "Marrakech est une ville dynamique avec une population croissante. Il est donc essentiel d'avoir accès à des services de santé de qualité, y compris des laboratoires d'analyses médicales fiables...",
    author: "Dev.dgx",
    date: "30 décembre 2024",
    categories: ["Laboratoire", "Marrakech", "Santé"],
    image: "/images/marrakech-lab-guide.png",
    slug: "guide-laboratoires-medicaux-marrakech",
  },
  {
    id: 2,
    title: "Marrakech : Trouvez le Bon Partenaire pour Vos Analyses",
    excerpt:
      "Pourquoi choisir le Laboratoire Al Anouar ? Le Laboratoire Al Anouar se distingue par son engagement envers l'excellence et la qualité des services...",
    author: "admin",
    date: "9 juillet 2021",
    categories: ["Biologie médicale", "Medicale"],
    image: "/images/logo.jpg",
    slug: "marrakech-partenaire-analyses",
  },
]

export default function BlogContent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Extract all unique categories
  const allCategories = Array.from(new Set(blogPosts.flatMap((post) => post.categories)))

  // Filter posts based on search term and selected category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory ? post.categories.includes(selectedCategory) : true

    return matchesSearch && matchesCategory
  })

  return (
    <>
      {/* Main content with rounded top corners */}
      <section className="py-6 sm:py-16 bg-white rounded-t-[50px]">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-5xl mx-auto">
            {/* Search and filter */}
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Search */}
                <div className="flex-grow">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Rechercher un article..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>

                {/* Category filter */}
                <div className="w-full sm:w-auto">
                  <select
                    value={selectedCategory || ""}
                    onChange={(e) => setSelectedCategory(e.target.value || null)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                  >
                    <option value="">Toutes les catégories</option>
                    {allCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Blog posts grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {filteredPosts.map((post) => (
                  <BlogPostCard key={post.id} {...post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-700 mb-2">Aucun article trouvé</h3>
                <p className="text-sm text-gray-500">
                  Essayez de modifier vos critères de recherche ou consultez tous nos articles.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to action section with rounded bottom corners */}
      <section className="py-6 sm:py-16 bg-primary text-white rounded-b-[50px]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4">Besoin de plus d'informations ?</h3>
            <p className="text-base mb-4 sm:mb-6">Contactez-nous pour toute question concernant nos services</p>
            <Link
              href="/contacter"
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 text-primary font-bold rounded-md transition-all duration-300 hover:bg-yellow-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
