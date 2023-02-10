import {
  httpBatchLink,
  createTRPCProxyClient,
  TRPCClientError,
  loggerLink,
} from "@trpc/client"
import { AppRouter } from "../server/src/router/main"

const client = createTRPCProxyClient<AppRouter>({
  links: [
    loggerLink(),
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
})

async function main() {
  const res = await client.adminRoute.query("Danish", {
    context: { isAdmin: true },
  })
  console.log(res)
}

main().catch((err: TRPCClientError<AppRouter>) => {
  console.log(err)
})
