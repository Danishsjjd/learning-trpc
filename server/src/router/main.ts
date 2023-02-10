import { z } from "zod"
import { adminProcedure, router } from "../trpc"

export const appRouter = router({
  adminRoute: adminProcedure.input(z.string()).query((req) => {
    const {
      ctx: { userId },
      input,
    } = req

    console.log(userId)

    return `Hello!, Admin ${input}`
  }),
  // users: userRouter,
})

export type AppRouter = typeof appRouter
