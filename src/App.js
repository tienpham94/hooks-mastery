import React, { useState, useEffect } from "react"

const App = () => {
  const [name, setName] = useState("")

  useEffect(() => {
    document.title = name
  })

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
