import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { NextResponse, type NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  const cookieStore = cookies()
  console.log(cookieStore, "cookieStore------")
  const token2 = cookieStore.get("token")
  const token = request.cookies.get("token")
  const res = await fetch("https://api.thecatapi.com/v1/images/search")
  console.log(res, "----res")
  const data = await res.json()
  request.cookies.set(`token3`, 123)
  return NextResponse.json({
    data,
    token,
    token2,
  })
}

export async function POST(request: NextRequest) {
  console.log(request, "post----request")
  const article = await request.json()
  redirect("https://nextjs.org/")
}
