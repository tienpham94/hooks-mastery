import React, { useRef, createContext } from "react"

import { useTitleInput } from "./hooks/useTitleInput"

const UserContext = createContext()

const App = () => {
  const [name, setName] = useTitleInput("")
  const ref = useRef()

  return (
    <UserContext.Provider>
      <div className="main-wrapper" ref={ref}>
        <h1 onClick={() => ref.current.classList.add("new-class")}>
          Level Up Dishes
        </h1>
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
    </UserContext.Provider>
  )
}

export default App
