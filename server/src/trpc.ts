import { inferAsyncReturnType, initTRPC, TRPCError } from "@trpc/server"
import createContext from "./context"

export const t = initTRPC
  .context<inferAsyncReturnType<typeof createContext>>()
  .create()

// ! middleware must create after instance of initTRPC.create()
export const isAdmin = t.middleware(({ next, ctx }) => {
  if (!ctx.isAdmin) throw new TRPCError({ code: "UNAUTHORIZED" })

  return next({ ctx: { userId: 1 } })
})

export const router = t.router
export const procedure = t.procedure

export const adminProcedure = t.procedure.use(isAdmin)
