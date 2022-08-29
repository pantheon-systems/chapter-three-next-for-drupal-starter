import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"

interface MenuMainProps {
  items: {
    title: string
    url: string
  }[]
}

export function MenuMain({ items }: MenuMainProps) {
  const router = useRouter()
  return (
    <nav>
      <ul className="flex space-x-8 md:space-x-12">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.url} passHref>
              <a
                className={clsx("font-semibold hover:underline", {
                  underline:
                    router.asPath !== "/" && router.asPath === item.url,
                })}
              >
                {item.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
