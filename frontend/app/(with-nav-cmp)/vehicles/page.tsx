import { createServerSupabase } from "../../supabase/server"
import VehiclesClient from "./VehiclesClient"

export default async function Page() {
  const supabase = createServerSupabase()

  const { data: { user } } = await (await supabase).auth.getUser()

  if (!user) return <div>Not authenticated</div>

  console.log('User in page:', user.id)

  return <VehiclesClient userId={user.id} />
}