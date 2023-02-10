import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client"
import { useState } from "react"
import Client from "./Client"
import { trpc } from "./utils/trpc"

export default function App() {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000",
          // ? optional
          // headers() {
          //   return {
          //     authorization: getAuthCookie(),
          //   };
          // },
        }),
      ],
    })
  )
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Client />
      </QueryClientProvider>
    </trpc.Provider>
  )
}
