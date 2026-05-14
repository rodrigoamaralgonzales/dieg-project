"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface PreloaderProps {
  onComplete: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if preloader was already shown in this session
    const hasBeenShown = sessionStorage.getItem("preloader-shown")
    
    if (hasBeenShown) {
      setProgress(100)
      setIsVisible(false)
      onComplete()
      return
    }

    setIsVisible(true)
    let currentProgress = 0
    let timerId: NodeJS.Timeout

    const updateProgress = () => {
      const increment = Math.floor(Math.random() * 6) + 3
      currentProgress = Math.min(currentProgress + increment, 100)
      setProgress(currentProgress)

      if (currentProgress < 100) {
        const nextDelay = Math.random() * 70 + 50
        timerId = setTimeout(updateProgress, nextDelay)
      } else {
        // Wait at 100% then trigger onComplete and hide
        timerId = setTimeout(() => {
          setIsVisible(false)
          sessionStorage.setItem("preloader-shown", "true")
          setTimeout(onComplete, 500)
        }, 500)
      }
    } 

    timerId = setTimeout(updateProgress, 100)
    return () => clearTimeout(timerId)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-end justify-end p-4 md:p-8 pointer-events-none"
        >
          {/* Right side line */}
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: `${progress}%` }}
            className="absolute right-0 bottom-0 w-1.5 bg-primary"
          />

          {/* Counter */}
          <div className="relative z-10">
            <div className="text-7xl md:text-9xl font-bold text-foreground flex items-end leading-none">
              <span className="tabular-nums tracking-tighter">{progress}</span>
              <span className="text-xl md:text-3xl text-primary ml-1 mb-[0.2em] font-medium">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
