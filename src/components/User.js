import React, { useContext, useRef } from "react"
import { AppContext } from "./UseContext"

export default function User() {
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