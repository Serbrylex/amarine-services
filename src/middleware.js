// middleware.ts
import { NextResponse } from 'next/server'

// Urls donde no te pide el token
const WHITE_LIST = ['/api', '/_next', '/login', 'csv', '/images', '/favicon']

export function middleware(request) {
    let isInWhiteList = false
    WHITE_LIST.forEach((url)=>{
        if (request.nextUrl.pathname.startsWith(url)) {
            isInWhiteList = true
        }
    })

    // Si no existe la cookie login y la url no está en la white list te manda a login
    // si una de las condiciones no se cumple, sigue el flujo normal
    if (request.cookies.get('Token') === undefined && isInWhiteList == false) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: ['/', '/((?!api/).*)'],
};