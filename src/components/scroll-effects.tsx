"use client"

import { useEffect, useRef, useState } from "react"

interface SmoothScrollProps {
  children: React.ReactNode
  className?: string
}

export function SmoothScroll({ children, className = "" }: SmoothScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

interface ParallaxBackgroundProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxBackground({ children, speed = 0.5, className = "" }: ParallaxBackgroundProps) {
  const [offset, setOffset] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const scrolled = window.pageYOffset
        const rate = scrolled * -speed
        setOffset(rate)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
      }}
    >
      {children}
    </div>
  )
}

interface ScrollProgressProps {
  className?: string
}

export function ScrollProgress({ className = "" }: ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 w-full h-1 bg-gray-200 z-50 ${className}`}>
      <div
        className="h-full bg-primary transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleIn"
}

export function AnimatedSection({ 
  children, 
  className = "", 
  threshold = 0.1,
  animation = "fadeIn" 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      }
    )

    const currentSection = sectionRef.current
    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [threshold])

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animation) {
        case "fadeIn":
          return "opacity-0"
        case "slideUp":
          return "opacity-0 translate-y-10"
        case "slideLeft":
          return "opacity-0 -translate-x-10"
        case "slideRight":
          return "opacity-0 translate-x-10"
        case "scaleIn":
          return "opacity-0 scale-95"
        default:
          return "opacity-0"
      }
    }
    
    return "opacity-100"
  }

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  )
}

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  speed?: number
  amplitude?: number
}

export function FloatingElement({ 
  children, 
  className = "", 
  speed = 3, 
  amplitude = 10 
}: FloatingElementProps) {
  const [offset, setOffset] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationId: number
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const newOffset = Math.sin(elapsed * 0.001 * speed) * amplitude
      setOffset(newOffset)
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [speed, amplitude])

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
      }}
    >
      {children}
    </div>
  )
}