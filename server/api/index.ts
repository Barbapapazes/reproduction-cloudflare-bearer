export default defineEventHandler(async () => {
  await $fetch('https://jewel-cultural-owen-new.trycloudflare.com', {
    headers: {
      'Authorization': 'Bearer my-token',
      'Content-Type': 'application/json',
    },
  })

  return {
    body: 'Hello from the server!',
  }
})
