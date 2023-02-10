import { TRPCError } from "@trpc/server"
import t from "../trpc"

export const isAdmin = t.middleware(({ next, ctx }) => {
  if (!ctx.isAdmin) throw new TRPCError({ code: "UNAUTHORIZED" })

  return next()
})
