export default defineEventHandler(async (event) => {
  const client = useCircleClient(event)

  await client('/', {
    method: 'POST',
  })

  return {
    body: 'Hello from the server!',
  }
})
