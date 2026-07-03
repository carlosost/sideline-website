import { useEffect } from 'react'

export function useScrollVelocity() {
  useEffect(() => {
    let lastY    = window.scrollY
    let lastTime = performance.now()
    let rafId

    function tick() {
      const now        = performance.now()
      const currentY   = window.scrollY
      const dt         = Math.max(now - lastTime, 1)
      const pxPerFrame = Math.abs(currentY - lastY) / dt * 16

      const velocity = Math.min(pxPerFrame, 10)
      const weight   = Math.round(700 + velocity * 20)

      document.documentElement.style.setProperty('--heading-weight', weight)

      lastY    = currentY
      lastTime = now
      rafId    = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])
}
