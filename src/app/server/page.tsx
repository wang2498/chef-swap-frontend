async function getData() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search", { next: { revalidate: 5 } })
  if (!res.ok) {
    // 由最近的 error.js 处理
    throw new Error("Failed to fetch data")
  }
  return res.json()
}
export default async function Page({ searchParams }) {
  const data = await getData()
  return (
    <>
      <main>{JSON.stringify(data)}</main>
      <img src={data[0].url} width="300" />
    </>
  )
}
