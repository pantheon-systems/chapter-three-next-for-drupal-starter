// Set some environment variables to work with Pantheon.
process.env.BACKEND_URL = `https://${process.env.PANTHEON_CMS_ENDPOINT}`
process.env.NEXT_PUBLIC_DRUPAL_BASE_URL = process.env.BACKEND_URL

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.IMAGE_DOMAIN || process.env.PANTHEON_CMS_ENDPOINT],
  },
  output: "standalone",
}

module.exports = nextConfig
