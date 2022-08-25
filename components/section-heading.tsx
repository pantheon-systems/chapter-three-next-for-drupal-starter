interface SectionHeadingProps {
  heading: string
  headingLevel?: 1 | 2
  text?: string
}

export function SectionHeading({
  heading,
  headingLevel = 2,
  text,
}: SectionHeadingProps) {
  return (
    <div className="container flex flex-col items-center justify-center px-4 py-20 mx-auto space-y-4 text-center">
      {headingLevel === 1 ? (
        <h1 className="text-5xl font-semibold tracking-wide">{heading}</h1>
      ) : (
        <h2 className="text-5xl font-semibold tracking-wide">{heading}</h2>
      )}
      {text && (
        <p className="max-w-xl text-lg font-light tracking-wide">{text}</p>
      )}
    </div>
  )
}
