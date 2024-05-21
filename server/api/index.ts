export default defineEventHandler(async (event) => {
  const client = useCircleClient(event)

  await client('/')

  return {
    body: 'Hello from the server!',
  }
})
