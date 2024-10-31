import { NextMiddleware, NextResponse } from "next/server"

export function chain(functions: Array<() => NextMiddleware>, index = 0) {
  const current = functions[index]
  if (current) {
    const next = chain(functions, index + 1)
    return current(next)
  }
  return NextResponse.next()
}
