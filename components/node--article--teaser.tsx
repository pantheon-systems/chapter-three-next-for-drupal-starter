import Image from "next/image"
import Link from "next/link"
import { DrupalNode } from "next-drupal"

import { absoluteUrl, formatDate } from "@/lib/utils"

interface NodeArticleTeaserProps {
  node: DrupalNode
}

export function NodeArticleTeaser({ node, ...props }: NodeArticleTeaserProps) {
  return (
    <article
      className="grid group relative grid-cols-[150px_1fr] gap-6 items-start"
      {...props}
    >
      {node.field_media_image && (
        <figure>
          <Image
            src={absoluteUrl(node.field_media_image.field_media_image.uri.url)}
            width={150}
            height={180}
            layout="responsive"
            objectFit="cover"
            alt={node.field_media_image.field_media_image.resourceIdObjMeta.alt}
          />
        </figure>
      )}
      <div className="flex flex-col py-6 space-y-4">
        <div className="flex items-center space-x-1 text-xs leading-none uppercase">
          {node.uid?.display_name ? (
            <span>{node.uid?.display_name}</span>
          ) : null}
          <span className="inline-flex items-center justify-center text-4xl leading-[0] relative top-[-2px] bg-red-100">
            &middot;
          </span>
          <span>{formatDate(node.created)}</span>
        </div>
        <h3 className="text-xl group-hover:underline">{node.title}</h3>
        <span className="text-sm text-gray-700">Read Article</span>
      </div>
      <Link href={node.path.alias} passHref>
        <a className="absolute inset-0">
          <span className="sr-only">Read article</span>
        </a>
      </Link>
    </article>
  )
}
