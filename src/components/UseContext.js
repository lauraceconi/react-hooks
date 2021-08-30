import React, { createContext, useState, useContext, useRef } from "react"

export const AppContext = createContext(null)

export default function UseContextComponent() {
  const [username, setUsername] = useState("lceconi");
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <h1>useContext</h1>
      <User />
    </AppContext.Provider>
  )
}

function User() {
  const { username, setUsername } = useContext(AppContext)
  const inputRef = useRef()

  return (
    <>
      <p>{username}</p>
      <input ref={inputRef} />
      <button onClick={() => setUsername(inputRef.current.value)}>Change!</button>
    </>
  )
}