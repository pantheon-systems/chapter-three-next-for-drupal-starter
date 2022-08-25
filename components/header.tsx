import Link from "next/link"

import { config } from "@/lib/config"

import { MenuMain } from "@/components/menu--main"
import { useRouter } from "next/router"

export function Header() {
  const router = useRouter()

  return (
    <header className={router.asPath === "/" ? "bg-yellow-50" : "bg-white"}>
      <div className="container flex items-center justify-between px-4 py-6 mx-auto">
        <div className="flex items-center space-x-14">
          <Link href="/" passHref>
            <a className="text-2xl font-bold no-underline">{config.name}</a>
          </Link>
          <MenuMain items={config.links.main} />
        </div>
        <Link href="https://next-drupal.org/docs" passHref>
          <a
            target="_blank"
            rel="external"
            className="px-4 py-2 text-white transition-colors bg-black hover:bg-yellow-300 hover:text-black"
          >
            Read the docs
          </a>
        </Link>
      </div>
    </header>
  )
}
