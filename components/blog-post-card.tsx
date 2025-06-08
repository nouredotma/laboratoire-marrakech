import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Tag } from "lucide-react"

interface BlogPostCardProps {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  categories: string[]
  image: string
  slug: string
}

export default function BlogPostCard({ id, title, excerpt, author, date, categories, image, slug }: BlogPostCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex-grow flex flex-col">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-2">
          {categories.map((category, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
            >
              <Tag size={12} className="mr-1" />
              {category}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          <Link href={`/blog/${slug}`} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-xs sm:text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">{excerpt}</p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
