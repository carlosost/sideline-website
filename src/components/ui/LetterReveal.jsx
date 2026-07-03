export function LetterReveal({ text, as: Tag = 'h1', className, baseDelay = 200 }) {
  // Split into words so each word is wrapped in white-space:nowrap,
  // preventing mid-word line breaks while still allowing word-boundary wraps.
  const words = text.split(' ')
  let charIndex = 0

  return (
    <Tag className={className} aria-label={text}>
      <span aria-hidden="true">
        {words.map((word, wi) => {
          const wordSpans = word.split('').map((char) => {
            const delay = baseDelay + charIndex * 35
            charIndex++
            return (
              <span
                key={`${wi}-${charIndex}`}
                className="letter-char"
                style={{ animationDelay: `${delay}ms` }}
              >
                {char}
              </span>
            )
          })
          const spaceDelay = baseDelay + charIndex * 35
          charIndex++

          return (
            <span key={wi} style={{ whiteSpace: 'nowrap', display: 'inline' }}>
              {wordSpans}
              {wi < words.length - 1 && (
                <span
                  className="letter-char"
                  style={{ animationDelay: `${spaceDelay}ms` }}
                >
                  {' '}
                </span>
              )}
            </span>
          )
        })}
      </span>
    </Tag>
  )
}
