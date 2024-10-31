import { Suspense } from "react"

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function PostFeed() {
  await sleep(2000)
  return <h1>Hello PostFeed</h1>
}

async function Weather() {
  await sleep(8000)
  return <h1>Hello Weather</h1>
}

async function Recommend() {
  await sleep(5000)
  return <h1>Hello Recommend</h1>
}

export default function Dashboard() {
  return (
    <section style={{ padding: "20px" }}>
      <Suspense fallback={<p>😆😆😆😆😆😆😆Loading PostFeed</p>}>
        <PostFeed />
        <Suspense fallback={<p>🤪🤪🤪🤪🤪🤪🤪Loading Weather</p>}>
          <Weather />
          <Suspense fallback={<p>🤩🤩🤩🤩🤩🤩🤩🤩Loading Recommend</p>}>
            <Recommend />
          </Suspense>
        </Suspense>
      </Suspense>
    </section>
  )
}
