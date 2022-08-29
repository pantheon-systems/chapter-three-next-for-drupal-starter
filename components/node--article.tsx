import Image from "next/image"
import { DrupalNode } from "next-drupal"

import { absoluteUrl, formatDate } from "@/lib/utils"

interface NodeArticleProps {
  node: DrupalNode
}

export function NodeArticle({ node, ...props }: NodeArticleProps) {
  return (
    <article className="py-10" {...props}>
      <div className="container max-w-4xl px-4 mx-auto">
        <h1 className="text-3xl font-semibold md:text-5xl">{node.title}</h1>
        <div className="my-6">
          {node.uid?.display_name ? (
            <span>
              Posted by{" "}
              <span className="font-semibold">{node.uid?.display_name}</span>
            </span>
          ) : null}
          <span> - {formatDate(node.created)}</span>
        </div>
        {node.field_image && (
          <figure>
            <Image
              src={absoluteUrl(node.field_image.uri.url)}
              width={864}
              height={460}
              layout="responsive"
              objectFit="cover"
              alt={node.field_image.resourceIdObjMeta.alt}
              priority
            />
            {node.field_image.resourceIdObjMeta.alt && (
              <figcaption className="py-2 text-sm text-center text-gray-600">
                {node.field_image.resourceIdObjMeta.alt}
              </figcaption>
            )}
          </figure>
        )}
        {node.body?.processed && (
          <div
            dangerouslySetInnerHTML={{ __html: node.body?.processed }}
            className="mt-6 leading-loose prose"
          />
        )}
      </div>
    </article>
  )
}
