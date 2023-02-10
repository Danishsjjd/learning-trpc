import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import {
  createWSClient,
  httpBatchLink,
  loggerLink,
  splitLink,
  wsLink,
} from "@trpc/client"
import { useState } from "react"
import Client from "./Client"
import { trpc } from "./utils/trpc"

export default function App() {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink(),
        splitLink({
          condition(op) {
            return op.type === "subscription"
          },
          true: wsLink({
            client: createWSClient({
              url: "ws://localhost:3000",
            }),
          }),
          false: httpBatchLink({
            url: "http://localhost:3000",
            // ? optional
            // headers() {
            //   return {
            //     authorization: getAuthCookie(),
            //   };
            // },
          }),
        }),
      ],
    })
  )
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Client />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </trpc.Provider>
  )
}
