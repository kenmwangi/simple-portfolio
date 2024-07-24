import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

// Define public routes including dynamic blog routes
const publicRoutes = ["/", "/blog", /^\/blog\/.*/];
const authRoutes = ["/login", "/register"];
const apiAuthPrefix = "/api/auth";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  console.log({ isLoggedIn, path: nextUrl.pathname });

  if (nextUrl.pathname.startsWith(apiAuthPrefix)) {
    return NextResponse.next();
  }

  // Check for public routes
  if (publicRoutes.some(route => typeof route === 'string' ? route === nextUrl.pathname : route.test(nextUrl.pathname))) {
    return NextResponse.next();
  }

  if (isLoggedIn && authRoutes.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  if (
    !isLoggedIn &&
    !authRoutes.includes(nextUrl.pathname) &&
    !publicRoutes.some(route => typeof route === 'string' ? route === nextUrl.pathname : route.test(nextUrl.pathname))
  ) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};


// import NextAuth from "next-auth";
// import authConfig from "./auth.config";
// import { NextResponse } from "next/server";

// const { auth } = NextAuth(authConfig);

// const publicRoutes = ["/", "/blog"];
// const authRoutes = ["/login", "/register"];
// const apiAuthPrefix = "/api/auth";

// export default auth((req) => {
//   const { nextUrl } = req;
//   const isLoggedIn = !!req.auth;

//   console.log({ isLoggedIn, path: nextUrl.pathname });

//   if (nextUrl.pathname.startsWith(apiAuthPrefix)) {
//     return NextResponse.next();
//   }

//   if (publicRoutes.includes(nextUrl.pathname)) {
//     return NextResponse.next();
//   }

//   if (isLoggedIn && authRoutes.includes(nextUrl.pathname)) {
//     return NextResponse.redirect(new URL("/dashboard", nextUrl));
//   }

//   if (
//     !isLoggedIn &&
//     !authRoutes.includes(nextUrl.pathname) &&
//     !publicRoutes.includes(nextUrl.pathname)
//   ) {
//     return NextResponse.redirect(new URL("/login", nextUrl));
//   }

//   return NextResponse.next();
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };
