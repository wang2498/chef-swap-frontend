import { NextRequest, NextResponse } from "next/server"

export function authMiddleware(request: NextRequest) {
  const { pathname, search, origin, basePath } = request.nextUrl
  console.log(pathname, "pathname")
  console.log(search, "search")
  console.log(origin, "origin")
  console.log(basePath, "basePath")
  const token = request.headers.get("authorization")
  console.log(token, "----token")
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }
  return NextResponse.next()
}
