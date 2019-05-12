import React, { useState } from "react"

const App = () => {
  const [name, setName] = useState("")
  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <h3>{name}</h3>
      <form
        onSubmit={e => {
          e.preventDefault()
          formSubmit()
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

const formSubmit = () => {
  console.log("submit")
}

export default App
