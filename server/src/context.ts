import { CreateExpressContextOptions } from "@trpc/server/adapters/express"

const createContext = ({}: CreateExpressContextOptions) => ({ isAdmin: true })

export default createContext
