"use client"

import { useEffect, useState, useRef, memo } from "react"

interface TypingTextProps {
  text: string
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
  delay?: number
}

const TypingText = memo(function TypingText({
  text,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
  delay = 0,
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("")
  const animationRef = useRef<NodeJS.Timeout | null>(null)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      // Set initial delay
      const initialDelay = setTimeout(() => {
        startAnimation()
      }, delay * 1000)

      return () => clearTimeout(initialDelay)
    }

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current)
      }
    }
  }, [delay])

  const startAnimation = () => {
    let currentIndex = 0
    let isDeleting = false

    const animateText = () => {
      // Clear any existing timer
      if (animationRef.current) clearTimeout(animationRef.current)

      // Current text to display
      const currentText = text.substring(0, currentIndex)
      setDisplayText(currentText)

      // Determine the next step
      if (!isDeleting) {
        // Typing phase
        if (currentIndex < text.length) {
          currentIndex++
          animationRef.current = setTimeout(animateText, typingSpeed)
        } else {
          // End of typing, pause before deleting
          isDeleting = true
          animationRef.current = setTimeout(animateText, pauseTime)
        }
      } else {
        // Deleting phase
        if (currentIndex > 0) {
          currentIndex--
          animationRef.current = setTimeout(animateText, deletingSpeed)
        } else {
          // End of deleting, pause before typing again
          isDeleting = false
          animationRef.current = setTimeout(animateText, pauseTime)
        }
      }
    }

    // Start the animation
    animateText()
  }

  return <span className={className}>{displayText}</span>
})

export default TypingText
