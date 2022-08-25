import Link from "next/link"

import { config } from "@/lib/config"

import { MenuFooter } from "./menu--footer"

export function Footer() {
  return (
    <footer className="py-12">
      <div className="container flex items-center justify-between px-4 py-6 mx-auto">
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
