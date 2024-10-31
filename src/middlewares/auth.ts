import { NextRequest, NextResponse } from "next/server"

export function authMiddleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("hello-middleware", "yeyeyeyeyeye")
  const { pathname, search, origin, basePath } = request.nextUrl
  console.log(pathname, "pathname")
  console.log(search, "search")
  console.log(origin, "origin")
  console.log(basePath, "basePath")
  const token = request.headers.get("authorization") || "123"
  console.log(token, "----token")
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }
  const cookies = request.cookies.getAll()
  console.log(cookies, "cookies-----")
  const hasToken = request.cookies.has("token")
  request.cookies.set("token", "123")
  console.log(hasToken, "hasToken-----")
  request.cookies.delete("token")
  console.log(request.cookies.has("token"), "hasToken-----")
  const response = NextResponse.next({
    request: {
      // 设置新请求标头
      headers: requestHeaders,
    },
  })
  response.cookies.set({
    name: "token1",
    value: "ttt",
    path: "/abc",
  })
  response.headers.set("x-hello-from-middleware2", "hello")
  console.log(response.cookies.get("token1"), "-----response.cookie")
  return response
}
