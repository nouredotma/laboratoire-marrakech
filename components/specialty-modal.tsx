"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

// Update the interface to include the new properties
interface SpecialtyModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
  bgImage?: string
  headerColor?: string
}

// Update the component to use the new properties
export default function SpecialtyModal({
  isOpen,
  onClose,
  title,
  content,
  bgImage,
  headerColor = "bg-primary",
}: SpecialtyModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      // Restore scrolling when modal is closed
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  // Close modal on escape key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey)
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col"
            >
              {/* Header with custom color */}
              <div className={`flex items-center justify-between p-4 border-b text-white ${headerColor}`}>
                <h3 className="text-lg font-semibold">{title}</h3>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Background image */}
              {bgImage && (
                <div className="relative h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }} />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h2 className="text-white text-2xl font-bold">{title}</h2>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-4 overflow-y-auto flex-grow">
                <div className="prose prose-sm max-w-none">
                  <div className="text-sm text-gray-700 whitespace-pre-line">{content}</div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t bg-gray-50 flex justify-end">
                <button
                  onClick={onClose}
                  className={`px-4 py-2 text-white rounded-md hover:opacity-90 transition-colors text-sm ${headerColor}`}
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
