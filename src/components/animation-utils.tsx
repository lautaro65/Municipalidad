"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedElementProps {
  children: React.ReactNode
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideInTop"
  delay?: number
  className?: string
  threshold?: number
}

export function AnimatedElement({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
  threshold = 0.1,
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    const currentElement = elementRef.current
    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [threshold])

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0"
    
    const baseClass = `animate-${animation.replace(/([A-Z])/g, "-$1").toLowerCase()}`
    return `${baseClass} ${delay > 0 ? `animate-delay-${Math.round(delay * 1000)}` : ""}`
  }

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  index?: number
}

export function AnimatedCard({ children, className = "", index = 0 }: AnimatedCardProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsRevealed(true)
          }, index * 100)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    const currentCard = cardRef.current
    if (currentCard) {
      observer.observe(currentCard)
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard)
      }
    }
  }, [index])

  return (
    <div
      ref={cardRef}
      className={`card-reveal hover-lift ${isRevealed ? "revealed" : ""} ${className}`}
    >
      {children}
    </div>
  )
}

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export function AnimatedCounter({ end, duration = 2000, suffix = "", className = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    const currentCounter = counterRef.current
    if (currentCounter) {
      observer.observe(currentCounter)
    }

    return () => {
      if (currentCounter) {
        observer.unobserve(currentCounter)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, end, duration])

  return (
    <span ref={counterRef} className={className}>
      {count}{suffix}
    </span>
  )
}

interface AnimatedIconProps {
  children: React.ReactNode
  className?: string
  animation?: "bounce" | "pulse" | "float" | "rotate"
}

export function AnimatedIcon({ children, className = "", animation = "bounce" }: AnimatedIconProps) {
  const getAnimationClass = () => {
    switch (animation) {
      case "bounce":
        return "animate-bounce-slow"
      case "pulse":
        return "animate-pulse-slow"
      case "float":
        return "animate-float"
      case "rotate":
        return "animate-spin"
      default:
        return "animate-bounce-slow"
    }
  }

  return (
    <div className={`icon-bounce ${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}

interface ParallaxElementProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxElement({ children, speed = 0.5, className = "" }: ParallaxElementProps) {
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

    window.addEventListener('scroll', handleScroll)
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