import { NextResponse, type NextRequest } from "next/server"

// export const dynamic = "force-static"
// export const revalidate = 10

export async function GET(request: NextRequest) {
  // const token = request.cookies.get('token')
  // request.cookies.set(`token2`, 123)
  // console.log(request, "get1----request")
  const searchParams = request.nextUrl.searchParams
  // const pathname = request.nextUrl.pathname
  // // const query = searchParams.get("query")
  // console.log(searchParams, pathname, "----query")
  const res = await fetch("https://api.thecatapi.com/v1/images/search")
  console.log(res, "----res")
  const data = await res.json()
  // const token = request.cookies.get("token")
  return NextResponse.json({
    date: new Date().toLocaleTimeString(),
    data,
  })
}

export async function POST(request: NextRequest) {
  const res = await request.json()
  console.log(request, "post----request")
  const article = await request.json()

  return NextResponse.json(
    {
      id: Math.random().toString(36).slice(-8),
      data: article,
    },
    { status: 201 }
  )
}
