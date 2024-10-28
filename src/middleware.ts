import { NextRequest } from "next/server"

import { authMiddleware } from "@/middlewares/auth"

// import { TranslatorMiddleware } from "@/middlewares/translator"

export function middleware(request: NextRequest) {
  console.log("middleware-------------")
  // return TranslatorMiddleware(request)
  return authMiddleware(request)
}

export const config = {
  matcher: "/home/:path*",
}
