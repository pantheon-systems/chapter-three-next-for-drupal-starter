import Link from "next/link"
import { useRouter } from "next/router"

import { config } from "@/lib/config"
import { MenuMain } from "@/components/menu--main"

export function Header() {
  const router = useRouter()

  return (
    <header className={router.asPath === "/" ? "bg-gray-50" : "bg-white"}>
      <div className="container flex items-center justify-between px-4 py-4 mx-auto space-x-6 md:py-6">
        <div className="flex items-center justify-between flex-1 w-full md:justify-start space-x-14">
          <Link href="/" passHref>
            <a className="text-2xl font-bold no-underline">{config.name}</a>
          </Link>
          <MenuMain items={config.links.main} />
        </div>
        <Link href="https://next-drupal.org/docs" passHref>
          <a
            target="_blank"
            rel="external"
            className="hidden px-4 py-2 text-white transition-colors bg-black md:flex hover:bg-yellow-300 hover:text-black"
          >
            Read the docs
          </a>
        </Link>
      </div>
    </header>
  )
}
