import Link from "next/link"

import { config } from "@/lib/config"
import { MenuFooter } from "@/components/menu--footer"

export function Footer() {
  return (
    <footer className="py-6 bg-gray-50 md:py-12">
      <div className="container flex flex-col items-start justify-between px-4 py-6 mx-auto space-y-6 md:items-center md:space-y-0 md:flex-row">
        <div className="flex flex-col space-y-4">
          <Link href="/" passHref>
            <a className="text-2xl font-bold no-underline">{config.name}</a>
          </Link>
          {config.description && <p>{config.description}</p>}
        </div>
        <MenuFooter items={config.links.main} />
      </div>
    </footer>
  )
}
