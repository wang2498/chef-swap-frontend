"use server"

import { revalidatePath } from "next/cache"

const data = ["A", "B", "C"]

export async function findToDos() {
  return data
}

export async function createToDo(formData) {
  console.log(formData.get("todo"), "-----foo")
  const todo = formData.get("todo")
  data.push(todo)
  revalidatePath("/form")
  return data
}

export async function createToDoDirectly(val) {
  const form = new FormData()
  form.append("todo", val)
  return createToDo(form)
}
