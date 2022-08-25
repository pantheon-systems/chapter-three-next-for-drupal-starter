import Image from "next/image"
import Link from "next/link"
import { DrupalNode } from "next-drupal"

import { absoluteUrl } from "@/lib/utils"

interface NodeRecipeTeaserProps {
  node: DrupalNode
}

export function NodeRecipeTeaser({ node, ...props }: NodeRecipeTeaserProps) {
  return (
    <article
      className="relative grid items-start content-start gap-4 group"
      {...props}
    >
      {node.field_media_image && (
        <figure>
          <Image
            src={absoluteUrl(node.field_media_image.field_media_image.uri.url)}
            width={250}
            height={300}
            layout="responsive"
            objectFit="cover"
            alt={node.field_media_image.field_media_image.resourceIdObjMeta.alt}
          />
        </figure>
      )}
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-1 text-xs leading-none uppercase">
          {node.field_recipe_category ? (
            <span className="p-1 bg-green-200">
              {node.field_recipe_category[0].name}
            </span>
          ) : null}
          <span className="inline-flex items-center justify-center text-4xl leading-[0] relative top-[-2px] bg-red-100">
            &middot;
          </span>
          {node.field_difficulty ? (
            <span className="p-1">{node.field_difficulty}</span>
          ) : null}
          <span className="inline-flex items-center justify-center text-4xl leading-[0] relative top-[-2px] bg-red-100">
            &middot;
          </span>
          {node.field_cooking_time ? (
            <span className="p-1">{node.field_cooking_time} min</span>
          ) : null}
        </div>
        <h3 className="text-xl group-hover:underline">{node.title}</h3>
      </div>
      <Link href={node.path.alias} passHref>
        <a className="absolute inset-0">
          <span className="sr-only">Learn more</span>
        </a>
      </Link>
    </article>
  )
}
