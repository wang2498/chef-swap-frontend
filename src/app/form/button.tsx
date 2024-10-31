"use client"

import { createToDoDirectly } from "./actions"

export default async function Page() {
  const onClick = async () => {
    const data = await createToDoDirectly("运动")
    alert(JSON.stringify(data))
  }
  return <button onClick={onClick}>添加哈哈哈</button>
}
