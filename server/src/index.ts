import { createExpressMiddleware } from "@trpc/server/adapters/express"
import { applyWSSHandler } from "@trpc/server/adapters/ws"
import cors from "cors"
import express from "express"
import ws from "ws"
import createContext from "./context"
import { appRouter } from "./router/main"

const app = express()
app.use(cors({ origin: "*" }))

app.use(
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
)

const server = app.listen(3000, () => {
  console.log("server is running")
})

applyWSSHandler({
  wss: new ws.Server({ server }),
  router: appRouter,
  createContext,
})
