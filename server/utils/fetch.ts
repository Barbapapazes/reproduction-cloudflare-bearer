import type { H3Event } from 'h3'

export const useCircleClient = (event: H3Event) => {
  const config = useRuntimeConfig(event)
  return $fetch.create({
    baseURL: config.endpoint,
    headers: {
      'Authorization': `Bearer ${config.circle.apiKey}`,
    },
  })
}
