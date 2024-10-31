export const dynamic = "force-static"

export async function GET() {
  const res = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ text: "hello" })
    }, 2000)
  })
  const data = await res.json()

  return Response.json(
    { data },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  )
}
