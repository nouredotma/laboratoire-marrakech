"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface CollapsibleSectionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export default function CollapsibleSection({ title, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="mb-3 sm:mb-4 border border-gray-200 rounded-lg overflow-hidden">
      <button
        className={`w-full flex justify-between items-center p-3 sm:p-4 text-left font-medium text-xs sm:text-base ${
          isOpen ? "bg-primary text-white" : "bg-gray-50 text-gray-700"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <motion.div initial={{ y: 10 }} animate={{ y: 0 }} className="p-3 sm:p-4 bg-white text-gray-700">
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
