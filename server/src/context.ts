import { CreateExpressContextOptions } from "@trpc/server/adapters/express"

const createContext = ({}: CreateExpressContextOptions) => ({ isAdmin: false })

export default createContext
