"use client"

import dynamic from "next/dynamic"

// import NavBar from "@/components/common/navBar"
// const Home = () => {
//   const onClick = () => {
//     console.log("123123123")
//   }
//   if (typeof window !== "undefined") {
//     console.log(window.innerHeight, "------")
//   }
//   return (
//     <div>
//       <h1>Home</h1>
//       <Button variant="contained" onClick={onClick}>
//         Hello home
//       </Button>
//     </div>
//   )
// }
const Width = dynamic(()=>import("./width"), { ssr: false })
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Width />
    </div>
  )
}
