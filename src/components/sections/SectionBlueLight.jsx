import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export function SectionBlueLight() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 })

  return (
    <section
      ref={ref}
      className={`relative flex flex-col px-8 md:px-16 lg:px-24 pt-24 pb-32 ${
        isVisible ? 'section-dark is-visible' : 'bg-canvas text-iron'
      }`}
    >
      <div className="section-content" style={{ maxWidth: '80vw' }}>
        <p className="font-mono text-tag-mono opacity-40 mb-10 tracking-widest">
          § 02 — THE CONSUMER
        </p>

        <h2
          className="font-serif text-display-xl heading-dynamic leading-none mb-14"
          style={{ maxWidth: '80vw' }}
        >
          EVERY GENERATION PRODUCES ITS{' '}
          <span className="text-clay">BLUE-LIGHT REFUGEE.</span>
        </h2>

        <p className="font-mono text-body-mono opacity-60 max-w-[58ch]">
          The modern consumer is hyper-connected, over-stimulated, and profoundly
          isolated. Screen time has plateaued. Gym memberships are at all-time
          highs. Live sports viewership is rising while scripted streaming
          collapses. The ultimate luxury of the next decade is disconnection.
        </p>
      </div>
    </section>
  )
}
