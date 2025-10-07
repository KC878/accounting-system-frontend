import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server';

export const middleware = (req: NextRequest) => {
  const session = req.cookies.get('sessionid')
  // const token = req.cookies.get('csrftoken')

  

  const { pathname } = req.nextUrl;

  console.log('Session Middleware: ', session);
  
  if (session && pathname === '/') {
    
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  if (!session && pathname.startsWith('/dashboard')) {

    return NextResponse.redirect(new URL('/', req.url));
  }


  // Test 
  // const login = true;
  // if(login && pathname === '/'){
  //   return NextResponse.redirect(new URL('/dashboard', req.url));
  // }
  // if(!login && pathname === '/dashboard'){
  //   return NextResponse.redirect(new URL('/', req.url));
  // }

  

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*'], // include nested routes
};