import { trpc } from "./utils/trpc"

const Client = () => {
  const { mutate } = trpc.users.update.useMutation()
  const hello = trpc.adminRoute.useQuery("hello", {})

  trpc.users.onUpdate.useSubscription(undefined, {
    onData(data) {
      console.log("on data", data)
    },
  })

  console.log(hello.data)

  const updateUserHandler = () => {
    mutate("danish")
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        color: "white",
      }}
      onClick={updateUserHandler}
    />
  )
}

export default Client
