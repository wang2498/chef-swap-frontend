import { createToDo, findToDos } from "./actions"
import Button from "./button"

export default async function Page() {
  const todos = await findToDos()
  return (
    <>
      <form action={createToDo}>
        <input type="text" name="todo" />
        <button type="submit">Submit</button>
      </form>
      <Button />
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </>
  )
}
