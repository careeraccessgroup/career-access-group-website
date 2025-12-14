import { useEffect, useState } from 'react'

export default function useCountUp(target, { duration = 1500, start = false } = {}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) {
      setValue(0)
      return
    }

    let rafId
    let startTime

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = easeOutCubic(progress)
      const current = Math.round(target * eased)
      setValue(current)
      if (progress < 1) rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [target, duration, start])

  return value
}
