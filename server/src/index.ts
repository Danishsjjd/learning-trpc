import express from "express"
import { createExpressMiddleware } from "@trpc/server/adapters/express"
import cors from "cors"
import appRouter from "./router/main"

const app = express()
app.use(cors({ origin: "*" }))

app.use(createExpressMiddleware({ router: appRouter }))

app.listen(3000, () => {
  console.log("server is running")
})
