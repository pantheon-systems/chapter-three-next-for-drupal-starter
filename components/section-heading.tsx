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
    <div className="container flex flex-col items-center justify-center px-4 py-10 mx-auto space-y-4 text-center md:py-20">
      {headingLevel === 1 ? (
        <h1 className="text-4xl font-semibold md:tracking-wide md:text-5xl">
          {heading}
        </h1>
      ) : (
        <h2 className="text-4xl font-semibold md:tracking-wide md:text-5xl">
          {heading}
        </h2>
      )}
      {text && (
        <p className="max-w-xl text-lg font-light tracking-wide">{text}</p>
      )}
    </div>
  )
}
