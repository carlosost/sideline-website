import { useEffect } from 'react'

export function useScrollVelocity() {
  useEffect(() => {
    let lastY          = window.scrollY
    let lastTime       = performance.now()
    let smoothVelocity = 0
    let appliedWeight  = 700
    let rafId

    function tick() {
      const now        = performance.now()
      const currentY   = window.scrollY
      const dt         = Math.max(now - lastTime, 1)
      const raw        = Math.min(Math.abs(currentY - lastY) / dt * 16, 10)

      // Slow EMA — only reflects sustained scrolling, not per-frame jitter
      smoothVelocity = smoothVelocity * 0.88 + raw * 0.12

      const weight = Math.round(700 + smoothVelocity * 20)

      // Skip DOM write if value hasn't changed — prevents spurious layout work
      if (weight !== appliedWeight) {
        document.documentElement.style.setProperty('--heading-weight', weight)
        appliedWeight = weight
      }

      lastY    = currentY
      lastTime = now
      rafId    = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])
}
