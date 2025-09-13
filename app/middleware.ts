import { NextRequest, NextResponse } from "next/server";

const PROTECTED_PATH = ['/dashboard'];

const PUBLIC_PATH = ['/','/post'];

const AUTH_FORMS_PATH = ['/login'];

export async function middleware(request:NextRequest) {
    const {pathname} = request.nextUrl;

    const sessionToken = request.cookies.get("sessionToken")?.value;
    const isAuthenticated = !!sessionToken;

    const isProtectedPath = PROTECTED_PATH.some(
        path=>pathname.startsWith(path)
    )

    if(!isAuthenticated && isProtectedPath){
           console.log(`Middleware: User not authenticated for ${pathname}, redirecting to /login`);
           const loginUrl = new URL('/login',request.url);

           loginUrl.searchParams.set('redirect' ,pathname + request.nextUrl.search);

           return NextResponse.redirect(loginUrl);
    }

    const isAuthFormsPath = AUTH_FORMS_PATH.includes(pathname);

    if(isAuthFormsPath && isAuthenticated){
        console.log(`Middilware: User authenticated and try to access ${pathname}, redirect to dashboard`)

        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    console.log(`Middleware Allow to access ${pathname}`)

    return NextResponse.next();
    
}

// 5. কোন পাথগুলোর জন্য এই Middleware রান হবে তা নির্দিষ্ট করুন (matcher)
//    এটি খুবই গুরুত্বপূর্ণ, কারণ আমরা সব রিকোয়েস্টের জন্য Middleware চালাতে চাই না।
export  const config = {
  matcher: [
    // সব পাথ ম্যাচ করো...
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)',
    // কিন্তু নিচের পাথগুলো বাদ দাও:
    // - /api (আপনার API routes)
    // - _next/static (Next.js এর স্ট্যাটিক ফাইল)
    // - _next/image (Next.js এর ইমেজ অপটিমাইজেশন ফাইল)
    // - favicon.ico (ওয়েবসাইটের আইকন)
    // - .png (অন্যান্য ইমেজ ফাইল, বা আপনি যা যা এক্সক্লুড করতে চান)

    // উপরের রেগুলার এক্সপ্রেশনটি মূলত PROTECTED_PATHS এবং AUTH_FORMS_PATHS এর জন্য Middleware রান করবে।
    // এছাড়াও অন্যান্য নন-স্ট্যাটিক বা নন-API পাথগুলির জন্যও রান করবে।
    // যদি আপনার `PROTECTED_PATHS` বা `AUTH_FORMS_PATHS` এর বাইরেও কোনো নির্দিষ্ট পেজের জন্য
    // Middleware রান করতে চান, তাহলে এখানে সরাসরি যোগ করতে পারেন, যেমন:
    // '/some-other-path',
  ],
};