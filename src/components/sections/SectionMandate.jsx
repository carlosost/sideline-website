import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

export function SectionMandate() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 })

  return (
    <section
      ref={ref}
      className={`min-h-screen bg-iron flex flex-col justify-between px-8 md:px-16 lg:px-24 py-24 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="section-content flex-1 flex flex-col justify-center">
        <p className="font-mono text-tag-mono text-clay opacity-70 mb-10 tracking-widest">
          § 04 — THE MANDATE
        </p>

        <h2
          className="font-serif text-display-xl heading-dynamic text-canvas leading-none mb-14"
          style={{ maxWidth: '80vw' }}
        >
          METRICS,<br />
          NOT IMPRESSIONS.
        </h2>

        <p className="font-mono text-body-mono text-canvas opacity-60 max-w-[55ch] mb-16">
          We manage over $155M in committed capital. We do not take social proof
          as a proxy for business quality. We look for revenue, retention,
          and the one metric that actually matters: do people show up?
        </p>

        <div>
          <a
            href="mailto:capital@sidelinegroup.co"
            className="font-mono text-body-mono text-canvas underline underline-offset-4 decoration-clay hover:text-clay transition-colors duration-100"
          >
            Institutional Access Only. →
          </a>
        </div>
      </div>

      <div className="flex justify-between items-end pt-20 border-t border-canvas border-opacity-10 mt-24">
        <span className="font-mono text-tag-mono text-canvas opacity-25">
          SIDELINE GROUP LLC
        </span>
        <span className="font-mono text-tag-mono text-canvas opacity-25">
          NYC — 2026
        </span>
      </div>
    </section>
  )
}
