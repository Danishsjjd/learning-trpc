import { createExpressMiddleware } from "@trpc/server/adapters/express"
import cors from "cors"
import express from "express"
import createContext from "./context"
import appRouter from "./router/main"

const app = express()
app.use(cors({ origin: "*" }))

app.use(
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
)

app.listen(3000, () => {
  console.log("server is running")
})
