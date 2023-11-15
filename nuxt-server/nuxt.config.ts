// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    openaiApiKey: "",
    BLOB_READ_WRITE_TOKEN: "",
  },
});
