"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

export function AnimatedCounter({ value, duration = 2000, prefix = "", suffix = "", className = "" }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime
    let animationFrame

    const startAnimation = (timestamp) => {
      startTime = timestamp
      animate(timestamp)
    }

    const animate = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const currentCount = Math.floor(progress * value)
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(startAnimation)

    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration, isInView])

  return (
    <div ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  )
}
