import Head from "next/head"
import { GetStaticPropsResult } from "next"
import Link from "next/link"
import { DrupalNode } from "next-drupal"
import { DrupalJsonApiParams } from "drupal-jsonapi-params"

import { drupal } from "@/lib/drupal"
import { config } from "@/lib/config"
import { Layout } from "@/components/layout"
import { SectionHeading } from "@/components/section-heading"
import { NodeRecipeTeaser } from "@/components/node--recipe--teaser"

interface RecipesPageProps {
  recipes: DrupalNode[]
}

export default function RecipesPage({ recipes }: RecipesPageProps) {
  return (
    <Layout>
      <Head>
        <title>Recipes | {config.name}</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      {recipes?.length ? (
        <section className="pb-20">
          <SectionHeading
            heading="All Recipes"
            headingLevel={1}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit vulputate dui elit, blandit aliquam neque bibendum vitae"
          />
          <div className="container grid grid-cols-4 px-4 mx-auto gap-14">
            {recipes.map((recipe) => (
              <NodeRecipeTeaser key={recipe.id} node={recipe} />
            ))}
          </div>
        </section>
      ) : null}
    </Layout>
  )
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<RecipesPageProps>> {
  // Fetch the most recent recipes.
  const recipes = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--recipe",
    context,
    {
      params: new DrupalJsonApiParams()
        .addInclude([
          "field_media_image.field_media_image",
          "field_recipe_category",
          "field_tags",
        ])
        .addFields("node--recipe", [
          "title",
          "status",
          "path",
          "field_recipe_category",
          "field_cooking_time",
          "field_difficulty",
          "field_media_image",
        ])
        .addFields("media--image", ["field_media_image"])
        .addFields("file--file", ["uri", "resourceIdObjMeta"])
        .addFields("taxonomy_term--recipe_category", ["name"])
        .addSort("created", "desc")
        .getQueryObject(),
    }
  )

  return {
    props: {
      recipes,
    },
  }
}
