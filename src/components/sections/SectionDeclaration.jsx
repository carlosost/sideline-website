import { LetterReveal } from '../ui/LetterReveal'
import { MetaTag } from '../ui/MetaTag'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export function SectionDeclaration() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0 })

  return (
    <section
      ref={ref}
      className={`relative min-h-screen bg-canvas flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="absolute top-8 right-8 md:top-12 md:right-16">
        <MetaTag>[ NYC / 2026 ]</MetaTag>
      </div>

      <div className="section-content" style={{ maxWidth: '80vw' }}>
        <p className="font-mono text-tag-mono text-iron opacity-30 mb-10 tracking-widest">
          § 01 — THE DECLARATION
        </p>

        <h1
          className="font-serif text-display-xl heading-dynamic text-iron leading-none mb-14"
          aria-label="Long Offline. Long Humans. Long Friday."
        >
          <LetterReveal text="LONG OFFLINE." as="div" baseDelay={0} />
          <LetterReveal text="LONG HUMANS."  as="div" baseDelay={280} />
          <LetterReveal text="LONG FRIDAY."  as="div" baseDelay={560} />
        </h1>

        <p className="font-mono text-body-mono text-iron opacity-60 max-w-[58ch]">
          Everything that truly matters happens under a real sky, on a hard court,
          or inside a room full of roaring people. Digital optimization has reached
          its logical limit. The next decade belongs to those who never forgot
          that humans are physical creatures.
        </p>
      </div>
    </section>
  )
}
