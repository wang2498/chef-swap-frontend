const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export default async function About() {
  await sleep(5000)
  return (
    <div className="flex h-60 flex-1 items-center justify-center rounded-xl bg-red-400 text-white">
      Page 123123123111111111
    </div>
  )
}
