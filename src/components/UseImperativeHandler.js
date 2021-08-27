import React, { useRef } from "react"
import Button from "./Button"

export default function UseImperativeHandlerComponent() {
  const buttonRef = useRef(null)

  const handleClick = () => {
    buttonRef.current.alterToggle()
  }

  return (
    <>
      <h1>useImperativeHandler</h1>
      <button onClick={handleClick}>Button from parent</button>
      <Button ref={buttonRef} />
    </>
  )
}