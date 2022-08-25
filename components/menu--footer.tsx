import Link from "next/link"

interface MenuFooterProps {
  items: {
    title: string
    url: string
  }[]
}

export function MenuFooter({ items }: MenuFooterProps) {
  return (
    <nav>
      <ul className="flex space-x-12">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.url} passHref>
              <a className="hover:underline">{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
