import { router, procedure } from "../trpc"
import { z } from "zod"

const appRouter = router({
  hello: procedure.input(z.string()).query((req) => {
    return `Hello!, Mr/Ms ${req.input}`
  }),
})

export type AppRouter = typeof appRouter

export default appRouter
