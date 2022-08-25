import Head from "next/head"
import { GetStaticPropsResult } from "next"
import { DrupalNode } from "next-drupal"
import { DrupalJsonApiParams } from "drupal-jsonapi-params"

import { drupal } from "@/lib/drupal"
import { config } from "@/lib/config"
import { Layout } from "@/components/layout"
import { NodeArticleTeaser } from "@/components/node--article--teaser"
import { SectionHeading } from "@/components/section-heading"

interface ArticlesPageProps {
  articles: DrupalNode[]
}

export default function ArticlesPage({ articles }: ArticlesPageProps) {
  return (
    <Layout>
      <Head>
        <title>Articles | {config.name}</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>

      {articles?.length ? (
        <section className="pb-20">
          <SectionHeading
            heading="All Articles"
            headingLevel={1}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit vulputate dui elit, blandit aliquam neque bibendum vitae"
          />
          <div className="container grid max-w-6xl grid-cols-2 gap-12 px-4 mx-auto">
            {articles.map((article) => (
              <NodeArticleTeaser key={article.id} node={article} />
            ))}
          </div>
        </section>
      ) : null}
    </Layout>
  )
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<ArticlesPageProps>> {
  // Fetch all articles.
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
        .getQueryObject(),
    }
  )

  return {
    props: {
      articles,
    },
  }
}
