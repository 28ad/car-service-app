// @/supabase/middleware.ts
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })
  // With Fluid compute, don't put this client in a global environment
  // variable. Always create a new one on each request.
  const supabase = createServerClient(
    'https://mnoykneltpjpavvnsbwn.supabase.co',
    'sb_publishable_yIkpiTLfNKAZ6W1buhzDcA_nlVG4f6L',
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  console.log(
  '[Middleware cookies]',
  request.cookies.getAll().map(c => c.name)
)


  const { data } = await supabase.auth.getSession()
  const user = data?.session?.user

  console.log(data)

  // Protected routes
  const protectedPaths = ['/dashboard', '/account', '/vehicles']
  const isProtected = protectedPaths.some(path =>
    request.nextUrl.pathname.startsWith(path)
  )

  // redirect to login if not authenticated
  if (isProtected && !user) {
    console.log('[Middleware] Redirecting to /login')
    return NextResponse.redirect(new URL('/login', request.url))
  }



    return supabaseResponse
}