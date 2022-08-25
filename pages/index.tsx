import Head from "next/head"
import { GetStaticPropsResult } from "next"
import Link from "next/link"
import { DrupalNode } from "next-drupal"
import { DrupalJsonApiParams } from "drupal-jsonapi-params"

import { drupal } from "@/lib/drupal"
import { config } from "@/lib/config"
import { Layout } from "@/components/layout"
import { NodeArticleTeaser } from "@/components/node--article--teaser"
import { Hero } from "@/components/hero"
import { SectionHeading } from "@/components/section-heading"
import { NodeRecipeTeaser } from "@/components/node--recipe--teaser"

interface IndexPageProps {
  articles: DrupalNode[]
  recipes: DrupalNode[]
}

export default function IndexPage({ articles, recipes }: IndexPageProps) {
  return (
    <Layout>
      <Head>
        <title>{config.name}</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      <div>
        <Hero
          heading="Welcome to Pantheon Decoupled"
          lead="Level up user experience, resilience, and results with front-end frameworks and a headless open source CMS on a single platform"
          className="bg-yellow-50"
        >
          <Link href="https://next-drupal.org/docs" passHref>
            <a
              target="_blank"
              rel="external"
              className="px-8 py-3 text-lg font-semibold text-black transition-colors bg-transparent border-2 border-black hover:bg-yellow-300 hover:text-black"
            >
              Get Started
            </a>
          </Link>
        </Hero>
        {recipes?.length ? (
          <section>
            <SectionHeading
              heading="Popular Recipes"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit vulputate dui elit, blandit aliquam neque bibendum vitae"
            />
            <div className="container grid grid-cols-4 px-4 mx-auto gap-14">
              {recipes.map((recipe) => (
                <NodeRecipeTeaser key={recipe.id} node={recipe} />
              ))}
            </div>
          </section>
        ) : null}
        <div className="py-10" />
        {articles?.length ? (
          <section className="pb-20 bg-green-50">
            <SectionHeading
              heading="Latest Articles"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit vulputate dui elit, blandit aliquam neque bibendum vitae"
            />
            <div className="container grid max-w-6xl grid-cols-2 gap-12 px-4 mx-auto">
              {articles.map((article) => (
                <NodeArticleTeaser key={article.id} node={article} />
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </Layout>
  )
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<IndexPageProps>> {
  // Fetch the most recent articles.
  const articles = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--article",
    context,
    {
      params: new DrupalJsonApiParams()
        .addFields("node--article", [
          "title",
          "path",
          "field_media_image",
          "uid",
          "created",
        ])
        .addFilter("status", "1")
        .addInclude(["field_media_image.field_media_image", "uid"])
        .addSort("created", "desc")
        .addPageLimit(4)
        .getQueryObject(),
    }
  )

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
        .addPageLimit(4)
        .getQueryObject(),
    }
  )

  return {
    props: {
      articles,
      recipes,
    },
  }
}
