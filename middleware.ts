import { NextRequest, NextResponse } from 'next/server';

// 1. Specify protected and public paths
const PROTECTED_PATHS = ['/admin'];
const AUTH_FORMS_PATH = '/admin/login';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get('sessionToken')?.value;
  const isAuthenticated = !!sessionToken;

  console.log(`Middleware running for path: ${pathname}`);
  console.log(`Is authenticated: ${isAuthenticated}`);

  // 2. Check if the user is trying to access a protected path
  const isProtected = PROTECTED_PATHS.some((path) => pathname.startsWith(path));

  // If the path is not protected, let the request go through
  if (!isProtected) {
    return NextResponse.next();
  }

  // 3. Handle redirection logic
  const isAuthForm = pathname === AUTH_FORMS_PATH;

  // If user is not authenticated and is trying to access a protected page (that isn't the login page)
  if (!isAuthenticated && !isAuthForm) {
    console.log('User not authenticated, redirecting to login.');
    const loginUrl = new URL(AUTH_FORMS_PATH, request.url);
    loginUrl.searchParams.set('redirect', pathname); // Optionally add a redirect parameter
    return NextResponse.redirect(loginUrl);
  }

  // If user is authenticated and is trying to access the login page
  if (isAuthenticated && isAuthForm) {
    console.log('User already authenticated, redirecting to dashboard.');
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  // 4. If none of the above, let the request continue
  return NextResponse.next();
}

// 5. Configure the matcher to run middleware only on admin routes
export const config = {
  matcher: ['/admin/:path*'],
};
