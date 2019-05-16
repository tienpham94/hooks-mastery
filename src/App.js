import React, { useMemo } from "react"
import Toggle from "./Toggle"
import Counter from "./Counter"
import { useTitleInput } from "./hooks/useTitleInput"

const App = () => {
  const [name, setName] = useTitleInput("")

  const reverseWord = word => {
    console.log("function call")
    return word
      .split("")
      .reverse()
      .join("")
  }

  const title = "Level Up Dishes"

  const TitleReversed = useMemo(() => reverseWord(title), [title])

  return (
    <div className="main-wrapper">
      <h1>{TitleReversed}</h1>
      <Toggle />
      <Counter />
      <form
        onSubmit={e => {
          e.preventDefault()
        }}
      >
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
