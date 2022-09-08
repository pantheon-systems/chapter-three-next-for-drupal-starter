import { DrupalClient } from "next-drupal"

export const drupal = new DrupalClient(process.env.BACKEND_URL, {
  previewSecret: process.env.DRUPAL_PREVIEW_SECRET,
  auth: {
    clientId: process.env.DRUPAL_CLIENT_ID,
    clientSecret: process.env.DRUPAL_CLIENT_SECRET,
  },
  // @see https://next-drupal.org/docs/configuration#forceiframesamesitecookie
  forceIframeSameSiteCookie: process.env.NODE_ENV === "development",
})
