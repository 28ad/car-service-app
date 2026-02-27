import { cookies } from "next/headers"
import { createServerClient } from "@supabase/ssr"

export async function createServerSupabase() {
  const cookieStore = await cookies()

  return createServerClient(
    'https://mnoykneltpjpavvnsbwn.supabase.co',
    'sb_publishable_yIkpiTLfNKAZ6W1buhzDcA_nlVG4f6L',
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        },
      },
    }
  )
}