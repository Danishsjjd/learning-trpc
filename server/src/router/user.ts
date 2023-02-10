import { z } from "zod"
import { router, procedure } from "../trpc"
import EventEmitter from "events"
import { observable } from "@trpc/server/observable"

const emitter = new EventEmitter()

export const userRouter = router({
  update: procedure
    .input(z.string())
    .output(z.object({ name: z.string(), email: z.string().email() }))
    .mutation((req) => {
      emitter.emit("userUpdate", `subscription: ${req.input}`)
      return {
        name: req.input,
        email: "dev@dev.com",
        password: "hashed password",
      }
    }),
  onUpdate: procedure.subscription(() => {
    return observable<string>((emit) => {
      emitter.on("userUpdate", emit.next)

      return () => {
        emitter.off("userUpdate", emit.next)
      }
    })
  }),
})
