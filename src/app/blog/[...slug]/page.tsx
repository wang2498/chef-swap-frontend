"use client"

import Button from "@mui/material/Button"

export default function Page({
  params,
}: {
  params: { slug: Array<{ name: string }> }
}) {
  console.log(params, "----staticParams")

  const onClick = async () => {
    const res = await fetch("/api/search", { method: "GET" })
    console.log(res, "-----res")
    const post = await res.json()

    console.log(post, "----post")
  }
  return (
    <div className="">
      {params.slug.map((item: any) => (
        <h1 key={item}>{item}</h1>
      ))}
      <Button variant="contained" color="primary" onClick={onClick}>
        blog
      </Button>
      <div className="h-40 w-60 rounded-md bg-rose-500 text-3xl">box</div>
    </div>
  )
}
