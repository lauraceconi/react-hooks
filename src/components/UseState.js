import React, { useState } from "react"

export default function UseStateComponent() {
  const [counter, setCounter] = useState(0)

  const handleAdd = () => setCounter(prevCounter => prevCounter + 1)
  const handleRemove = () => setCounter(prevCounter => prevCounter - 1)

  return (
    <>
      <h1>useState</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </>
  )
}