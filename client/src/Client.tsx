import { trpc } from "./utils/trpc"
const Client = () => {
  const hello = trpc.adminRoute.useQuery("hello")
  if (!hello.data) return <div>Loading...</div>

  console.log(hello.data)

  return <div>Client</div>
}

export default Client
