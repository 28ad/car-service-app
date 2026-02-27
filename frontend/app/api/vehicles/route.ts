import { createServerSupabase } from "../../supabase/server"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const supabase = createServerSupabase()

  const { data: { user } } = await (await supabase).auth.getUser()

  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const body = await req.json()

  const { error } = await (await supabase).from("vehicles").insert({
    vehicle_make: body.make,
    vehicle_model: body.model,
    vehicle_year: body.year,
    by_user: user.id,
    logo: body.logo,
  })

  if (error) {

    console.log('Error inserting vehicle:', error)
    return NextResponse.json({ error }, { status: 500 })

  }
    


  return NextResponse.json({ success: true })
}