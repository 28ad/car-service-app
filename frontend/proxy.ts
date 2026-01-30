// middleware.ts
import { type NextRequest } from 'next/server'
import { updateSession } from '@/app/supabase/proxy'

export async function proxy(request: NextRequest) {
    return await updateSession(request)
}

export const config = {
  matcher: [
    '/dashboard/:path*', '/account/:path*', '/vehicles/:path*'
  ],
}