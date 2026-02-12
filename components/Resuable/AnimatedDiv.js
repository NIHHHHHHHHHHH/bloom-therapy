'use client'

import { motion } from 'framer-motion'

export default function AnimatedDiv({ 
  children, 
  className = "",
  delay = 0,
  direction = "up", // "up", "down", "left", "right"
  distance = 60,
  duration = 0.8,
  scrollDuration, // separate duration for scroll
  triggerOnce = true,
  ...props 
}) {
  // Direction mapping
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  }

  const animationProps = triggerOnce 
    ? {
        initial: { opacity: 0, ...directionMap[direction] },
        animate: { opacity: 1, x: 0, y: 0 },
        transition: { duration, ease: "easeOut", delay }
      }
    : {
        initial: { opacity: 0, ...directionMap[direction] },
        whileInView: { opacity: 1, x: 0, y: 0 },
        viewport: { once: true, amount: 0.3 }, // Changed to once: true
        transition: { duration: scrollDuration || duration, ease: "easeOut", delay }
      }

  return (
    <motion.div 
      className={className}
      {...animationProps}
      {...props}
    >
      {children}
    </motion.div>
  )
}