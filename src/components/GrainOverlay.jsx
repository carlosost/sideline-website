import { useEffect, useRef } from 'react'

export function GrainOverlay() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const size = 256
    const canvas = document.createElement('canvas')
    canvas.width  = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    const img = ctx.createImageData(size, size)

    for (let i = 0; i < img.data.length; i += 4) {
      const v = Math.floor(Math.random() * 255)
      img.data[i]     = v
      img.data[i + 1] = v
      img.data[i + 2] = v
      img.data[i + 3] = 255
    }
    ctx.putImageData(img, 0, 0)

    el.style.backgroundImage = `url(${canvas.toDataURL()})`
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position:        'fixed',
        inset:           0,
        zIndex:          9999,
        pointerEvents:   'none',
        backgroundSize:  '256px 256px',
        backgroundRepeat:'repeat',
        opacity:         0.18,
        mixBlendMode:    'overlay',
      }}
    />
  )
}
