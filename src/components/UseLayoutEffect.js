import React, { useEffect, useLayoutEffect, useRef } from "react"

export default function UseLayoutEffectComponent() {
  const inputRef = useRef()

  useLayoutEffect(() => {
    console.log(inputRef.current.value) // Lala
  })

  useEffect(() => {
    inputRef.current.value = "Oi Lala"
  })

  return (
    <>
      <h1>useLayoutEffect</h1>
      <input ref={inputRef} value="Lala" />
    </>
  )
}