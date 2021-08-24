import React, { useState, useRef } from "react"

export default function UseRefComponent() {
  const [name, setName] = useState("Lala")
  const inputRef = useRef()

  const changeName = () => {
    console.log(inputRef.current.event)
    setName(inputRef.current.value)
  }

  const focusAndClear = () => {
    inputRef.current.focus()
    inputRef.current.value = ""
  }

  return (
    <>
      <h1>useRef</h1>
      <h2>Name: {name}</h2>
      <input ref={inputRef} id="hi" />
      <button onClick={changeName}>Change name</button>
      <button onClick={focusAndClear}>Focus and Clear input</button>
    </>
  )
}