import { httpBatchLink, createTRPCProxyClient } from "@trpc/client"
import { AppRouter } from "../server/src/router/main"

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
})

async function main() {
  const res = await client.hello.query("danish")
  console.log(res)
}

main()
