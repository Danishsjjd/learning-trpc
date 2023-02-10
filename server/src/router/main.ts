import { TRPCError } from "@trpc/server"
import { z } from "zod"
import { isAdmin } from "../middleware/admin"
import { procedure, router } from "../trpc"

const appRouter = router({
  adminRoute: procedure
    .use(isAdmin)
    .input(z.string())
    .query((req) => {
      if (!req.ctx.isAdmin)
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "UNAUTHORIZED", // message by default to error code name
        })
      return `Hello!, ${req.input}`
    }),
})

export type AppRouter = typeof appRouter

export default appRouter
