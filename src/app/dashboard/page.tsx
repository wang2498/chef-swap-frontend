import Header from "@/components/common/header"

async function getPost() {
  return fetch(`http://localhost:8888/api/reSearch`).then((res) => res.json())
}
async function getSearch() {
  return fetch(`http://localhost:8888/api/search?a=1111&b=121`).then((res) => res.json())
}
export default async function Page({ params, ...props }: { params: { id: string } }) {
  console.log(params, "params", props, "--------")
  const data = await getPost()
  const searchData = await getSearch()
  // console.log(data, "---------data")
  console.log(searchData, "---------searchData")

  return (
    <div className="">
      <Header />
      <h1>{data.message}</h1>
      <ul>
        {data.data.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <h1 className="h-10 w-40 rounded-md bg-cyan-600 text-3xl">{searchData.date}</h1>
      <div className="h-40 w-60 rounded-md bg-rose-500 text-3xl">box</div>
    </div>
  )
}
