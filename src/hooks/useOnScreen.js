import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref to attach to an element, and a boolean for whether
 * that element is currently (or has ever been, if `once` is true) visible.
 */
export default function useOnScreen({ threshold = 0.25, once = true } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, isVisible]
}
