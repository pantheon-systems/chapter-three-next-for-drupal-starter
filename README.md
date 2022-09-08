# Next.js for Pantheon Starter

This is a starter template for building a decoupled Next.js site on Pantheon Decoupled.

## Installation (Drupal)

1. Start by creating a new Drupal site on Pantheon.
2. Run the **Next.js for Pantheon** installer. You can find the documentation for enabling Next.js for Pantheon [here](https://github.com/chapter-three/pantheon-next#nextjs-for-drupal-on-pantheon).

## Installation (Next.js)

### Create Next.js site

Run the following command to create a new Next.js project:

```
npx create-next-app -e https://github.com/chapter-three/pantheon-next-starter
```

This will create a new starter project. [See project structure](#project-structure).

### Connect Drupal

To connect the Next.js site to Drupal, we use [environment variables](https://next-drupal.org/docs/environment-variables).

1. Copy `.env.example` to `.env.local`.
2. Visit `/admin/config/services/next/pantheon` and click **Environment Variables** under _Operations_.
3. Clic **Generate New Secret**.
4. Copy and paste the environment variables in your `.env.local` file.

```
NEXT_PUBLIC_DRUPAL_BASE_URL=http://example.com
NEXT_IMAGE_DOMAIN=example.com
DRUPAL_PREVIEW_SECRET=nnzMZarZsjw6QfrxskJSU
DRUPAL_CLIENT_ID=f4b1eebd-f0c0-3d1a-8e20-54d06be4646a
DRUPAL_CLIENT_SECRET=8AJCcfoesu767rhS3rqou
```

### Start Development Server

To start the Next.js development server, run `yarn dev`. This starts the development server on `http://localhost:3000`.

Visit [http://localhost:3000](http://localhost:3000) to view the Next.js site.

## Project Structure

The starter will create the following project structure for you.

```
.
├── components
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   ├── layout.tsx
│   ├── menu--footer.tsx
│   ├── menu--main.tsx
│   ├── node--article--teaser.tsx
│   ├── node--article.tsx
│   ├── node--basic-page.tsx
│   └── preview-alert.tsx
├── lib
│   ├── config.tsx
│   ├── drupal.tsx
│   └── utils.ts
├── pages
│   ├── api
│   │   ├── exit-preview.tsx
│   │   ├── preview.tsx
│   │   └── revalidate.ts
│   ├── _app.tsx
│   ├── [...slug].tsx
│   ├── articles.tsx
│   └── index.tsx
├── public
│   ├── favicon.ico
│   └── robots.txt
├── styles
│   └── globals.css
├── .env.example
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

| Path                 | Description                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------- |
| `components`         | Place your React components here.                                                                    |
| `lib`                | For utility or helper functions.                                                                     |
| `pages`              | Learn more about the pages directory [here](https://nextjs.org/docs/basic-features/pages)            |
| `public`             | For [static files](https://nextjs.org/docs/basic-features/static-file-serving).                      |
| `styles`             | Directory for CSS files.                                                                             |
| `next.config.js`     | [Configuration](https://nextjs.org/docs/api-reference/next.config.js/introduction) file for Next.js. |
| `tailwind.config.js` | [Configuration](https://tailwindcss.com/docs/configuration) file for Tailwind CSS.                   |

## Routing

The starter ships an entry point, `[...slug].tsx`, for entity routes. The `[...slug].tsx` route is called a catch-all route.

When you create an entity on Drupal, and visit the route on your Next.js site, this is the file that handles data fetching and rendering for the entity.

You can read more about routing in Next.js on the [official docs](https://nextjs.org/docs/routing/introduction).

## Data Fetching

To build pages from Drupal content, data is fetch in `getStaticProps` and passed to the component.

See the [documentation](https://next-drupal.org/docs/data-fetching) on data fetching in next-drupal.

## Documentation

You can read more about Next.js for Drupal on the official docs. https://next-drupal.org/docs.
