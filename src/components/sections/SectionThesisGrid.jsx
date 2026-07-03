import { CategoryCard } from '../ui/CategoryCard'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

const CATEGORIES = [
  {
    label: '— 01',
    title: 'ACTIVE LIFESTYLES',
    description:
      'Performance apparel and equipment that moves with the body. We back brands that earn their place in a training bag.',
    className: 'md:col-span-2',
  },
  {
    label: '— 02',
    title: 'SPORTS & ARENAS',
    description:
      'The physical infrastructure of competition. Venues, facilities, leagues built around the irreplaceable live moment.',
    className: '',
  },
  {
    label: '— 03',
    title: 'LIVE EVENTS',
    description:
      'Shared experiences that cannot be streamed. The energy in the room is the product.',
    className: '',
  },
  {
    label: '— 04',
    title: 'WELLNESS LABS',
    description:
      'Recovery science and human performance. The optimization of the body, not the algorithm.',
    className: 'md:col-span-2',
  },
]

export function SectionThesisGrid() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.08 })

  return (
    <section
      ref={ref}
      className={`min-h-screen bg-canvas px-8 md:px-16 lg:px-24 py-24 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="section-content">
        <p className="font-mono text-tag-mono text-iron opacity-30 mb-10 tracking-widest">
          § 03 — THE THESIS
        </p>

        <h2
          className="font-serif text-display-xl heading-dynamic text-iron leading-none mb-20"
          style={{ maxWidth: '80vw' }}
        >
          THE OFFLINE ECONOMY.
        </h2>

        {/* gap-px exposes iron-tinted bg as hairline dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-iron bg-opacity-10">
          {CATEGORIES.map((cat) => (
            <CategoryCard key={cat.label} {...cat} />
          ))}
        </div>
      </div>
    </section>
  )
}
