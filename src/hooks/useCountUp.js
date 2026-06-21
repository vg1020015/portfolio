import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 up to `end` over `duration` ms, once `start` is true.
 */
export default function useCountUp(end, { duration = 1500, start = false } = {}) {
  const [count, setCount] = useState(0)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!start || hasRun.current) return
    hasRun.current = true

    const startTime = performance.now()

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      // ease-out so the count settles smoothly rather than stopping abruptly
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(step)
  }, [start, end, duration])

  return count
}
