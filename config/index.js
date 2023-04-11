export const isDev = !process.env.NUXT_ENV_BUILD === "production"

const config = {
  API_URL:
    process.env.NUXT_ENV_BUILD === "production"
      ? "http://localhost:8000" // TODO : DNS 추후 교체
      : process.env.NUXT_ENV_BUILD === "development"
      ? "http://localhost:8000" // TODO : DNS 추후 교체
      : "http://localhost:8000",
  API_TIMEOUT: 300 * 1000,


}

export default config