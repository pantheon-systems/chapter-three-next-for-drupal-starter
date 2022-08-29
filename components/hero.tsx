import clsx from "clsx"

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  heading: string
  lead?: string
}

export function Hero({
  heading,
  lead,
  children,
  className,
  ...props
}: HeroProps) {
  return (
    <section
      className={clsx("pt-8 pb-12 md:pt-16 md:pb-24", className)}
      {...props}
    >
      <div className="container flex flex-col items-start justify-center px-4 mx-auto space-y-6">
        <h1 className="text-4xl font-black md:text-6xl">{heading}</h1>
        {lead && <p className="max-w-3xl text-xl leading-8">{lead}</p>}
        {children}
      </div>
    </section>
  )
}
