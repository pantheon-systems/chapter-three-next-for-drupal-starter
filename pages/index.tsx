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

interface IndexPageProps {
  articles: DrupalNode[]
}

export default function IndexPage({ articles }: IndexPageProps) {
  return (
    <Layout>
      <Head>
        <title>
          {config.name} - {config.description}
        </title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      <div>
        <Hero
          heading="Welcome to Pantheon Decoupled"
          lead="Level up user experience, resilience, and results with front-end frameworks and a headless open source CMS on a single platform"
          className="bg-gray-50"
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
        <section className="pb-10 md:pb-20">
          <SectionHeading
            heading="Latest Articles"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit vulputate dui elit, blandit aliquam neque bibendum vitae"
          />
          {articles?.length ? (
            <div className="container grid max-w-6xl gap-8 px-4 mx-auto md:gap-12 md:grid-cols-2">
              {articles.map((article) => (
                <NodeArticleTeaser key={article.id} node={article} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">No articles found.</p>
          )}
        </section>
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
          "field_image",
          "uid",
          "created",
        ])
        .addFilter("status", "1")
        .addInclude(["field_image", "uid"])
        .addSort("created", "desc")
        .addPageLimit(4)
        .getQueryObject(),
    }
  )

  return {
    props: {
      articles,
    },
    revalidate: 10,
  }
}
