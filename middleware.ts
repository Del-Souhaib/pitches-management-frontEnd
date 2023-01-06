import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log('//////////////////////heeeree//////////////')
    const client = request.cookies.get('client')?.value
    const admin = request.cookies.get('admin')?.value

    console.log(request.nextUrl.pathname)
    // if(admin && request.nextUrl.pathname=='/admin/auth/login'){
    //     console.log(1)
    //     return NextResponse.redirect(new URL('/admin', request.url))
    // }
    //
    // if(client && request.nextUrl.pathname=='/client/auth/login'){
    //     console.log(2)
    //     return NextResponse.redirect(new URL('/', request.url))
    // }
    // // @ts-ignore
    // if(request.nextUrl.pathname.startsWith('/admin') && ! admin && !request.nextUrl.pathname.startsWith('/admin/auth')) {
    //     console.log(3)
    //     return NextResponse.redirect(new URL('/admin/auth/login?redirecturl='+request.nextUrl.pathname, request.url))
    // }
    // else if(!client && request.nextUrl.pathname!='/client/auth/login'){
    //     console.log(4)
    //     return NextResponse.redirect(new URL('/client/auth/login?redirecturl='+request.nextUrl.pathname, request.url))
    //
    // }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/client/auth/login','/admin/:path*'],
}
