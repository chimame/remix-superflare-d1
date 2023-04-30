import { LoaderArgs } from "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react"
import { User } from "~/models/User"

export const loader = async ({ context }: LoaderArgs) => {
  const users = await User.all()

	return {
    users
  }
}

const Users = () => {
  const { users } = useLoaderData() as unknown as ReturnType<typeof loader> extends Promise<infer T> ? T : never

  return (
    <>
      <div>user count: {users.length}</div>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}({user.email})</li>)}
      </ul>
    </>
  )
}

export default Users
