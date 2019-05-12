import React from "react"

import { useTitleInput } from "./hooks/useTitleInput"

const App = () => {
  const [name, setName] = useTitleInput("")
  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <h3>{name}</h3>
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
      </form>
    </div>
  )
}

export default App
