This is a small reproduction for a possible bug in Cloudflare or ofetch.

You need to build the nuxt app and deploy it on cloudflare

```bash
NITRO_PRESET=cloudflare_pages npm run build
```

```bash
npx wrangler pages deploy dist/
```

Then you can start the `server.mjs` file.

```bash
node server.mjs # Start on port 4000
```

The Nuxt application will make a request to the endpoint using the bearer token and the response will be logged to the console.

Use cloudflare tunnel to expose the small node server to the internet. (used to verify the issue from cloudflare)

```bash
cloudflared tunnel --url http://localhost:4000
```

Get the tunnel name and set the `NUXT_ENDPOINT` environment variable to the tunnel name.

```bash
NUXT_ENDPOINT=<tunnel-name>.trycloudflare.com
```

Setup the bearer token:

```bash
NUXT_CIRCLE_API_KEY=<bearer-token>
```
